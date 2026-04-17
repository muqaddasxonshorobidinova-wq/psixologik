const memoryIcons = [
    'fa-smile-beam', 'fa-sad-cry', 'fa-angry', 'fa-surprise', 
    'fa-laugh-wink', 'fa-grin-stars', 'fa-flushed', 'fa-tired'
];

let memoryCardsArray = [];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let movesCount = 0;
let matchedPairsCount = 0;
let matchTimer = 0;
let timerIntervalId = null;
let activeContainer = null;

window.startPlay = function(type) {
    document.getElementById('play-hub-grid').style.display = 'none';
    document.getElementById('play-active-container').style.display = 'block';
    activeContainer = document.getElementById('play-content');
    activeContainer.innerHTML = '';
    
    if(type === 'memory') initMemoryGame();
    else if(type === 'color') initColorGame();
    else if(type === 'breathe') initBreatheGame();
    else if(type === 'draw') initDrawGame();
};

window.closePlay = function() {
    document.getElementById('play-active-container').style.display = 'none';
    document.getElementById('play-hub-grid').style.display = 'grid';
    document.getElementById('play-content').innerHTML = '';
    clearInterval(timerIntervalId);
    if(window.breatheInterval) clearInterval(window.breatheInterval);
    if(window.breatheTimeout) clearTimeout(window.breatheTimeout);
};

/* =========================================
   1. MEMORY GAME
   ========================================= */
function initMemoryGame() {
    activeContainer.innerHTML = `
        <div class="glass-panel p-2 mx-auto text-center" style="max-width: 600px; margin: 0 auto; background: var(--surface-color);">
            <div class="flex-between mb-2">
                <div style="font-size: 1.2rem; font-weight:bold"><span data-i18n="moves">${currentLang==='uz'?"Harakatlar":currentLang==='ru'?"Ходы":"Moves"}</span>: <span id="memory-moves" class="text-green">0</span></div>
                <div style="font-size: 1.2rem; font-weight:bold"><span data-i18n="time">${currentLang==='uz'?"Vaqt":currentLang==='ru'?"Время":"Time"}</span>: <span id="memory-time">00:00</span></div>
            </div>
            <div class="memory-grid" id="memory-grid-inner"></div>
        </div>
    `;
    const grid = document.getElementById('memory-grid-inner');
    
    memoryCardsArray = [...memoryIcons, ...memoryIcons];
    memoryCardsArray.sort(() => 0.5 - Math.random());
    
    hasFlippedCard = false; lockBoard = false;
    firstCard = null; secondCard = null;
    movesCount = 0; matchedPairsCount = 0; matchTimer = 0;
    
    clearInterval(timerIntervalId);
    timerIntervalId = setInterval(() => {
        matchTimer++;
        let m = Math.floor(matchTimer/60).toString().padStart(2,'0');
        let s = (matchTimer%60).toString().padStart(2,'0');
        document.getElementById('memory-time').innerText = `${m}:${s}`;
    }, 1000);

    memoryCardsArray.forEach(icon => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.icon = icon;
        
        card.innerHTML = `
            <div class="memory-front">
                <i class="fas fa-brain" style="font-size: 1.5rem; color: rgba(255,255,255,0.4)"></i>
            </div>
            <div class="memory-back"><i class="fas ${icon}"></i></div>
        `;
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true; firstCard = this; return;
    }
    
    secondCard = this; movesCount++;
    document.getElementById('memory-moves').innerText = movesCount;
    
    let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
    if(isMatch) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
        matchedPairsCount++;
        if(matchedPairsCount === memoryIcons.length) {
            clearInterval(timerIntervalId);
            setTimeout(showMemoryWin, 500);
        }
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }, 1000);
    }
}

