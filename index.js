document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('#sendButton');
    const inputField = document.querySelector('#nameInput');
    const mainMessage = document.querySelector('#mainMessage');
    const form = document.querySelector('#form');
    const languageSelect = document.querySelector('#languageSelect');

    // Mesaje în diferite limbi
    const messages = {
        en: [
            "Merry Christmas, {name}! 🎄🎅 Wishing you lots of love and joy this festive season! 🎁✨",
            "May your Christmas be filled with happiness and warmth, {name}! 🎄✨🎁",
            "Happy Holidays, {name}! 🎅🌟 Wishing you a season of joy and peace! 🎄❄️",
            "Wishing you a Merry Christmas, {name}! May your heart be filled with love and laughter! 🎁🎉",
            "Season’s Greetings, {name}! 🎄🎁 May this Christmas bring happiness to you and your family! 🌟"
        ],
        ro: [
            "Crăciun Fericit, {name}! 🎄🎅 Îți dorim multă iubire și bucurie în acest sezon festiv! 🎁✨",
            "Să ai un Crăciun plin de fericire și căldură, {name}! 🎄✨🎁",
            "Sărbători Fericite, {name}! 🎅🌟 Îți dorim un sezon plin de bucurie și pace! 🎄❄️",
            "Îți dorim un Crăciun Fericit, {name}! Să-ți fie inima plină de iubire și râs! 🎁🎉",
            "Sărbători Fericite, {name}! 🎄🎁 Fie ca acest Crăciun să aducă fericire ție și familiei tale! 🌟"
        ],
        uk: [
            "З Різдвом Христовим, {name}! 🎄🎅 Бажаємо тобі багато любові та радості в цей святковий сезон! 🎁✨",
            "Нехай твоє Різдво буде наповнене щастям та теплом, {name}! 🎄✨🎁",
            "Щасливих свят, {name}! 🎅🌟 Бажаємо тобі сезону радості та миру! 🎄❄️",
            "Бажаємо тобі Різдва Христового, {name}! Нехай твоє серце буде наповнене любов'ю та сміхом! 🎁🎉",
            "З Різдвом Христовим, {name}! 🎄🎁 Нехай це Різдво принесе щастя тобі та твоїй родині! 🌟"
        ],
        hu: [
            "Boldog Karácsonyt, {name}! 🎄🎅 Sok szeretetet és örömöt kívánunk neked az ünnepi szezonban! 🎁✨",
            "Legyen tele a karácsonyod boldogsággal és melegséggel, {name}! 🎄✨🎁",
            "Boldog Ünnepeket, {name}! 🎅🌟 Kívánunk neked egy örömteli és békés szezont! 🎄❄️",
            "Kívánunk neked Boldog Karácsonyt, {name}! Töltsd el az ünnepeket szeretettel és nevetéssel! 🎁🎉",
            "Boldog Karácsonyt, {name}! 🎄🎁 Az idei Karácsony hozzon boldogságot neked és a családodnak! 🌟"
        ],
        de: [
            "Frohe Weihnachten, {name}! 🎄🎅 Wir wünschen dir viel Liebe und Freude in dieser festlichen Saison! 🎁✨",
            "Möge dein Weihnachten voller Glück und Wärme sein, {name}! 🎄✨🎁",
            "Frohe Feiertage, {name}! 🎅🌟 Wir wünschen dir eine Zeit voller Freude und Frieden! 🎄❄️",
            "Wir wünschen dir ein frohes Weihnachten, {name}! Möge dein Herz voller Liebe und Lachen sein! 🎁🎉",
            "Frohe Weihnachten, {name}! 🎄🎁 Möge dieses Weihnachten Glück für dich und deine Familie bringen! 🌟"
        ],
        fr: [
            "Joyeux Noël, {name}! 🎄🎅 Nous te souhaitons plein d'amour et de joie en cette saison festive! 🎁✨",
            "Que ton Noël soit rempli de bonheur et de chaleur, {name}! 🎄✨🎁",
            "Joyeuses Fêtes, {name}! 🎅🌟 Nous te souhaitons une saison de joie et de paix! 🎄❄️",
            "Nous te souhaitons un Joyeux Noël, {name}! Que ton cœur soit rempli d'amour et de rires! 🎁🎉",
            "Joyeux Noël, {name}! 🎄🎁 Que ce Noël apporte le bonheur à toi et à ta famille! 🌟"
        ],
        pl: [
            "Wesołych Świąt, {name}! 🎄🎅 Życzymy Ci dużo miłości i radości w tym świątecznym okresie! 🎁✨",
            "Niech Twoje Święta będą pełne szczęścia i ciepła, {name}! 🎄✨🎁",
            "Wesołych Świąt, {name}! 🎅🌟 Życzymy Ci sezonu pełnego radości i pokoju! 🎄❄️",
            "Życzymy Ci Wesołych Świąt, {name}! Niech Twoje serce będzie pełne miłości i śmiechu! 🎁🎉",
            "Wesołych Świąt, {name}! 🎄🎁 Niech te Święta przyniosą Ci szczęście i radość! 🌟"
        ],
        tr: [
            "Mutlu Noeller, {name}! 🎄🎅 Bu kutlu sezonda sana bolca sevgi ve mutluluk diliyoruz! 🎁✨",
            "Noel'in sevgi ve sıcaklıkla dolu olsun, {name}! 🎄✨🎁",
            "Mutlu Tatiller, {name}! 🎅🌟 Sana neşe ve huzur dolu bir sezon diliyoruz! 🎄❄️",
            "Sana Mutlu Noeller diliyoruz, {name}! Kalbin sevgi ve kahkaha ile dolsun! 🎁🎉",
            "Mutlu Noeller, {name}! 🎄🎁 Bu Noel, sana ve ailenize mutluluk getirsin! 🌟"
        ]
    };

    // Funcție pentru a alege un mesaj aleatoriu din limba selectată
    function getRandomMessage(language, name) {
        const languageMessages = messages[language];
        const randomIndex = Math.floor(Math.random() * languageMessages.length);
        return languageMessages[randomIndex].replace('{name}', name);
    }

    sendButton.addEventListener('click', function(event) {
        event.preventDefault(); // Previne comportamentul implicit al butonului

        const nameValue = inputField.value;
        const languageValue = languageSelect.value;

        if (nameValue && languageValue) {
            // Obținem un mesaj aleatoriu în limba selectată
            const christmasMessage = getRandomMessage(languageValue, nameValue);

            // Afișăm mesajul și ascundem input-ul și butonul
            mainMessage.textContent = christmasMessage;
            form.style.display = 'none';
        } else {
            alert('Please enter your name and select a language!');
        }
    });
});
