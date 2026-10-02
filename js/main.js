document.addEventListener('DOMContentLoaded', () => {
    // ---- 1. Navigation & Routing ----
    const navItems = document.querySelectorAll('#sidebar-nav li');
    const sections = document.querySelectorAll('.dashboard-section');
    const sectionTitle = document.getElementById('current-section-title');

    window.navigateTo = function(targetId) {
        // Toggle Sections
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(targetId).classList.add('active');

        // Toggle Nav Highlights
        navItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
                // Update header title
                const titleSpan = item.querySelector('span[data-i18n]');
                if(titleSpan) sectionTitle.innerText = titleSpan.innerText;
            }
        });

        // Initialize chart if mood section opened
        if(targetId === 'sec-mood' && !window.moodChartInstance) {
            initMoodChart();
        }
        
        if(targetId === 'sec-play' && typeof window.initMemoryGame === 'function') {
            window.initMemoryGame();
        } else if(typeof window.stopMemoryGame === 'function') {
            window.stopMemoryGame();
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            navigateTo(target);
        });
    });

    // ---- 2. Settings (Theme & Lang) ----
    window.toggleLangMenu = function() {
        const dd = document.getElementById('lang-dropdown');
        if(dd) dd.classList.toggle('active');
    };
    
    window.selectLang = function(lang, event) {
        if(event) event.stopPropagation();
        updateLanguage(lang);
        const dd = document.getElementById('lang-dropdown');
        if(dd) dd.classList.remove('active');
    };
    
    window.toggleTheme = function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const themeIcon = document.getElementById('floating-theme-icon');
        if(currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            if(themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            if(themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    };

    updateLanguage('uz'); // default

    // ---- 3. Modal / Auth ----
    const authForm = document.getElementById('auth-form');
    const userProfile = document.getElementById('user-profile');
    const headerUserName = document.getElementById('header-user-name');
    const authSection = document.getElementById('auth-section');
    const dashboardContainer = document.getElementById('dashboard-container');

    let currentUser = null;

    window.logOut = function() {
        currentUser = null;
        if(dashboardContainer) dashboardContainer.style.display = 'none';
        if(authSection) authSection.style.display = 'flex';
        
        const usernameInput = document.getElementById('username');
        const passInput = document.getElementById('password');
        if(usernameInput) usernameInput.value = '';
        if(passInput) passInput.value = '';
    }

    if(authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('username');
            const passInput = document.getElementById('password');
            const username = usernameInput ? usernameInput.value.trim() : '';
            const pass = passInput ? passInput.value.trim() : '';
            
            // Mock authentication dict
            const mockUsers = {
                'psixolog': { pass: '12345', role: 'admin', name: "Psixolog (Admin)" },
                'oqituvchi_1': { pass: '12345', role: 'teacher', name: "Alimova F. (O'qituvchi)" },
                'oquvchi_1': { pass: '12345', role: 'student', name: "Azizov Alisher (O'quvchi)" }
            };

            const user = mockUsers[username];
            if(user && user.pass === pass) {
                currentUser = { role: user.role, name: user.name };
                
                if(authSection) authSection.style.display = 'none';
                if(dashboardContainer) dashboardContainer.style.display = 'flex';
                
                if(userProfile) userProfile.style.display = 'flex';
                if(headerUserName) headerUserName.innerText = user.name;

                applyRoleAccess(user.role);
            } else {
                alert(currentLang==='uz' ? "Login yoki parol xato!" : currentLang==='ru' ? "Неверный логин или пароль!" : "Invalid username or password!");
            }
        });
    }

    function applyRoleAccess(role) {
        const studentNavs = ['sec-home', 'sec-tests', 'sec-play', 'sec-mood', 'sec-settings'];
        const teacherNavs = ['sec-home', 'sec-students', 'sec-reports', 'sec-settings'];
        const adminNavs = ['sec-home', 'sec-students', 'sec-tests', 'sec-play', 'sec-mood', 'sec-reports', 'sec-settings'];

        // Toggle Sidebar Navs
        navItems.forEach(item => {
            const target = item.getAttribute('data-target');
            let hasAccess = false;
            if (role === 'student' && studentNavs.includes(target)) hasAccess = true;
            if (role === 'teacher' && teacherNavs.includes(target)) hasAccess = true;
            if (role === 'admin' && adminNavs.includes(target)) hasAccess = true;
            
            item.style.display = hasAccess ? 'flex' : 'none';
        });

        // Redirect if current section is hidden
        const allowedNavs = role === 'student' ? studentNavs : role === 'teacher' ? teacherNavs : adminNavs;
        const activeSec = document.querySelector('.dashboard-section.active');
        if(activeSec && !allowedNavs.includes(activeSec.id)) {
            navigateTo('sec-home');
        }

        // specific UI enhancements
        const heroTitle = document.querySelector('#sec-home h1');
        const heroSubtitle = document.querySelector('#sec-home p');
        const heroBtn = document.getElementById('hero-start-btn');
        const aiChatBtn = document.querySelector('.ai-chat-btn');
        const statsGrid = document.querySelector('.stats-grid');
        const sosBtn = document.getElementById('sos-btn');
        const adminHeatmap = document.getElementById('admin-heatmap-container');
        
        if(role === 'admin') {
            if(heroTitle) heroTitle.innerText = currentLang==='uz' ? "Psixolog Dashboard" : currentLang==='ru' ? "Психолог Dashboard" : "Psychologist Dashboard";
            if(heroSubtitle) heroSubtitle.innerText = currentLang==='uz' ? "O'quvchilar holatini monitoring qiling va hisobotlarni ko'ring." : currentLang==='ru' ? "Мониторинг состояния учащихся." : "Monitor student wellbeing states.";
            if(heroBtn) heroBtn.style.display = 'none';
            if(aiChatBtn) aiChatBtn.style.display = 'none';
            if(statsGrid) statsGrid.style.display = 'grid';
            if(sosBtn) sosBtn.style.display = 'none';
            if(adminHeatmap) {
                adminHeatmap.style.display = 'block';
                if(typeof window.initAdminHeatmap === 'function') window.initAdminHeatmap();
            }
        } else if (role === 'teacher') {
            if(heroTitle) heroTitle.innerText = currentLang==='uz' ? "O'qituvchi Kabineti" : currentLang==='ru' ? "Кабинет Учителя" : "Teacher Dashboard";
            if(heroSubtitle) heroSubtitle.innerText = currentLang==='uz' ? "Sinfingizdagi o'quvchilar holatini nazorat qiling." : currentLang==='ru' ? "Контролируйте учащихся вашего класса." : "Monitor your classroom students.";
            if(heroBtn) heroBtn.style.display = 'none';
            if(aiChatBtn) aiChatBtn.style.display = 'none';
            if(statsGrid) statsGrid.style.display = 'grid';
            if(sosBtn) sosBtn.style.display = 'none';
            if(adminHeatmap) adminHeatmap.style.display = 'none';
        } else {
            // student
            if(heroTitle) heroTitle.innerText = currentLang==='uz' ? "Psixologik Holatingizni Bilib Oling" : currentLang==='ru' ? "Психология Школьников" : "Discover Your Psychological State";
            if(heroSubtitle) heroSubtitle.innerText = currentLang==='uz' ? "Zamonaviy, qiziqarli testlar va o'yinlar orqali o'zingizni yaxshiroq anglang." : currentLang==='ru' ? "Современные тесты и игры для вас." : "Understand yourself better through games.";
            if(heroBtn) heroBtn.style.display = 'inline-block';
            if(aiChatBtn) aiChatBtn.style.display = 'flex';
            if(statsGrid) statsGrid.style.display = 'none';
            if(sosBtn) sosBtn.style.display = 'flex';
            if(adminHeatmap) adminHeatmap.style.display = 'none';
        }
    }

    // ---- 4. SOS and Alert Logic ----
    window.openSOSModal = function() {
        document.getElementById('sos-modal').classList.add('active');
    }
    window.closeSOSModal = function() {
        document.getElementById('sos-modal').classList.remove('active');
    }
    window.sendSOSAlert = function() {
        alert("Sizning joylashuvingiz va xabaringiz mas'ul psixologga yuborildi. Iltimos, xotirjamlikni saqlang.");
        closeSOSModal();
        
        // Broadcast SOS notification if logged in as admin/teacher
        const now = new Date().toLocaleTimeString();
        let sosBanner = document.getElementById('admin-sos-banner');
        if(!sosBanner) {
            sosBanner = document.createElement('div');
            sosBanner.id = 'admin-sos-banner';
            sosBanner.className = 'glass-panel p-2 mb-2';
            sosBanner.style.background = 'rgba(239, 68, 68, 0.2)';
            sosBanner.style.border = '1px solid #ef4444';
            sosBanner.style.color = '#ef4444';
            sosBanner.style.borderRadius = '12px';
            sosBanner.style.display = 'flex';
            sosBanner.style.justifyContent = 'space-between';
            sosBanner.style.alignItems = 'center';
            const homeSec = document.getElementById('sec-home');
            if(homeSec) homeSec.prepend(sosBanner);
        }
        sosBanner.innerHTML = `
            <div><i class="fas fa-exclamation-triangle" style="font-size: 1.2rem; margin-right: 0.5rem;"></i> <strong>DIQQAT (SOS ALERT):</strong> Anonim o'quvchidan zudlik bilan ruhiy yordam so'raldi (${now})</div>
            <button class="btn-primary" style="background:#ef4444; color:white; padding: 0.3rem 0.8rem;" onclick="this.parentElement.remove()">Qabul qilindi</button>
        `;
    }
    window.triggerAlert = function() {
        alert("Xavfli holat qayd etildi! Ota-onaga yoki sinf rahbariga xabar jo'natilmoqda...");
    }

    // ---- 5. Print & Export Reports ----
    window.printReportSummary = function() {
        window.print();
    }
});