function showMemoryWin() {
    let t = movesCount < 15 ? (currentLang==='uz'?"Ajoyib xotira!":currentLang==='ru'?"Отличная память!":"Great memory!") :
             (currentLang==='uz'?"Yaxshi o'ynadingiz!":currentLang==='ru'?"Хорошая игра!":"Good game!");
    document.getElementById('memory-grid-inner').innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
            <i class="fas fa-trophy" style="font-size: 4rem; color: var(--accent); margin-bottom: 1rem;"></i>
            <h3 style="color: var(--heading-color); font-size: 2rem;">${t}</h3>
            <p style="color: var(--text-muted); font-size: 1.2rem; margin-top: 1rem; line-height: 1.5;">
                ${currentLang==='uz'?"Harakatlar":currentLang==='ru'?"Ходы":"Moves"}: <strong class="text-green">${movesCount}</strong> <br>
                ${currentLang==='uz'?"Vaqt":currentLang==='ru'?"Время":"Time"}: <strong class="text-green">${document.getElementById('memory-time').innerText}</strong>
            </p>
            <button class="btn-primary mt-2" onclick="initMemoryGame()">
                <i class="fas fa-redo"></i> ${currentLang==='uz'?"Qaytadan":currentLang==='ru'?"Повторить":"Play Again"}
            </button>
        </div>
    `;
}

/* =========================================
   2. COLOR PSYCHOLOGY GAME
   ========================================= */
const colors = [
    { code: '#ef4444', name:{uz:"Qizil", ru:"Красный", en:"Red"}, res:{uz:"Siz energiya va ishtiyoqqa to'lasiz. Hozir faol harakat qilish vaqti!", ru:"Вы полны энергии. Время действовать!", en:"You are full of energy and passion."} },
    { code: '#3b82f6', name:{uz:"Ko'k", ru:"Синий", en:"Blue"}, res:{uz:"Siz osoyishtalik va xotirjamlik holatidasiz. Fikrlaringiz tiniq.", ru:"Вы находитесь в состоянии спокойствия. Мысли ясны.", en:"You are calm and peaceful. Your mind is clear."} },
    { code: '#10b981', name:{uz:"Yashil", ru:"Зеленый", en:"Green"}, res:{uz:"Ruhiy muvozanat va o'sish istagi. O'ziga ishonch holati.", ru:"Душевное равновесие и желание роста.", en:"Mental balance and a desire for growth."} },
    { code: '#f59e0b', name:{uz:"Sariq", ru:"Желтый", en:"Yellow"}, res:{uz:"Optimizm va quvonch qaynamoqda. Yaxshi kayfiyat doimo hamroh!", ru:"Оптимизм и радость бьют ключом.", en:"Optimism and joy. Good mood surrounds you."} },
    { code: '#8b5cf6', name:{uz:"Binafsha", ru:"Фиолетовый", en:"Purple"}, res:{uz:"Sizda ijodiy va intuitiv quvvat kuchli. Yangiliklarga ochiqsiz.", ru:"У вас сильная творческая и интуитивная энергия.", en:"Creative and intuitive power. Open to new ideas."} },
    { code: '#6b7280', name:{uz:"Sariq (Kulrang)", ru:"Серый", en:"Gray"}, res:{uz:"Siz biroz yakkalanib, o'z dunyongizga chekinishni istayapsiz. Dam oling.", ru:"Вам хочется уединиться в свой мир. Отдохните.", en:"Wanting to isolate into your own world. Take a rest."} }
];

function initColorGame() {
    activeContainer.innerHTML = `
        <div class="glass-panel p-2 mx-auto text-center" style="max-width: 600px; background: var(--surface-color);">
            <h3 style="color: var(--heading-color); font-size: 1.8rem; margin-bottom: 1rem;">${currentLang==='uz'?"Hozir qaysi rang sizga yoqyapti?":currentLang==='ru'?"Какой цвет вам нравится сейчас?":"Which color do you like right now?"}</h3>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; margin-top: 2rem;" id="color-palette"></div>
        </div>
    `;
    const palette = document.getElementById('color-palette');
    colors.forEach(c => {
        const circle = document.createElement('div');
        circle.style.width = '80px';
        circle.style.height = '80px';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = c.code;
        circle.style.cursor = 'pointer';
        circle.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
        circle.style.transition = 'transform 0.3s';
        circle.onmouseover = () => circle.style.transform = 'scale(1.15)';
        circle.onmouseout = () => circle.style.transform = 'scale(1)';
        
        circle.onclick = () => {
            activeContainer.innerHTML = `
                <div class="glass-panel p-2 mx-auto text-center" style="max-width: 600px; background: var(--surface-color); animation: fadeIn 0.5s;">
                    <div style="width: 100px; height: 100px; border-radius: 50%; background-color: ${c.code}; margin: 0 auto 1.5rem; box-shadow: 0 10px 25px ${c.code}99;"></div>
                    <h3 style="color: var(--heading-color); font-size: 2rem; margin-bottom: 1rem;">${c.name[currentLang]}</h3>
                    <p style="color: var(--text-color); font-size: 1.2rem; line-height: 1.6; margin-bottom: 2rem;">${c.res[currentLang]}</p>
                    <button class="btn-primary" onclick="initColorGame()"><i class="fas fa-redo"></i> ${currentLang==='uz'?"Boshqa rang tanlash":currentLang==='ru'?"Выбрать другой":"Choose another"}</button>
                </div>
            `;
        };
        palette.appendChild(circle);
    });
}

/* =========================================
   3. BREATHE EXERCISE
   ========================================= */
function initBreatheGame() {
    activeContainer.innerHTML = `
        <div class="glass-panel p-2 mx-auto text-center breathe-container" style="max-width: 600px; background: var(--surface-color); position: relative;">
            <div class="breathe-circle" id="breathe-circle"></div>
            <h2 id="breathe-text" style="color: var(--heading-color); font-size: 2.5rem; position: relative; z-index: 10;">${currentLang==='uz'?"Tayyorgarlik...":currentLang==='ru'?"Подготовка...":"Get ready..."}</h2>
        </div>
    `;
    
    const circle = document.getElementById('breathe-circle');
    const text = document.getElementById('breathe-text');
    
    let l_in = currentLang==='uz'?"Nafas oling (4s)":currentLang==='ru'?"Вдох (4с)":"Breathe in (4s)";
    let l_hold = currentLang==='uz'?"Ushlab turing (7s)":currentLang==='ru'?"Задержка дыхания (7с)":"Hold (7s)";
    let l_out = currentLang==='uz'?"Chiqaring (8s)":currentLang==='ru'?"Выдох (8с)":"Breathe out (8s)";

    function runCycle() {
        // Breathe IN (4s)
        text.innerText = l_in;
        circle.style.transition = 'transform 4s cubic-bezier(0.4, 0, 0.2, 1)';
        circle.style.transform = 'scale(1.5)';
        circle.style.background = 'rgba(16, 185, 129, 0.4)';
        
        window.breatheTimeout = setTimeout(() => {
            // Hold (7s)
            text.innerText = l_hold;
            circle.style.transition = 'background 7s linear';
            circle.style.background = 'rgba(245, 158, 11, 0.4)';
            
            window.breatheTimeout = setTimeout(() => {
                // Breathe OUT (8s)
                text.innerText = l_out;
                circle.style.transition = 'transform 8s cubic-bezier(0.4, 0, 0.2, 1), background 8s linear';
                circle.style.transform = 'scale(1)';
                circle.style.background = 'rgba(59, 130, 246, 0.4)';
                
            }, 7000);
        }, 4000);
    }
    
    setTimeout(() => {
        runCycle();
        window.breatheInterval = setInterval(runCycle, 19000); // 4+7+8 = 19s
    }, 2000);
}

/* =========================================
   4. DRAW FEAR (ART THERAPY)
   ========================================= */
function initDrawGame() {
    activeContainer.innerHTML = `
        <div class="glass-panel p-2 mx-auto" style="max-width: 600px; background: var(--surface-color);">
            <h3 style="color: var(--heading-color); font-size: 1.5rem; text-align: center; margin-bottom: 1rem;">${currentLang==='uz'?"Qo'rquvni Chizish":currentLang==='ru'?"Нарисуй страх":"Draw your fear"}</h3>
            <canvas id="drawing-canvas" width="500" height="350" style="width: 100%; height: 350px; touch-action: none; background: #fff; border: 2px dashed rgb(163, 177, 198); border-radius: 12px;"></canvas>
            <div class="colors-palette">
                <div class="color-swatch active" style="background:#000" data-color="#000"></div>
                <div class="color-swatch" style="background:#ef4444" data-color="#ef4444"></div>
                <div class="color-swatch" style="background:#3b82f6" data-color="#3b82f6"></div>
                <div class="color-swatch" style="background:#10b981" data-color="#10b981"></div>
                <div class="color-swatch" style="background:#f59e0b" data-color="#f59e0b"></div>
                <div class="color-swatch" style="background:#8b5cf6" data-color="#8b5cf6"></div>
                <div class="color-swatch" style="background:#ffffff; border: 1px solid #ccc;" data-color="#ffffff" title="Eraser"></div>
            </div>
            <div style="text-align: center; margin-top: 1.5rem;">
                <button class="btn-primary" onclick="clearCanvas()"><i class="fas fa-trash"></i> Tozalash</button>
            </div>
        </div>
    `;

    setTimeout(() => {
        const canvas = document.getElementById('drawing-canvas');
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        
        // Handle precise scaling for CSS width
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        
        let isDrawing = false;
        let lastX = 0; let lastY = 0;
        let currentColor = '#000';

        const swatches = document.querySelectorAll('.color-swatch');
        swatches.forEach(sw => {
            sw.addEventListener('click', (e) => {
                swatches.forEach(s => s.classList.remove('active'));
                sw.classList.add('active');
                currentColor = sw.getAttribute('data-color');
            });
        });

        function draw(e) {
            if(!isDrawing) return;
            e.preventDefault();
            const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
            
            const r = canvas.getBoundingClientRect();
            const currentX = clientX - r.left;
            const currentY = clientY - r.top;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currentX, currentY);
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = currentColor === '#ffffff' ? 15 : 4; // Eraser is wider
            ctx.lineCap = 'round';
            ctx.stroke();

            lastX = currentX; lastY = currentY;
        }

        function start(e) {
            isDrawing = true;
            const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
            const r = canvas.getBoundingClientRect();
            lastX = clientX - r.left;
            lastY = clientY - r.top;
            draw(e);
        }

        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);
        
        canvas.addEventListener('touchstart', start);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', () => isDrawing = false);

        window.clearCanvas = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, 100);
}
