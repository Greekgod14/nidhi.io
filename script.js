// Enhanced Bhagavad Gita Shlokas with mood categories and transliterations
const shlokas = [
    {
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
        meaning: "You have the right to perform your actions, but never to the fruits of action. Do not let the fruits of action be your motive, nor let your attachment be to inaction.",
        application: "Nidhi Mahathi, this verse reminds you that doing your duty sincerely is enough. Results will follow in their own time. Focus on your efforts, not outcomes.",
        mood: "wisdom"
    },
    {
        sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
        transliteration: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya | siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate",
        meaning: "Perform your duty equipoised, abandoning all attachment to success or failure. Such equanimity is called yoga.",
        application: "Dear Nidhi Mahathi, when life feels overwhelming, remember that balance comes from within. Stay centered regardless of external circumstances.",
        mood: "peace"
    },
    {
        sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
        transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru | mām evaiṣyasi satyaṁ te pratijāne priyo 'si me",
        meaning: "Fix your mind on Me, be devoted to Me, sacrifice to Me, bow down to Me. You shall come to Me alone; I promise you truly, for you are dear to Me.",
        application: "Nidhi Mahathi, when you feel lost or alone, remember that divine love surrounds you always. Trust in this connection and find peace.",
        mood: "love"
    },
    {
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
        transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja | ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
        meaning: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
        application: "Sweet Nidhi Mahathi, release your worries and guilt. Trust that you are protected and loved unconditionally. Let go and find freedom.",
        mood: "peace"
    },
    {
        sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
        transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
        meaning: "Whenever there is decline in righteousness and increase in unrighteousness, at that time I manifest myself on earth.",
        application: "Nidhi Mahathi, even in dark times, remember that light always returns. Your inner goodness will guide you through any challenge.",
        mood: "strength"
    },
    {
        sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
        transliteration: "na hi jñānena sadṛśaṁ pavitram iha vidyate | tat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati",
        meaning: "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism.",
        application: "Dear Nidhi Mahathi, every experience teaches you something valuable. Trust in your growing wisdom and inner knowing.",
        mood: "wisdom"
    },
    {
        sanskrit: "श्रद्धावान्लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
        transliteration: "śraddhāvāl labhate jñānaṁ tat-paraḥ saṁyatendriyaḥ | jñānaṁ labdhvā parāṁ śāntim acireṇādhigacchati",
        meaning: "A faithful person who is dedicated to transcendental knowledge and who subdues his senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme spiritual peace.",
        application: "Nidhi Mahathi, your sincere seeking and open heart will lead you to the peace you desire. Keep faith in your spiritual journey.",
        mood: "peace"
    }
];

// Global variables
let currentShlokas = [...shlokas];
let isDarkTheme = false;
let isAmbientPlaying = false;
let mantraCount = parseInt(localStorage.getItem('mantraCount') || '0');

// Emotional responses
const emotionalResponses = {
    peaceful: [
        "I'm so glad you're feeling peaceful, Nidhi Mahathi. This inner calm is your natural state. Carry this serenity with you throughout your day. 🕊️",
        "Beautiful, Nidhi Mahathi. When you're at peace, you're aligned with your true self. Let this feeling expand and touch everything you do today. ✨",
        "Your peaceful heart is a gift, Nidhi Mahathi. This tranquility is always available to you - just breathe and return to this moment. 🌸"
    ],
    stressed: [
        "I understand, Nidhi Mahathi. Stress is temporary, but your strength is permanent. Take three deep breaths with me. You've handled difficult times before, and you will again. 💙",
        "Sweet Nidhi Mahathi, when the world feels heavy, remember that you don't have to carry it all. Focus on just the next small step. You're stronger than you know. 🌟",
        "Dear Nidhi Mahathi, stress is just energy that needs direction. Channel it into something that serves you. You have the wisdom to navigate this. 🦋"
    ],
    sad: [
        "Your sadness is valid, Nidhi Mahathi. It's okay to feel this way. Sadness often comes before growth and new understanding. Be gentle with yourself today. 💙",
        "I'm here with you in this feeling, Nidhi Mahathi. Sadness is part of the human experience, and it will pass. You are loved and supported, always. 🤗",
        "Sweet Nidhi Mahathi, your tender heart feels deeply, and that's both your gift and sometimes your burden. This feeling will transform into wisdom. 🌙"
    ],
    grateful: [
        "Your gratitude lights up everything around you, Nidhi Mahathi. This appreciation you feel is a direct connection to abundance and joy. Keep shining! ✨",
        "Beautiful, Nidhi Mahathi. Gratitude is the fastest way to transform any situation. Your thankful heart creates more reasons to be thankful. 🙏",
        "I love seeing your grateful spirit, Nidhi Mahathi. This energy attracts more blessings into your life. You're creating a beautiful cycle of abundance. 💛"
    ]
};