// ---- Chart.js for Mood Tracker ----
function initMoodChart() {
    const ctx = document.getElementById('moodChart').getContext('2d');
    
    // Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(147, 197, 253, 0.5)'); // primary-color
    gradient.addColorStop(1, 'rgba(147, 197, 253, 0.0)');
    
    window.moodChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'],
            datasets: [{
                label: 'Kayfiyat Darajasi',
                data: [65, 78, 90, 81, 86, 95, 99],
                borderColor: '#60a5fa',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#93c5fd',
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: 'rgba(147, 197, 253, 0.1)' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
}

// ---- Admin Heatmap Chart ----
window.initAdminHeatmap = function() {
    if(window.heatmapInstance) return;
    const ctx = document.getElementById('adminHeatmapChart');
    if(!ctx) return;
    
    // In a real scenario, this aggregates data from students.js
    // We will put dummy mocked data representing average anxiety per class.
    window.heatmapInstance = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ["9-A", "9-B", "10-A", "10-B", "11-A", "11-B"],
            datasets: [{
                label: "Xavotirlik Darajasi (%)",
                data: [25, 40, 15, 60, 30, 80], // higher = more red
                backgroundColor: [
                    '#bfdbfe', '#93c5fd', '#bfdbfe', '#fca5a5', '#bfdbfe', '#ef4444'
                ],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
};

// ---- Games Logic Overrides ----
function showGames() {
    document.getElementById('play-area').style.display = 'none';
    document.getElementById('games-container').style.display = 'block';
    document.getElementById('game-content').innerHTML = '';
}

window.startGame = function(gameType) {
    document.getElementById('games-container').style.display = 'none';
    document.getElementById('play-area').style.display = 'block';
    
    if(typeof window.initGame === 'function') {
        window.initGame(gameType, currentLang);
    }
}
