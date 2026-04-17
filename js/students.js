const UZNAMES = [
    "Azizov Alisher", "Qodirova Malika", "Tohirov Jasur", "Salimova Madina", "Ibrohimov Doniyor",
    "Nazarova Sevara", "Usmonov Farrux", "Umarova Nigina", "G'aniyev Bekzod", "Rahmatova Zebo",
    "Sodiqov Murod", "Karimova Leyla", "Abdullayev Nodir", "Hasanova Asal", "Qosimov Zafar",
    "Mirzayeva Shirin", "Tolipov Sardor", "Xoliqova Shahnoza", "Bozorov Otabek", "Fayziyeva Kamila",
    "Ergashev Javohir", "Nurmatova Iroda", "Turg'unov Diyor", "Yoldosheva Komila", "Mamatov Bobur",
    "Erkinov Doston", "Raupova Shahrizoda", "Yuldashev Akmal", "Isroilova Nargiza", "Jalilov Rustam"
];
const TESTS = ["Anksiyete testi", "O'ziga ishonch testi", "Emotsional holat", "Ijtimoiy munosabatlar", "O'quv motivatsiyalari", "Xulq-atvor baholash", "Ranglar Dunyosi"];
const STATUSES = [
    { class: "badge-success", text: {uz:"Barqaror", ru:"Стабильный", en:"Stable"} },
    { class: "badge-success", text: {uz:"A'lo", ru:"Отлично", en:"Excellent"} },
    { class: "badge-warning", text: {uz:"E'tibor talab", ru:"Требует внимания", en:"Needs attention"} },
    { class: "badge-danger", text: {uz:"Tushkun", ru:"Подавленный", en:"Depressed"} }
];
const CLASSES = ["9-A", "9-B", "10-A", "10-B", "11-A", "11-B"];

let generatedStudents = [];

function generateStudents() {
    for(let i=0; i<35; i++) {
        let name = UZNAMES[Math.floor(Math.random() * UZNAMES.length)] + (i >= UZNAMES.length ? " " + (i+1) : "");
        if(i < UZNAMES.length) name = UZNAMES[i]; 
        
        let age = Math.floor(Math.random() * 5) + 12; // 12-16
        let studentClass = CLASSES[Math.floor(Math.random() * CLASSES.length)];
        let test = TESTS[Math.floor(Math.random() * TESTS.length)];
        
        let statusObj = STATUSES[Math.random() > 0.8 ? (Math.random() > 0.6 ? 2 : 3) : Math.floor(Math.random() * 2)];
        
        generatedStudents.push({ name, studentClass, age, lastTest: test, status: statusObj });
    }
}

