const gamesData = {
    color: { colors: [ { code:'#ef4444', desc:{uz:"Faol",ru:"Активный",en:"Active"} }, { code:'#3b82f6', desc:{uz:"Xotirjam",ru:"Спокойный",en:"Calm"} } ] },
    emotion: {
        faces: [
            { icon: 'fa-smile', desc: { uz: "Juda yaxshi!", ru: "Очень хорошо!", en: "Very good!" } },
            { icon: 'fa-meh', desc: { uz: "Oddiy, o'rtacha", ru: "Обычно, средне", en: "Normal, average" } },
            { icon: 'fa-frown', desc: { uz: "Xafa, tushkun", ru: "Грустно, подавленно", en: "Sad, depressed" } },
            { icon: 'fa-angry', desc: { uz: "Jahldor, asabiy", ru: "Злой, нервный", en: "Angry, nervous" } },
            { icon: 'fa-surprise', desc: { uz: "Hayron, qiziq", ru: "Удивлен, интересно", en: "Surprised, curious" } }
        ]
    },
    scenario: {
        questions: [
            {
                q: { uz: "Do'stingiz yordam so'radi, lekin ishingiz bor. Nima qilasiz?", ru: "Друг просит помощи, но вы заняты. Что сделаете?", en: "A friend asks for help, but you are busy. What do you do?" },
                options: [
                    { t: { uz: "Darhol yordam beraman", ru: "Сразу помогу", en: "Help immediately" }, res: { uz:"O'zgalarni ustun qo'yasiz", ru:"Вы помогаете другим всегда", en:"You put others first" } },
                    { t: { uz: "Vaziyatni tushuntirib keyinroq", ru: "Объясню и помогу позже", en: "Explain and help later" }, res: { uz:"Ajoyib muvozanat!", ru:"Отличный баланс!", en:"Great balance!" } },
                    { t: { uz: "Rad etaman", ru: "Откажусь", en: "Refuse" }, res: { uz:"Siz maqsad sari intiluvchansiz", ru:"Вы целеустремленны", en:"You are focused on yourself" } }
                ]
            }
        ]
    },
    quizzes: {
        anxiety: {
            title: { uz: "Anksiyete (Xavotir) testi", ru: "Тест на тревожность", en: "Anxiety Test" },
            questions: [
                { q: { uz: "1. Qanchalik tez-tez sababsiz xavotir olasiz?", ru:"1. Частые ли у вас тревоги без причины?", en:"1. Do you worry often for no reason?" },
                  options: [{text:{uz:"Tez-tez",ru:"Часто",en:"Often"},score:3}, {text:{uz:"Ba'zida",ru:"Иногда",en:"Sometimes"},score:2}, {text:{uz:"Kamdan-kam",ru:"Редко",en:"Rarely"},score:1}] },
                { q: { uz: "2. Uyqudan uyg'onganda o'zingizni charchagan his qilasizmi?", ru:"2. Просыпаетесь ли вы уставшим?", en:"2. Do you wake up feeling tired?" },
                  options: [{text:{uz:"Har doim",ru:"Всегда",en:"Always"},score:3}, {text:{uz:"Ba'zida",ru:"Иногда",en:"Sometimes"},score:2}, {text:{uz:"Yo'q, tetikman",ru:"Нет, бодрым",en:"No, fresh"},score:1}] },
                { q: { uz: "3. Imtihon yoki javob berish oldidan asabiylashasizmi?", ru:"3. Нервничаете ли перед экзаменами?", en:"3. Are you nervous before exams?" },
                  options: [{text:{uz:"Juda qattiq",ru:"Очень сильно",en:"Very much"},score:3}, {text:{uz:"Odatdagidek",ru:"Как обычно",en:"Normally"},score:2}, {text:{uz:"Umuman yo'q",ru:"Совсем нет",en:"Not at all"},score:1}] },
                { q: { uz: "4. Qo'llaringiz terlashini yoki yuragingiz tez urishini sezasizmi?", ru:"4. Бывает ли учащенное сердцебиение?", en:"4. Do you experience fast heartbeat?" },
                  options: [{text:{uz:"Ha, tez-tez",ru:"Да, часто",en:"Yes, often"},score:3}, {text:{uz:"Hayajonlanganda",ru:"При волнении",en:"When excited"},score:2}, {text:{uz:"Deyarli yo'q",ru:"Почти нет",en:"Hardly ever"},score:1}] },
                { q: { uz: "5. Kelajak haqida o'ylash sizga qo'rquv beradimi?", ru:"5. Пугает ли вас будущее?", en:"5. Does the future scare you?" },
                  options: [{text:{uz:"Doim qo'rqaman",ru:"Всегда боюсь",en:"Always fear"},score:3}, {text:{uz:"Ba'zida",ru:"Иногда",en:"Sometimes"},score:2}, {text:{uz:"Yo'q, ishonchim komil",ru:"Нет, уверен",en:"No, I am confident"},score:1}] },
                { q: { uz: "6. E'tiboringizni jamlashga qiynalasizmi?", ru:"6. Трудно ли вам сосредоточиться?", en:"6. Is it hard to concentrate?" },
                  options: [{text:{uz:"Ha, juda qiyin",ru:"Да, очень трудно",en:"Yes, very hard"},score:3}, {text:{uz:"Vaziyatga qarab",ru:"По ситуации",en:"Depends"},score:2}, {text:{uz:"Yaxshi jamlayman",ru:"Хорошо сосредотачиваюсь",en:"I focus well"},score:1}] },
                { q: { uz: "7. Kichik xatolar uchun ham o'zingizni ayblaysizmi?", ru:"7. Вините себя за мелкие ошибки?", en:"7. Blame yourself for small mistakes?" },
                  options: [{text:{uz:"Har doim",ru:"Всегда",en:"Always"},score:3}, {text:{uz:"Ba'zan ayblayman",ru:"Иногда виню",en:"Sometimes blame"},score:2}, {text:{uz:"Xatolarni tabiiy qabul qilaman",ru:"Принимаю естественно",en:"Accept naturally"},score:1}] },
                { q: { uz: "8. Yomon narsa sodir bo'lishini kutib yashaysizmi?", ru:"8. Живете в ожидании плохого?", en:"8. Expect bad things to happen?" },
                  options: [{text:{uz:"Ha, tez-tez",ru:"Да, часто",en:"Yes, often"},score:3}, {text:{uz:"Kayfiyatga qarab",ru:"По настроению",en:"Depends on mood"},score:2}, {text:{uz:"Doim ijobiyman",ru:"Всегда позитивен",en:"Always positive"},score:1}] },
                { q: { uz: "9. Diqqat markazida bo'lish sizga yoqadimi?", ru:"9. Нравится ли вам быть в центре внимания?", en:"9. Do you like being center of attention?" },
                  options: [{text:{uz:"Umuman yoqmaydi, qo'rqaman",ru:"Совсем нет, боюсь",en:"Not at all, scared"},score:3}, {text:{uz:"O'rtacha",ru:"Средне",en:"Average"},score:2}, {text:{uz:"Ha, yoqadi",ru:"Да, нравится",en:"Yes, I like it"},score:1}] },
                { q: { uz: "10. Dam olish paytida ham miyangizni tinchita olmaysizmi?", ru:"10. Не можете расслабиться даже во время отдыха?", en:"10. Can't calm mind even when resting?" },
                  options: [{text:{uz:"Ha, fikrlar to'xtamaydi",ru:"Да, мысли не останавливаются",en:"Yes, thoughts don't stop"},score:3}, {text:{uz:"Ba'zida bo'ladi",ru:"Иногда бывает",en:"Sometimes"},score:2}, {text:{uz:"Oson dam olaman",ru:"Легко расслабляюсь",en:"I relax easily"},score:1}] }
            ],
            results: [
                { max: 13, title: {uz:"Xotirjam", ru:"Спокоен", en:"Calm"}, text: { uz: "Sizda xavotirlik darajasi past. Ehtiyotkor, lekin xotirjamsiz!", ru: "Низкий уровень тревожности. Вы спокойны!", en: "Low anxiety. You are calm!" }, icon: "fa-leaf" },
                { max: 21, title: {uz:"O'rtacha xavotirlik", ru:"Средняя тревожность", en:"Moderate Anxiety"}, text: { uz: "O'rtacha hayajon bor. Ko'proq dam oling.", ru: "Средняя тревожность. Отдыхайте больше.", en: "Average anxiety. Rest more." }, icon: "fa-balance-scale" },
                { max: 30, title: {uz:"Yuqori xavotirlik", ru:"Высокая тревожность", en:"High Anxiety"}, text: { uz: "Siz juda qattiq stressdasiz. Ota-onangiz yoki psixolog bilan suhbatlashish zarur.", ru: "Сильный стресс. Поговорите с психологом.", en: "High stress. Talk to a psychologist." }, icon: "fa-heartbeat" }
            ]
        },
        confidence: {
            title: { uz: "O'ziga ishonch testi", ru: "Тест на уверенность в себе", en: "Self-confidence Test" },
            questions: [
                { q: { uz: "1. Yangi tanishlar orttirish siz uchun osonmi?", ru:"1. Легко ли вам заводить новые знакомства?", en:"1. Easy to make new friends?" },
                  options: [{text:{uz:"Juda oson",ru:"Очень легко",en:"Very easy"},score:3}, {text:{uz:"Qiyinroq",ru:"Трудновато",en:"A bit hard"},score:2}, {text:{uz:"Juda qiyin",ru:"Очень трудно",en:"Very hard"},score:1}] },
                { q: { uz: "2. Xato qilganingizda qanday yo'l tutasiz?", ru:"2. Как вы реагируете на ошибки?", en:"2. How do you react to mistakes?" },
                  options: [{text:{uz:"O'rganib oldinga boraman",ru:"Учусь и иду вперед",en:"Learn and move on"},score:3}, {text:{uz:"Xafa bo'laman",ru:"Расстраиваюсь",en:"Get upset"},score:2}, {text:{uz:"O'zimni qiynayman",ru:"Мучаю себя",en:"Beat myself up"},score:1}] },
                { q: { uz: "3. Fikringiz qolganlarga yoqmasa ham, aytasizmi?", ru:"3. Высказываете ли вы мнение, если оно не нравится другим?", en:"3. Do you speak up even if others disagree?" },
                  options: [{text:{uz:"Ha, bemalol aytaman",ru:"Да, высказываю",en:"Yes, freely"},score:3}, {text:{uz:"Vaziyatga qarayman",ru:"Смотрю по ситуации",en:"Depends"},score:2}, {text:{uz:"Indamay qolaman",ru:"Молчу",en:"I stay quiet"},score:1}] },
                { q: { uz: "4. Tanqidni qanday qabul qilasiz?", ru:"4. Как вы воспринимаете критику?", en:"4. How do you handle criticism?" },
                  options: [{text:{uz:"Xotirjam va ijobiy",ru:"Спокойно и позитивно",en:"Calmly"},score:3}, {text:{uz:"Biroz ishtiyoqim tushadi",ru:"Немного теряю интерес",en:"Lose some motivation"},score:2}, {text:{uz:"Juda og'ir olaman",ru:"Очень тяжело",en:"Take it very hard"},score:1}] },
                { q: { uz: "5. Ko'zguda o'zingizga qarash yoqadimi?", ru:"5. Нравится ли вам смотреть в зеркало?", en:"5. Do you like looking in the mirror?" },
                  options: [{text:{uz:"Ha, doim!",ru:"Да, всегда!",en:"Yes, always!"},score:3}, {text:{uz:"Ba'zida",ru:"Иногда",en:"Sometimes"},score:2}, {text:{uz:"Yoqmaydi",ru:"Не нравится",en:"Don't like it"},score:1}] },
                { q: { uz: "6. Qiyin vazifa berilsa, reaksiya qanday?", ru:"6. Реакция на сложную задачу?", en:"6. Reaction to difficult tasks?" },
                  options: [{text:{uz:"Bajarishga ishonaman",ru:"Верю что выполню",en:"Confident to do it"},score:3}, {text:{uz:"Qo'limdan kemaydi deb qo'rqaman",ru:"Боюсь, что не справлюсь",en:"Fear I can't"},score:2}, {text:{uz:"Darhol rad etaman",ru:"Сразу отказываюсь",en:"Reject immediately"},score:1}] },
                { q: { uz: "7. Qaror qabul qilishda mustaqilmisiz?", ru:"7. Самостоятельны ли вы в решениях?", en:"7. Independent in decisions?" },
                  options: [{text:{uz:"Mutlaqo",ru:"Полностью",en:"Absolutely"},score:3}, {text:{uz:"Maslahatlashaman",ru:"Советуюсь",en:"Seek advice"},score:2}, {text:{uz:"Doim birov qaror qiladi",ru:"Всегда решает другой",en:"Others decide"},score:1}] },
                { q: { uz: "8. Orzularingizga erishishingizga ishonasizmi?", ru:"8. Верите в достижимость своих мечт?", en:"8. Believe to achieve dreams?" },
                  options: [{text:{uz:"100% ishonaman",ru:"Уверен на 100%",en:"100% believe"},score:3}, {text:{uz:"Umid bor",ru:"Есть надежда",en:"Have hope"},score:2}, {text:{uz:"Ishonmayman",ru:"Не верю",en:"Don't believe"},score:1}] },
                { q: { uz: "9. Davrada so'zga chiqish...", ru:"9. Выступление на публике...", en:"9. Public speaking..." },
                  options: [{text:{uz:"Zavq beradi",ru:"Доставляет удовольствие",en:"It's a joy"},score:3}, {text:{uz:"Biroz qo'rqinchli",ru:"Немного страшно",en:"Bit scary"},score:2}, {text:{uz:"Uyatdan o'laman",ru:"Умру от стыда",en:"Die of shame"},score:1}] },
                { q: { uz: "10. Yaxshi ishni bajarsangiz, buni e'tirof etasizmi?", ru:"10. Если сделали хорошо, признаете это?", en:"10. Acknowledge your good work?" },
                  options: [{text:{uz:"Ha, maqtanaman",ru:"Да, хвалюсь",en:"Yes, boast a bit"},score:3}, {text:{uz:"Oddiy qabul qilaman",ru:"Принимаю спокойно",en:"Take it normal"},score:2}, {text:{uz:"Omadim keldi deyman",ru:"Списываю на удачу",en:"Say it's luck"},score:1}] }
            ],
            results: [
                { max: 13, title: {uz:"Ishonchni oshiring", ru:"Повышайте уверенность", en:"Boost confidence"}, text: { uz: "O'zingizga ishonchingiz past. Siz ajoyibsiz, qobiliyatlaringizga ishoning!", ru: "Вам не хватает уверенности. Верьте в себя!", en: "You lack self-confidence. Believe in yourself!" }, icon: "fa-seedling" },
                { max: 21, title: {uz:"Yaxshi muvozanat", ru:"Хороший баланс", en:"Good balance"}, text: { uz: "Ishonch me'yorida. Ba'zi o'rinlarda dadilroq bo'lishni o'rganing.", ru: "Уверенность в норме. Станьте смелее.", en: "Adequate confidence. Be a bit bolder." }, icon: "fa-thumbs-up" },
                { max: 30, title: {uz:"Ajoyib natija!", ru:"Отличный результат!", en:"Great result!"}, text: { uz: "O'zingizga to'la ishongan liderlik qobiliyati sohibisiz!", ru: "Вы очень уверены в себе. Настоящий лидер!", en: "Highly confident! A true leader." }, icon: "fa-crown" }
            ]
        },
        social: {
            title: { uz: "Ijtimoiy munosabatlar", ru: "Социальные отношения", en: "Social Relations Test" },
            questions: [
                { q: { uz: "1. Jamoaviy ishlar sizga yoqadimi?", ru:"1. Нравится работать в команде?", en:"1. Like teamwork?" },
                  options: [{text:{uz:"Ha, albatta",ru:"Да, конечно",en:"Yes, definitely"},score:3}, {text:{uz:"Vaziyatga qarab",ru:"По ситуации",en:"Depends"},score:2}, {text:{uz:"Yolg'iz yaxshiroq",ru:"Лучше одному",en:"Better alone"},score:1}] },
                { q: { uz: "2. Do'stlaringiz ko'pmi?", ru:"2. Много ли у вас друзей?", en:"2. Many friends?" },
                  options: [{text:{uz:"Juda ko'p",ru:"Очень много",en:"Very many"},score:3}, {text:{uz:"1-2 ta chin do'st",ru:"1-2 близких",en:"1-2 true friends"},score:2}, {text:{uz:"Do'stlarim yo'q",ru:"Нет друзей",en:"No friends"},score:1}] },
                { q: { uz: "3. Kimgadir yengillik bilan yordam berasizmi?", ru:"3. Легко ли вы помогаете другим?", en:"3. Easily help others?" },
                  options: [{text:{uz:"Doim tayyorman",ru:"Всегда готов",en:"Always ready"},score:3}, {text:{uz:"So'rashsa",ru:"Если попросят",en:"If asked"},score:2}, {text:{uz:"Arzimasa qilmayman",ru:"Не делаю без причины",en:"Don't without reason"},score:1}] },
                { q: { uz: "4. Turli yoshdagi odamlar bilan gaplasha olasizmi?", ru:"4. Можете общаться с людьми разных возрастов?", en:"4. Talk to people of all ages?" },
                  options: [{text:{uz:"Oson kelishaman",ru:"Легко нахожу язык",en:"Easily get along"},score:3}, {text:{uz:"O'z tengqurlarim bilan oson",ru:"Легче со сверстниками",en:"Easier with peers"},score:2}, {text:{uz:"Men uchun qiyin",ru:"Для меня это трудно",en:"Hard for me"},score:1}] },
                { q: { uz: "5. Boshqalar siz bilan dardlashib turadimi?", ru:"5. Делятся ли с вами секретами?", en:"5. Share secrets with you?" },
                  options: [{text:{uz:"Doim ishonishadi",ru:"Доверяют всегда",en:"Always trust"},score:3}, {text:{uz:"Faqat yaqinlarim",ru:"Только близкие",en:"Only close ones"},score:2}, {text:{uz:"Hech kim aytmaydi",ru:"Никто не делится",en:"No one shares"},score:1}] },
                { q: { uz: "6. Jarohat yoki og'ir holatlarni qanday hal qilasiz?", ru:"6. Как решаете конфликты?", en:"6. How handle conflicts?" },
                  options: [{text:{uz:"Tinchlik yoli bilan kelishishga harakat",ru:"Стараюсь мирно",en:"Try peacefully"},score:3}, {text:{uz:"Ba'zan uzoq tortishaman",ru:"Иногда долго спорю",en:"Arguments sometimes"},score:2}, {text:{uz:"Doim urushib qolaman",ru:"Всегда ссорюсь",en:"Always fight"},score:1}] },
                { q: { uz: "7. Bayram va tadbirlarga munosabatingiz?", ru:"7. Отношение к мероприятиям?", en:"7. Attitude to events?" },
                  options: [{text:{uz:"Faol qatnashaman",ru:"Активно участвую",en:"Active participant"},score:3}, {text:{uz:"Tamoshabinman",ru:"Зритель",en:"Spectator"},score:2}, {text:{uz:"Qatnashmayman",ru:"Не участвую",en:"Don't join"},score:1}] },
                { q: { uz: "8. Ko'pchilikning fikri bilan hisoblashasizmi?", ru:"8. Считаетесь ли вы с мнением большинства?", en:"8. Consider majority opinion?" },
                  options: [{text:{uz:"Hurmat qilaman",ru:"Уважаю",en:"Respect"},score:3}, {text:{uz:"Muhimi o'z fikrim",ru:"Главное мое мнение",en:"My opinion matters"},score:2}, {text:{uz:"Doim zid chiqaman",ru:"Всегда противоречу",en:"Always oppose"},score:1}] },
                { q: { uz: "9. Tanish bo'lmagan davrada...", ru:"9. В незнакомой компании...", en:"9. In unfamiliar company..." },
                  options: [{text:{uz:"Tezroq moslashaman",ru:"Быстро адаптируюсь",en:"Adapt quickly"},score:3}, {text:{uz:"Chekkada o'tiraman",ru:"Сижу в сторонке",en:"Sit aside"},score:2}, {text:{uz:"Qochishga pay qidiraman",ru:"Ищу повод уйти",en:"Look to leave"},score:1}] },
                { q: { uz: "10. Atrofdagilarga sirtingizni ishonasizmi?", ru:"10. Доверяете ли окружающим?", en:"10. Trust people around?" },
                  options: [{text:{uz:"Aksariyat insonlarga",ru:"Большинству",en:"Mostly yes"},score:3}, {text:{uz:"Sanauqli odamlarga",ru:"Считанным людям",en:"Only few"},score:2}, {text:{uz:"Hamma ishonchsiz",ru:"Все ненадежны",en:"No one"},score:1}] }
            ],
            results: [
                { max: 13, title: {uz:"Yopiq shaxs", ru:"Вы немного закрыты", en:"Closed personality"}, text: { uz: "O'z qobig'ingizga o'ralgansiz. Jamiyatdan chetlashmang, do'stlik bu zo'r!", ru: "Вы отдалены от общества. Найдите друзей.", en: "You are distant. Make friends." }, icon: "fa-user-ninja" },
                { max: 21, title: {uz:"O'rtacha jamiyatlashuv", ru:"Хорошие соц. связи", en:"Good social connections"}, text: { uz: "Siz o'zingizning muayyan dvrangizda zo'rsiz.", ru: "В своей компании вы отличны.", en: "Doing great in your circle." }, icon: "fa-handshake" },
                { max: 30, title: {uz:"Haqiqiy lider!", ru:"Настоящий лидер!", en:"True leader!"}, text: { uz: "Siz mukammal ijtimoiy qobiliyatlarga egasiz!", ru: "Ваши навыки общения идеальны.", en: "Perfect communication skills!" }, icon: "fa-users" }
            ]
        },
        motivation: {
            title: { uz: "O'quv motivatsiyalari", ru: "Учебная мотивация", en: "Study Motivation" },
            questions: [
                { q: { uz: "1. Nima uchun maktabga borasiz?", ru:"1. Почему вы ходите в школу?", en:"1. Why go to school?" },
                  options: [{text:{uz:"Yangi bilimlarni o'rganish uchun",ru:"Для получения знаний",en:"To learn"},score:3}, {text:{uz:"Do'stlarni ko'rish uchun",ru:"Ради друзей",en:"For friends"},score:2}, {text:{uz:"Majbur bo'lganim uchun",ru:"Заставляют",en:"Forced"},score:1}] },
                { q: { uz: "2. Uy vazifasi haqida fikringiz?", ru:"2. Что думаете о домашних заданиях?", en:"2. Opinion on homework?" },
                  options: [{text:{uz:"Qiziqarli amaliyot",ru:"Интересная практика",en:"Interesting practice"},score:3}, {text:{uz:"Vazifa sifatida bajaraman",ru:"Выполняю как долг",en:"Do it as duty"},score:2}, {text:{uz:"Juda zerikarli",ru:"Скучно",en:"Very boring"},score:1}] },
                { q: { uz: "3. Kitob o'qishni yaxshi ko'rasizmi?", ru:"3. Любите читать книги?", en:"3. Like reading books?" },
                  options: [{text:{uz:"Doim o'qiyman",ru:"Всегда читаю",en:"Always read"},score:3}, {text:{uz:"Vaqt bo'lganda",ru:"По возможности",en:"When have time"},score:2}, {text:{uz:"Yomon ko'raman",ru:"Ненавижу",en:"Hate it"},score:1}] },
                { q: { uz: "4. Kelajakdagi kasbingiz ma'lummi?", ru:"4. Известна ли будущая профессия?", en:"4. Future profession?" },
                  options: [{text:{uz:"Aniq rejam bor",ru:"Есть точный план",en:"Clear plan"},score:3}, {text:{uz:"O'ylanyapman",ru:"Думаю",en:"Thinking"},score:2}, {text:{uz:"Umuman o'ylamadim",ru:"Не думал",en:"Haven't thought"},score:1}] },
                { q: { uz: "5. Yangi bilimlarni mustaqil izlaysizmi?", ru:"5. Ищете новые знания самостоятельно?", en:"5. Seek knowledge independently?" },
                  options: [{text:{uz:"Doim izlanaman",ru:"Постоянно в поиске",en:"Always search"},score:3}, {text:{uz:"Maktabda nima o'rgatsa shu",ru:"Только школьная база",en:"Only school"},score:2}, {text:{uz:"Bilim kerak emas",ru:"Знания не нужны",en:"Knowledge not needed"},score:1}] },
                { q: { uz: "6. Katta testlardagi maqsadingiz?", ru:"6. Ваша цель на тестах?", en:"6. Goal on big tests?" },
                  options: [{text:{uz:"Yuqori natija va o'zimni sinash",ru:"Высокий результат и проверка",en:"High result and test myself"},score:3}, {text:{uz:"O'rtacha baho olsa bo'ldi",ru:"Хотя бы средний балл",en:"Just average"},score:2}, {text:{uz:"Qutilish uchun topwiramam",ru:"Просто сдать",en:"Just to pass"},score:1}] },
                { q: { uz: "7. Qiyin mavzu tushunarsiz bo'lsa nima qilasiz?", ru:"7. Если тема непонятна, что делаете?", en:"7. When topic is hard?" },
                  options: [{text:{uz:"Uydan o'zim mustaqil o'rganaman",ru:"Самостоятельно учу",en:"Learn myself home"},score:3}, {text:{uz:"O'qituvchidan/do'stlardan so'rayman",ru:"Спрашиваю других",en:"Ask someone"},score:2}, {text:{uz:"Shunchaki o'tkazib yuboraman",ru:"Пропускаю",en:"Skip it"},score:1}] },
                { q: { uz: "8. Darsda qanday o'tirasiz?", ru:"8. Как ведете себя на уроке?", en:"8. Behavior in class?" },
                  options: [{text:{uz:"Faol va qiziqib",ru:"Активно и с интересом",en:"Active and interested"},score:3}, {text:{uz:"Tinch o'tiraman, tinglayman",ru:"Тихо слушаю",en:"Sit quietly, listen"},score:2}, {text:{uz:"Boshqa ishlarni qilaman",ru:"Занимаюсь своими делами",en:"Do other things"},score:1}] },
                { q: { uz: "9. Ta'til payti ham ilm olasizmi?", ru:"9. Учитесь ли на каникулах?", en:"9. Study during holidays?" },
                  options: [{text:{uz:"Albatta, tillar, kurslar..",ru:"Да, курсы, языки",en:"Yes, courses etc"},score:3}, {text:{uz:"Majburlashsa o'qiyman",ru:"Учу, если заставят",en:"If forced"},score:2}, {text:{uz:"Faqat dam olaman!",ru:"Только отдыхаю!",en:"Only rest"},score:1}] },
                { q: { uz: "10. Maktab reytinglari siz uchun muminmi?", ru:"10. Важны ли для вас оценки?", en:"10. Are grades important?" },
                  options: [{text:{uz:"Ha, yuqori pog'ona muhim",ru:"Да, быть на вершине",en:"Yes, top ranking"},score:3}, {text:{uz:"Natija muhim emas",ru:"Оценка не важна",en:"Not important"},score:2}, {text:{uz:"Baholar qiziqtirmaydi",ru:"Не интересует",en:"Don't care"},score:1}] },
            ],
            results: [
                { max: 13, title: {uz:"Motivatsiya yetishmaydi", ru:"Недостаток мотивации", en:"Lack of motivation"}, text: { uz: "Sizga maqsad va ishtiyoq yetishmayapti. Kelajagingiz haqida o'ylang.", ru: "Ваша мотивация учиться низкая. Найдите себе цель.", en: "Low motivation. Find your purpose." }, icon: "fa-battery-empty" },
                { max: 21, title: {uz:"O'rtacha ishtiyoq", ru:"Средняя мотивация", en:"Average enthusiasm"}, text: { uz: "Ta'limga bo'lgan qiziqishingiz yaxshi holatda.", ru: "Нормальная мотивация.", en: "Average interest in studies." }, icon: "fa-book" },
                { max: 30, title: {uz:"A'lo maqsadlar", ru:"Отличные цели", en:"Excellent goals"}, text: { uz: "Sizning ilmga bo'lgan g'ayratingiz ajoyib! Katta maqsadlarga erishasiz.", ru: "Высокое желание учиться. Вы добьетесь многого!", en: "Extremely high motivation! Great things await." }, icon: "fa-graduation-cap" }
            ]
        }
    }
};

