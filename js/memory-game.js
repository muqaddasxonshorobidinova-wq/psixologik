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

function initMemoryGame() {
    const grid = document.getElementById('memory-grid');
    if(!grid) return;
    grid.innerHTML = '';
    
    // Duplicate icons to form pairs, then shuffle
    memoryCardsArray = [...memoryIcons, ...memoryIcons];
    memoryCardsArray.sort(() => 0.5 - Math.random());
    
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null; secondCard = null;
    movesCount = 0;
    matchedPairsCount = 0;
    matchTimer = 0;
    
    document.getElementById('memory-moves').innerText = movesCount;
    document.getElementById('memory-time').innerText = "00:00";
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
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    movesCount++;
    document.getElementById('memory-moves').innerText = movesCount;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
    if(isMatch) {
        disableCards();
        matchedPairsCount++;
        if(matchedPairsCount === memoryIcons.length) {
            clearInterval(timerIntervalId);
            setTimeout(showMemoryWin, 500);
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function showMemoryWin() {
    let lang = currentLang;
    let t = movesCount < 15 ? (lang==='uz'?"Ajoyib xotira!":lang==='ru'?"Отличная память!":"Great memory!") :
             (lang==='uz'?"Yaxshi o'ynadingiz!":lang==='ru'?"Хорошая игра!":"Good game!");
    
    document.getElementById('memory-grid').innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
            <i class="fas fa-trophy" style="font-size: 4rem; color: var(--accent); margin-bottom: 1rem;"></i>
            <h3 style="color: var(--heading-color); font-size: 2rem;">${t}</h3>
            <p style="color: var(--text-muted); font-size: 1.2rem; margin-top: 1rem; line-height: 1.5;">
                ${lang==='uz'?"Sarflangan harakatlar":lang==='ru'?"Потраченные ходы":"Total Moves"}: <strong class="text-green">${movesCount}</strong> <br>
                ${lang==='uz'?"Sarflangan vaqt":lang==='ru'?"Потраченное время":"Total Time"}: <strong class="text-green">${document.getElementById('memory-time').innerText}</strong>
            </p>
            <button class="btn-primary mt-2" onclick="initMemoryGame()">
                <i class="fas fa-redo"></i> ${lang==='uz'?"Qaytadan o'ynash":lang==='ru'?"Повторить":"Play Again"}
            </button>
        </div>
    `;
}

window.initMemoryGame = initMemoryGame;
window.stopMemoryGame = function() {
    if(typeof timerIntervalId !== 'undefined') clearInterval(timerIntervalId);
};