function renderStudentsList(lang) {
    const tbody = document.querySelector('.students-table tbody');
    if(!tbody) return;
    tbody.innerHTML = '';
    
    generatedStudents.forEach((st, index) => {
        let tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => window.openPortrait(index);
        tr.innerHTML = `
            <td>${st.name}</td>
            <td><strong>${st.studentClass}</strong></td>
            <td>${st.age}</td>
            <td>${st.lastTest}</td>
            <td><span class="badge ${st.status.class}">${st.status.text[lang]}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

window.openPortrait = function(index) {
    const st = generatedStudents[index];
    if(!st) return;
    const lang = window.currentLang || 'uz';
    
    document.getElementById('portrait-name').innerText = st.name;
    document.getElementById('portrait-class').innerText = st.studentClass;
    document.getElementById('portrait-age').innerText = st.age;
    document.getElementById('portrait-test').innerText = st.lastTest;
    document.getElementById('portrait-status').className = `badge ${st.status.class}`;
    document.getElementById('portrait-status').innerText = st.status.text[lang];
    document.getElementById('portrait-avatar').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(st.name)}&background=93c5fd&color=fff`;
    
    // Generate Analysis
    let anText = "";
    if(st.status.class.includes('danger')) {
         anText = lang === 'uz' ? "Kuchli tushkunlik va xavotir. Darhol aralashuv va shaxsiy suhbat o'tkazilishi muhim!" : "Высокая тревожность. Требуется вмешательство!";
    } else if(st.status.class.includes('warning')) {
         anText = lang === 'uz' ? "O'zgaruvchan emotsional holat. Diqqatni jalb qiluvchi mashg'ulotlarga jalb qilish kerak." : "Нестабильное эмоциональное состояние. Нужно внимание.";
    } else {
         anText = lang === 'uz' ? "Holat barqaror. O'ziga ishonch va motivatsiya yaxshi darajada." : "Стабильное состояние. Хорошая мотивация.";
    }
    document.getElementById('portrait-analysis').innerText = anText;
    
    document.getElementById('portrait-modal').classList.add('active');
};


function renderReportsList(lang) {
    const reportsGrid = document.getElementById('reports-grid');
    if(!reportsGrid) return;
    reportsGrid.innerHTML = '';
    
    const uniqueClasses = [...new Set(generatedStudents.map(s => s.studentClass))].sort();
    
    uniqueClasses.forEach(cls => {
        let statsCount = generatedStudents.filter(s => s.studentClass === cls).length;
        let pText = lang === 'uz' ? `O'quvchilar: ${statsCount}` : lang === 'ru' ? `Ученики: ${statsCount}` : `Students: ${statsCount}`;
        let titleText = lang === 'uz' ? `${cls} Sinf Hisoboti` : lang === 'ru' ? `Отчет ${cls} Класса` : `${cls} Class Report`;
        let btnText = lang === 'uz' ? `Yuklab olish` : lang === 'ru' ? `Скачать` : `Download`;
        
        let card = document.createElement('div');
        card.className = 'report-card p-2';
        card.innerHTML = `
            <i class="fas fa-file-pdf report-icon text-red"></i>
            <h4>${titleText}</h4>
            <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom: 1rem;">${pText}</p>
            <button class="btn-primary mt-1" onclick="alert('${titleText} yuklanmoqda / generating...')"><i class="fas fa-download"></i> ${btnText}</button>
        `;
        reportsGrid.appendChild(card);
    });
}

function updateDashboardStats(lang) {
    document.getElementById('stat-students').innerText = generatedStudents.length;
    document.getElementById('stat-tests').innerText = generatedStudents.length * 4 + 12; 
    
    let badCount = generatedStudents.filter(s => s.status.class.includes('warning') || s.status.class.includes('danger')).length;
    let moodText = badCount > 10 ? (lang==='uz'?"E'tibor bering":lang==='ru'?"Обратите внимание":"Needs Attention") : (lang==='uz'?"A'lo":lang==='ru'?"Отлично":"Excellent");
    let moodEl = document.getElementById('stat-mood');
    moodEl.innerText = moodText;
    moodEl.className = 'stat-value ' + (badCount > 10 ? 'text-red' : 'text-green');
}

// Hook into the i18n logic dynamically
const originalUpdateLang = window.updateLanguage;
window.updateLanguage = function(lang) {
    if(originalUpdateLang) originalUpdateLang(lang);
    
    if(generatedStudents.length === 0) generateStudents();
    renderStudentsList(lang);
    renderReportsList(lang);
    updateDashboardStats(lang);
};

document.addEventListener('DOMContentLoaded', () => {
    if(generatedStudents.length === 0) generateStudents();
    renderStudentsList(currentLang);
    renderReportsList(currentLang);
    updateDashboardStats(currentLang);
});

// AI Analysis Generator
window.generateAIAnalysis = function() {
    let lang = window.currentLang || 'uz';
    if(!generatedStudents || generatedStudents.length === 0) return;
    
    let total = generatedStudents.length;
    let warnings = generatedStudents.filter(s => s.status.class.includes('warning') || s.status.class.includes('danger'));
    let pct = Math.round((warnings.length / total) * 100);
    
    let classMap = {};
    warnings.forEach(s => { classMap[s.studentClass] = (classMap[s.studentClass] || 0) + 1; });
    let maxKeys = Object.keys(classMap).sort((a,b) => classMap[b] - classMap[a]);
    let maxClass = maxKeys[0] || "Umumiy";

    let tTitle = lang==='uz'?"🤖 AI Tahlili Natijasi":lang==='ru'?"🤖 Результат ИИ-Анализа":"🤖 AI Analysis Result";
    let textUz = `Maktabingiz holati bo'yicha AI xulosasi:\n\nUmumiy sinovdan o'tganlar: ${total} o'quvchi.\nUlardan ${pct}% o'quvchilarda tushkunlik yoki e'tibor talab qilinadigan belgilar aniqlandi.\n\nE'TIBOR BERING: Eng ko'p xavotirlik "${maxClass}" sinfida kuzatilmoqda.\nTavsiya etiladi: O'sha sinf rahbarlari bilan psixologik suhbat o'tkazish, hamda ochiq havodagi ijtimoiy mashg'ulotlarni ko'paytirish.`;
    let textRu = `Заключение ИИ по вашей школе:\n\nВсего протестировано: ${total} учеников.\nУ ${pct}% выявлено депрессивное состояние или потребность во внимании.\n\nОБРАТИТЕ ВНИМАНИЕ: Основная тревожность наблюдается в "${maxClass}" классе.\nРекомендация: Провести психологическую беседу и увеличить коллективные занятия.`;
    let textEn = `AI conclusion for your school:\n\nTotal students tested: ${total}.\n${pct}% of students show signs of depression or require attention.\n\nATTENTION: Highest anxiety level detected in class "${maxClass}".\nRecommendation: Conduct psychological counseling sessions and increase interactive outdoor activities.`;

    let finalT = lang === 'uz' ? textUz : lang === 'ru' ? textRu : textEn;
    
    let modal = document.getElementById('ai-modal');
    if(!modal) {
        modal = document.createElement('div');
        modal.id = 'ai-modal';
        modal.className = 'modal-overlay active';
        document.body.appendChild(modal);
    } else {
        modal.classList.add('active');
    }
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px; animation: fadeInUp 0.4s ease;">
            <button class="close-modal" onclick="document.getElementById('ai-modal').classList.remove('active')">&times;</button>
            <h2 style="color: var(--primary-color); margin-bottom: 1.5rem;">${tTitle}</h2>
            <div style="font-size: 1.1rem; line-height: 1.6; color: var(--text-color); white-space: pre-wrap; margin-bottom: 2rem;">
                ${finalT}
            </div>
            <button class="btn-primary w-100" onclick="document.getElementById('ai-modal').classList.remove('active')">
                ${lang==='uz'?"Tushunarli":lang==='ru'?"Понятно":"Understood"}
            </button>
        </div>
    `;
};
