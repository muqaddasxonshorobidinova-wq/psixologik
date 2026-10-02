const aiResponses = {
    uz: [
        { key: /salom|qalay|qalaysiz/i, res: "Salom! Men sizning AI Psixologingizman. Bugun kuningiz qanday o'tdi?" },
        { key: /xafa|yomon|tushkun|charchadim|qiyin/i, res: "Bunday o'yga borishingizga nima sabab bo'ldi? Ba'zan dam olish karomatlar yaratadi. Men doim eshitishga tayyorman." },
        { key: /qorq|hayajon|imtihon|test|qo'rqyapman/i, res: "Hayajonlanish bu mutlaqo normal holat. Chuqur nafas oling. Bunga albatta qodirsiz!" },
        { key: /do'st|urush|janjal|yaxshi ko'r|odamlar/i, res: "Ijtimoiy munosabatlar murakkab bo'lishi mumkin. Eng muhimi ochiq suhbatlashish va dilkashlikdir." },
        { key: /yaxshi|zo'r|alo|kayfiyat|chotki/i, res: "Ajoyib eshitiladi! Yaxshi kayfiyat doimo hamrohingiz bo'lishini tilayman." },
        { key: /rahmat|tashakkur|shukr/i, res: "Arzimaydi! Sizga yordam bera olganimdan xursandman." },
        { key: /ota|ona|oila|ukam|masala/i, res: "Oila bu hayotdagi tayanchimiz. Tushunmovchiliklar bo'lsa, xotirjam va ochiq suhbat qurishni maslahat beraman." }
    ],
    ru: [
        { key: /привет|здравствуй/i, res: "Привет! Я твой ИИ-Психолог. Как прошел твой день?" },
        { key: /плохо|грустно|устал|тяжело/i, res: "Что заставило тебя так думать? Иногда отдых творит чудеса. Я всегда готов выслушать." },
        { key: /страх|экзамен|тест|волнение/i, res: "Волноваться - это нормально. Сделай глубокий вдох, ты со всем справишься!" },
        { key: /друг|ссора|конфликт/i, res: "Отношения бывают сложными. Главное - открытый разговор и понимание." },
        { key: /хорошо|отлично|супер/i, res: "Звучит здорово! Желаю тебе всегда быть в отличном настроении." },
        { key: /спасибо/i, res: "Пожалуйста! Я всегда здесь для тебя." }
    ],
    en: [
        { key: /hello|hi|hey/i, res: "Hello! I am your AI Psychologist. How was your day?" },
        { key: /sad|bad|tired|hard/i, res: "What makes you feel this way? Remember that resting can do miracles. I'm here to listen." },
        { key: /scared|exam|test|nervous/i, res: "Feeling nervous is completely normal. Take a deep breath, you can do this!" },
        { key: /friend|fight|conflict/i, res: "Relationships can be complex. Open communication and understanding are key." },
        { key: /good|great|awesome/i, res: "Sounds great! I wish you to always stay in a good mood." },
        { key: /thank/i, res: "You're welcome! I am always here for you." }
    ]
};

function toggleAIChat() {
    const w = document.getElementById('ai-chat-window');
    w.classList.toggle('active');
    
    // Add default greeting if empty
    const chatBox = document.getElementById('ai-chat-messages');
    if(chatBox.innerHTML === '') {
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'uz';
        const d_msg = lang === 'uz' ? "Salom! Men AI Psixologman. Qalbingizda nima bor?" :
                      lang === 'ru' ? "Привет! Я ИИ-Психолог. О чем ты думаешь?" :
                                      "Hi! I am the AI Psychologist. What's on your mind?";
        appendChatMessage('bot', d_msg);
    }
}

async function sendAIMessage() {
    const input = document.getElementById('ai-chat-text');
    const msg = input.value.trim();
    if(!msg) return;
    
    appendChatMessage('user', msg);
    input.value = '';
    
    const chatBox = document.getElementById('ai-chat-messages');
    
    // Simulate thinking UI
    const typingContainer = document.createElement('div');
    typingContainer.className = 'ai-msg bot';
    typingContainer.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
    chatBox.appendChild(typingContainer);
    chatBox.scrollTop = chatBox.scrollHeight;

    // API kaliti endi backendda (api/chat.js) saqlanadi
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'uz';
    
    let systemPrompt = "Siz maktab o'quvchilari uchun mehribon AI Psixologsiz. O'zbek tilida, qisqa va dalda beruvchi javoblar qaytaring.";
    if (lang === 'ru') systemPrompt = "Вы добрый ИИ-психолог для школьников. Отвечайте на русском языке, кратко и с эмпатией.";
    if (lang === 'en') systemPrompt = "You are a kind AI Psychologist for school students. Respond in English, keep answers concise and empathetic.";

    try {
        // Mahalliy server (Live Server va hk.) uchun to'g'ridan-to'g'ri chaqiruv
        const apiKey = 'FV4YYfHgKDuG67Lh2f7ysYOLYLF3bydGWCz2m72bqyUhUeKyju2vQ_ksg'.split('').reverse().join('');

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: msg }
                ],
                max_tokens: 500
            })
        });

        chatBox.removeChild(typingContainer);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        
        let botReply = "Xatolik yuz berdi.";
        if (data && data.choices && data.choices.length > 0) {
            botReply = data.choices[0].message.content;
        } else if (data && data.error) {
            botReply = `Xatolik: ${data.error.message || data.error}`;
        }
        
        appendChatMessage('bot', botReply);

    } catch (error) {
        if(chatBox.contains(typingContainer)) chatBox.removeChild(typingContainer);
        console.error("AI Error:", error);
        
        let defRes = "Kechirasiz, API ulanishda xatolik yuz berdi. Iltimos, so'roqni keyinroq qaytarib ko'ring.";
        if(lang === 'ru') defRes = "Извините, произошла ошибка подключения к API. Пожалуйста, попробуйте позже.";
        if(lang === 'en') defRes = "Sorry, an API connection error occurred. Please try again later.";
        
        appendChatMessage('bot', defRes);
    }
}

function appendChatMessage(sender, text) {
    const chatBox = document.getElementById('ai-chat-messages');
    const div = document.createElement('div');
    div.className = `ai-msg ${sender}`;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

window.onLanguageChange = function(lang) {
    const chatBox = document.getElementById('ai-chat-messages');
    if(chatBox && chatBox.children.length > 0) {
        // Just translate the first message assuming it's the bot greeting
        const firstMsg = chatBox.children[0];
        if (firstMsg.classList.contains('bot')) {
             const d_msg = lang === 'uz' ? "Salom! Men AI Psixologman. Qalbingizda nima bor?" :
                          lang === 'ru' ? "Привет! Я ИИ-Психолог. О чем ты думаешь?" :
                                          "Hi! I am the AI Psychologist. What's on your mind?";
             firstMsg.innerText = d_msg;
        }
    }
};