let currentQuizState = { quizId: null, answers: [], questionIndex: 0 };

window.initGame = function(gameType, lang) {
    const container = document.getElementById('game-content');
    container.innerHTML = '';
    
    if(gameType === 'emotional' || gameType === 'emotion') renderEmotionGame(container, lang);
    else if(gameType === 'behavior' || gameType === 'scenario') renderScenarioGame(container, lang);
    else if(gamesData.quizzes[gameType]) {
        currentQuizState.quizId = gameType;
        currentQuizState.answers = [];
        currentQuizState.questionIndex = 0;
        renderQuizQuestion(container, lang);
    }
}

function renderQuizQuestion(container, lang) {
    const quiz = gamesData.quizzes[currentQuizState.quizId];
    const questionData = quiz.questions[currentQuizState.questionIndex];
    
    const headerRow = document.createElement('div');
    headerRow.className = 'flex-between';
    headerRow.style.marginBottom = '2rem';
    
    const title = document.createElement('h3');
    title.innerText = quiz.title[lang];
    title.style.color = 'var(--heading-color)';
    title.style.fontSize = '1.8rem';
    
    const progress = document.createElement('span');
    progress.className = 'badge badge-success';
    progress.innerText = `${currentQuizState.questionIndex + 1} / ${quiz.questions.length}`;
    
    headerRow.appendChild(title);
    headerRow.appendChild(progress);
    container.appendChild(headerRow);

    const qBox = document.createElement('div');
    qBox.style.fontSize = '1.3rem';
    qBox.style.fontWeight = '600';
    qBox.style.marginBottom = '2rem';
    qBox.style.padding = '2rem';
    qBox.style.backgroundColor = 'var(--glass-bg)';
    qBox.style.border = '2px solid rgba(16, 185, 129, 0.2)';
    qBox.style.borderRadius = '16px';
    qBox.innerText = questionData.q[lang];
    container.appendChild(qBox);

    const optionsDiv = document.createElement('div');
    optionsDiv.style.display = 'flex';
    optionsDiv.style.flexDirection = 'column';
    optionsDiv.style.gap = '1rem';
    optionsDiv.style.maxWidth = '600px';
    optionsDiv.style.margin = '0 auto';

    questionData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-primary';
        btn.innerText = opt.text[lang];
        btn.style.width = '100%';
        btn.style.padding = '1rem';
        btn.style.fontSize = '1.1rem';
        btn.onclick = () => {
            currentQuizState.answers.push(opt.score);
            currentQuizState.questionIndex++;
            if(currentQuizState.questionIndex < quiz.questions.length) {
                container.innerHTML = '';
                renderQuizQuestion(container, lang);
            } else {
                showQuizResult(container, lang);
            }
        };
        optionsDiv.appendChild(btn);
    });

    container.appendChild(optionsDiv);
}