// Questions for different times
const questions = {
    morning: [
        "What intention would you like to set for today, Nidhi Mahathi?",
        "How are you feeling as this new day begins, Nidhi Mahathi?",
        "What are you most looking forward to today, Nidhi Mahathi?"
    ],
    evening: [
        "Hey Nidhi Mahathi, how was your day?",
        "What made you feel most alive today, Nidhi Mahathi?",
        "Was anything heavy on your heart today, Nidhi Mahathi?",
        "What brought you joy today, Nidhi Mahathi?"
    ],
    night: [
        "What are you most grateful for today, Nidhi Mahathi?",
        "How can you be gentler with yourself tonight, Nidhi Mahathi?",
        "What would help you feel most peaceful right now, Nidhi Mahathi?"
    ]
};

function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 17 && hour < 21) return 'evening';
    return 'night';
}

function setGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingElement = document.getElementById('greeting');
    const messageElement = document.getElementById('time-message');
    
    switch(timeOfDay) {
        case 'morning':
            greetingElement.textContent = 'Good Morning, Nidhi Mahathi ☀️';
            messageElement.textContent = 'May this day bring you peace, purpose, and gentle moments of joy.';
            break;
        case 'evening':
            greetingElement.textContent = 'Good Evening, Nidhi Mahathi 🌅';
            messageElement.textContent = 'Time to pause, reflect, and appreciate the day that was.';
            break;
        case 'night':
            greetingElement.textContent = 'Good Night, Nidhi Mahathi 🌙';
            messageElement.textContent = 'Rest now, dear one. Tomorrow is a fresh canvas for your beautiful soul.';
            break;
    }
}

// Sunrise/Sunset countdown
function updateCountdown() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Approximate sunrise/sunset times (6 AM / 6 PM)
    const sunrise = new Date(today);
    sunrise.setHours(6, 0, 0, 0);
    
    const sunset = new Date(today);
    sunset.setHours(18, 0, 0, 0);
    
    let nextEvent, nextTime;
    
    if (now < sunrise) {
        nextEvent = "Next Sunrise";
        nextTime = sunrise;
    } else if (now < sunset) {
        nextEvent = "Next Sunset";
        nextTime = sunset;
    } else {
        nextEvent = "Next Sunrise";
        nextTime = new Date(sunrise.getTime() + 24 * 60 * 60 * 1000);
    }
    
    const timeDiff = nextTime - now;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.getElementById('next-event').textContent = nextEvent;
    document.getElementById('countdown-timer').textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function shuffleShloka() {
    const randomIndex = Math.floor(Math.random() * currentShlokas.length);
    const shloka = currentShlokas[randomIndex];
    
    const shlokaContent = document.getElementById('shloka-content');
    
    shlokaContent.style.opacity = '0';
    shlokaContent.style.transform = 'translateY(10px) scale(0.98)';
    
    setTimeout(() => {
        document.getElementById('sanskrit-text').textContent = shloka.sanskrit;
        document.getElementById('transliteration-text').textContent = shloka.transliteration;
        document.getElementById('meaning-text').textContent = shloka.meaning;
        document.getElementById('application-text').textContent = shloka.application;
        
        shlokaContent.style.opacity = '1';
        shlokaContent.style.transform = 'translateY(0) scale(1)';
    }, 200);
}