function showQuizResult(container, lang) {
    const quiz = gamesData.quizzes[currentQuizState.quizId];
    const totalScore = currentQuizState.answers.reduce((acc, val) => acc + val, 0);
    
    let finalResultData = quiz.results[quiz.results.length - 1];
    for(let r of quiz.results) {
        if(totalScore <= r.max) {
            finalResultData = r;
            break;
        }
    }

    container.innerHTML = '';
    
    const resultBox = document.createElement('div');
    resultBox.className = 'glass-panel';
    resultBox.style.padding = '3rem';
    resultBox.style.maxWidth = '600px';
    resultBox.style.margin = '0 auto';
    resultBox.style.animation = 'fadeInUp 0.6s ease';
    
    const icon = document.createElement('i');
    icon.className = `fas ${finalResultData.icon}`;
    icon.style.fontSize = '5rem';
    icon.style.color = 'var(--primary-light)';
    icon.style.marginBottom = '1.5rem';
    
    const h2 = document.createElement('h2');
    h2.innerText = finalResultData.title[lang];
    h2.style.color = 'var(--heading-color)';
    h2.style.marginBottom = '1.5rem';
    h2.style.fontSize = '2rem';
    
    const p = document.createElement('p');
    p.innerText = finalResultData.text[lang];
    p.style.fontSize = '1.2rem';
    p.style.fontWeight = '500';
    p.style.marginBottom = '2.5rem';
    p.style.lineHeight = '1.6';
    p.style.color = 'var(--text-color)';
    
    const btn = document.createElement('button');
    btn.className = 'btn-large';
    btn.innerText = "Davom etish";
    if(typeof translations !== 'undefined' && translations[lang] && translations[lang]['continue']) {
        btn.innerText = translations[lang]['continue'];
    }
    btn.onclick = () => {
        showGames();
        // optionally update student status here if we had full backend logic
    };
    
    resultBox.appendChild(icon);
    resultBox.appendChild(h2);
    resultBox.appendChild(p);
    resultBox.appendChild(btn);
    container.appendChild(resultBox);
}

function renderEmotionGame(container, lang) {
    const title = document.createElement('h3');
    title.innerText = (typeof translations!=='undefined' && translations[lang]['test_emotional']) ? translations[lang]['test_emotional'] : "Emotsional holat";
    title.style.color = 'var(--heading-color)';
    title.style.marginBottom = '2rem';
    title.style.fontSize = '2rem';
    container.appendChild(title);

    const desc = document.createElement('p');
    desc.innerText = "Hozirgi kayfiyatingizga eng mos keluvchi yuz ifodasini tanlang";
    desc.style.marginBottom = '2rem';
    container.appendChild(desc);

    const flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.justifyContent = 'center';
    flex.style.gap = '2rem';
    flex.style.flexWrap = 'wrap';

    gamesData.emotion.faces.forEach(face => {
        const icon = document.createElement('i');
        icon.className = `fas ${face.icon}`;
        icon.style.fontSize = '4rem';
        icon.style.color = 'var(--accent)';
        icon.style.cursor = 'pointer';
        icon.style.transition = 'transform 0.3s, color 0.3s';
        icon.onmouseover = () => { icon.style.transform = 'scale(1.2) rotate(10deg)'; icon.style.color = 'var(--primary-color)'; };
        icon.onmouseout = () => { icon.style.transform = 'scale(1)'; icon.style.color = 'var(--accent)'; };

        icon.onclick = () => {
            container.innerHTML = '';
            const resultBox = document.createElement('div');
            resultBox.className = 'glass-panel';
            resultBox.style.padding = '3rem';
            resultBox.style.maxWidth = '600px';
            resultBox.style.margin = '0 auto';
            resultBox.style.animation = 'fadeInUp 0.6s ease';
            
            const rIcon = document.createElement('i');
            rIcon.className = `fas ${face.icon}`;
            rIcon.style.fontSize = '5rem';
            rIcon.style.color = 'var(--primary-light)';
            rIcon.style.marginBottom = '1.5rem';

            const p = document.createElement('p');
            p.innerText = face.desc[lang];
            p.style.fontSize = '1.5rem';
            p.style.fontWeight = '500';
            p.style.marginBottom = '2.5rem';
            
            const btn = document.createElement('button');
            btn.className = 'btn-large';
            btn.innerText = (typeof translations!=='undefined' && translations[lang]['continue']) ? translations[lang]['continue'] : "Davom etish";
            btn.onclick = () => showGames();
            
            resultBox.appendChild(rIcon);
            resultBox.appendChild(p);
            resultBox.appendChild(btn);
            container.appendChild(resultBox);
        };
        flex.appendChild(icon);
    });
    container.appendChild(flex);
}