function filterByMood() {
    const selectedMood = document.getElementById('mood-filter').value;
    
    if (selectedMood === 'all') {
        currentShlokas = [...shlokas];
    } else {
        currentShlokas = shlokas.filter(shloka => shloka.mood === selectedMood);
    }
    
    shuffleShloka();
}

function setDailyQuestion() {
    const timeOfDay = getTimeOfDay();
    const timeQuestions = questions[timeOfDay];
    const randomQuestion = timeQuestions[Math.floor(Math.random() * timeQuestions.length)];
    document.getElementById('daily-question').textContent = randomQuestion;
}

function respondToEmotion(emotion) {
    const responses = emotionalResponses[emotion];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    document.getElementById('emotional-response').textContent = randomResponse;
    document.getElementById('question-card').classList.add('hidden');
    document.getElementById('response-card').classList.remove('hidden');
}

function showQuestion() {
    document.getElementById('response-card').classList.add('hidden');
    document.getElementById('question-card').classList.remove('hidden');
    setDailyQuestion();
}

// Theme toggle
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('darkTheme', isDarkTheme);
}

// Ambient sound toggle
function toggleAmbientSound() {
    const audio = document.getElementById('ambient-sound');
    isAmbientPlaying = !isAmbientPlaying;
    
    if (isAmbientPlaying) {
        audio.play().catch(() => {
            // Fallback if audio doesn't load
            console.log('Audio not available');
        });
    } else {
        audio.pause();
    }
}

// Mantra counter
function toggleMantraCounter() {
    const mantraSection = document.getElementById('mantra-counter');
    mantraSection.classList.toggle('hidden');
    updateMantraDisplay();
}

function incrementMantra() {
    mantraCount++;
    localStorage.setItem('mantraCount', mantraCount);
    updateMantraDisplay();
    
    // Add visual feedback
    const countElement = document.getElementById('mantra-count');
    countElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countElement.style.transform = 'scale(1)';
    }, 200);
}

function resetMantra() {
    mantraCount = 0;
    localStorage.setItem('mantraCount', mantraCount);
    updateMantraDisplay();
}

function updateMantraDisplay() {
    document.getElementById('mantra-count').textContent = mantraCount;
}

// Journal
function toggleJournal() {
    const journalSection = document.getElementById('journal');
    journalSection.classList.toggle('hidden');
    loadJournal();
}

function saveJournal() {
    const journalText = document.getElementById('journal-text').value;
    const today = new Date().toDateString();
    localStorage.setItem(`journal_${today}`, journalText);
    
    // Visual feedback
    const saveBtn = document.querySelector('.save-btn');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = 'Saved! ✨';
    setTimeout(() => {
        saveBtn.textContent = originalText;
    }, 2000);
}

function loadJournal() {
    const today = new Date().toDateString();
    const savedJournal = localStorage.getItem(`journal_${today}`) || '';
    document.getElementById('journal-text').value = savedJournal;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    setGreeting();
    shuffleShloka();
    setDailyQuestion();
    updateMantraDisplay();
    
    // Load saved theme
    const savedTheme = localStorage.getItem('darkTheme') === 'true';
    if (savedTheme) {
        toggleTheme();
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Update greeting every minute
    setInterval(setGreeting, 60000);
    
    // Add Sanskrit pronunciation on click
    document.getElementById('sanskrit-text').addEventListener('click', function() {
        const transliteration = document.getElementById('transliteration-text');
        transliteration.style.display = transliteration.style.display === 'none' ? 'block' : 'none';
    });
});