function renderScenarioGame(container, lang) {
    // Show AI simulation UI
    container.innerHTML = `
        <div style="text-align:center; padding: 4rem 2rem;">
            <i class="fas fa-brain fa-spin text-green" style="font-size: 4rem; margin-bottom: 1.5rem;"></i>
            <h2 style="color: var(--heading-color)">${lang==='uz'?"AI vaziyatni modellashtirmoqda...":lang==='ru'?"ИИ моделирует ситуацию...":"AI is modeling a scenario..."}</h2>
        </div>
    `;
    setTimeout(() => {
        container.innerHTML = '';
        const title = document.createElement('h3');
        title.innerText = (typeof translations!=='undefined' && translations[lang]['test_behavior']) ? translations[lang]['test_behavior'] : "Xulq-atvor baholash";
        title.style.color = 'var(--heading-color)';
    title.style.marginBottom = '2rem';
    title.style.fontSize = '2rem';
    container.appendChild(title);

    const scenario = gamesData.scenario.questions[0];

    const q = document.createElement('div');
    q.style.fontSize = '1.3rem';
    q.style.fontWeight = '600';
    q.style.marginBottom = '2rem';
    q.style.padding = '1.5rem';
    q.style.backgroundColor = 'var(--glass-bg)';
    q.style.border = '2px solid rgba(16, 185, 129, 0.2)';
    q.style.borderRadius = '16px';
    q.innerText = scenario.q[lang];
    container.appendChild(q);

    const optionsDiv = document.createElement('div');
    optionsDiv.style.display = 'flex';
    optionsDiv.style.flexDirection = 'column';
    optionsDiv.style.gap = '1rem';
    optionsDiv.style.maxWidth = '600px';
    optionsDiv.style.margin = '0 auto';

    scenario.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-primary';
        btn.innerText = opt.t[lang];
        btn.style.width = '100%';
        btn.style.padding = '1rem';
        btn.style.fontSize = '1.1rem';
        btn.onclick = () => {
            container.innerHTML = '';
            const resultBox = document.createElement('div');
            resultBox.className = 'glass-panel';
            resultBox.style.padding = '3rem';
            resultBox.style.maxWidth = '600px';
            resultBox.style.margin = '0 auto';
            resultBox.style.animation = 'fadeInUp 0.6s ease';
            
            const rIcon = document.createElement('i');
            rIcon.className = `fas fa-info-circle`;
            rIcon.style.fontSize = '4rem';
            rIcon.style.color = 'var(--primary-light)';
            rIcon.style.marginBottom = '1.5rem';

            const p = document.createElement('p');
            p.innerText = opt.res[lang];
            p.style.fontSize = '1.3rem';
            p.style.fontWeight = '500';
            p.style.lineHeight = '1.6';
            p.style.marginBottom = '2.5rem';
            
            const btnClose = document.createElement('button');
            btnClose.className = 'btn-large';
            btnClose.innerText = (typeof translations!=='undefined' && translations[lang]['continue']) ? translations[lang]['continue'] : "Davom etish";
            btnClose.onclick = () => showGames();
            
            resultBox.appendChild(rIcon);
            resultBox.appendChild(p);
            resultBox.appendChild(btnClose);
            container.appendChild(resultBox);
        };
        optionsDiv.appendChild(btn);
    });
    container.appendChild(optionsDiv);
    }, 1500);
}
