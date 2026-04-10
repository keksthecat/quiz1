// ====== PRELUARE ELEMENTE DIN HTML ======
const subjectButtonsDiv = document.getElementById("subject-buttons");
const subjectSelectionDiv = document.getElementById("subject-selection");
const startBtnDiv = document.getElementById("start-button-container");
const startBtn = document.getElementById("start-btn");
const quizDiv = document.getElementById("quiz");
const background = document.getElementById("background");
const title = document.getElementById("title");

// ====== DATE ======
const subjects = {
    1: ["Limba română", "Matematică", "Arte vizuale", "Muzică", "Educație fizică"],
    2: ["Limba română", "Matematică", "Arte vizuale", "Muzică", "Educație fizică"],
    3: ["Limba română", "Matematică", "Arte vizuale", "Muzică", "Educație fizică", "Geografie"],
    4: ["Limba română", "Matematică", "Geografie", "Arte vizuale", "Muzică", "Educație fizică"]
}; 

// Întrebări scurte
const questions = {
    "Limba română": {
        1: [
            { q: "Ce literă urmează după A?", options: ["nu este", "C", "B", "E"], answer: "B" },
            { q: "Care este primul cuvânt din 'Maria merge'?", options: ["Maria", "merge", "și", "nu"], answer: "Maria" },
            { q: "Alege cuvântul corect: eu ___", options: ["mănânci", "mănca", "mănânc"], answer: "mănânc" },
            { q: "Care este antonimul pentru 'mic'?", options: ["mare", "subțire", "scurt", "ușor"], answer: "mare" },
            { q: "Alege cuvântul potrivit: Soarele ___ răsare.", options: ["soarele nu rasare", "noaptea", "seara", "iarna", "dimineața"], answer: "dimineața" }
        ],
        2: [
            { q: "Alege litera corectă: ___ este băiat.", options: ["Acesta", "Aceasta", "Acești", "Aceste"], answer: "Acesta" },
            { q: "Care cuvânt este substantiv?", options: ["merge", "copil", "frumos", "alergi"], answer: "copil" },
            { q: "Cum se scrie corect?", options: ["Masa", "Maza", "Mașa", "Masă"], answer: "Masă" },
            { q: "Care este pluralul pentru 'carte'?", options: ["carte", "cărți", "carti", "cartes"], answer: "cărți" },
            { q: "Completează: Ana ___ o floare.", options: ["are", "avem", "au", "a"], answer: "are" }
        ],
        3: [
            { q: "Ce literă urmează după L?", options: ["M", "N", "K", "O"], answer: "M" },
            { q: "Scrie antonimul pentru 'fericit'", options: ["trist", "bucuros", "vesel", "supărat"], answer: "trist" },
            { q: "Care este substantivul în propoziția 'Ion aleargă'?", options: ["Ion", "aleargă", "și", "nu"], answer: "Ion" },
            { q: "Formează pluralul: cățel", options: ["căței", "cățel", "cățeii", "cățeluș"], answer: "căței" },
            { q: "Alege forma corectă: El ___ la școală.", options: ["merge", "merg", "mergi", "mergă"], answer: "merge" }
        ],
        4: [
            { q: "Care este pluralul pentru 'floare'?", options: ["flori", "floare", "flores", "florii"], answer: "flori" },
            { q: "Alege antonimul pentru 'înalt'", options: ["scund", "mic", "jos", "micuț"], answer: "scund" },
            { q: "Ce propoziție este corectă?", options: ["Eu citesc o carte", "Eu citeste o carte", "Eu citim o carte", "Eu cititi o carte"], answer: "Eu citesc o carte" },
            { q: "Scrie forma corectă: Noi ___ acasă.", options: ["suntem", "este", "sunt", "esti"], answer: "suntem" },
            { q: "Care cuvânt este adjectiv?", options: ["frumos", "masă", "Ion", "aleargă"], answer: "frumos" }
        ]
    },

    "Matematică": {
        1: [
            { q: "2+3=?", options: ["4", "5", "6", "3"], answer: "5" },
            { q: "5-2=?", options: ["2", "3", "4", "1"], answer: "3" },
            { q: "3x2=?", options: ["5", "67", "7", "6"], answer: "6" },
            { q: "10:2=?", options: ["5", "67", "6", "3"], answer: "5" },
            { q: "Care este următorul număr:1,2,3,?", options: ["4", "5", "6", "7"], answer: "4" }
        ],
        2: [
            { q: "7+2=?", options: ["8", "9", "10", "7"], answer: "9" },
            { q: "6-4=?", options: ["3", "2", "1", "0"], answer: "2" },
            { q: "5x2=?", options: ["7", "10", "12", "5"], answer: "10" },
            { q: "12:3=?", options: ["3", "4", "5", "6"], answer: "4" },
            { q: "Care număr lipsește: 2,4,?,8", options: ["5", "6", "7", "3"], answer: "6" }
        ],
        3: [
            { q: "8+7=?", options: ["14", "15", "16", "17"], answer: "15" },
            { q: "9-5=?", options: ["3", "4", "5", "6"], answer: "4" },
            { q: "6x3=?", options: ["18", "16", "20", "17"], answer: "18" },
            { q: "15:3=?", options: ["5", "6", "4", "3"], answer: "5" },
            { q: "Care este următorul număr: 5,10,15,?", options: ["20", "25", "30", "18"], answer: "20" }
        ],
        4: [
            { q: "12+15=?", options: ["25", "27", "28", "30"], answer: "27" },
            { q: "20-7=?", options: ["12", "13", "14", "15"], answer: "13" },
            { q: "7x4=?", options: ["28", "27", "24", "26"], answer: "28" },
            { q: "36:6=?", options: ["5", "6", "7", "8"], answer: "6" },
            { q: "Număr pare între 10 și 20?", options: ["12,14,16,18,20", "11,13,15,17,19", "10,12,14,16,18", "12,14,16,18"], answer: "12,14,16,18,20" }
        ]
    },

    "Arte vizuale": {
        1: [
            { q: "Ce culoare obții din roșu+alb?", options: ["roșualb", "Roz", "Verde", "Albastru"], answer: "Roz" },
            { q: "Ce formă are o roată?", options: ["circ", "Pătrat", "Triunghi", "Cerc"], answer: "Cerc" },
            { q: "Cum se numește pensula?", options: ["Pensulă", "Creion", "Radieră", "Cariocă"], answer: "Pensulă" },
            { q: "Ce culoare este soarele?", options: ["Galben", "Albastru", "Roșu", "Verde"], answer: "Galben" },
            { q: "Ce desenăm cu creionul?", options: ["Linii", "Sunete", "Note", "Numere"], answer: "Linii" }
        ],
        2: [
            { q: "Ce culoare obții din albastru+galben?", options: ["Verde", "Portocaliu", "Mov", "Maroniu"], answer: "Verde" },
            { q: "Ce desenăm cu creionul colorat?", options: ["Flori", "Sunete", "Note", "Numere"], answer: "Flori" },
            { q: "Cum se numește acuarela?", options: ["Acuarelă", "Creion", "Cariocă", "Pastel"], answer: "Acuarelă" },
            { q: "Ce formă are o fereastră?", options: ["Pătrat", "Cerc", "Triunghi", "Oval"], answer: "Pătrat" },
            { q: "Ce culoare este iarba?", options: ["Verde", "Galben", "Roșu", "Albastru"], answer: "Verde" }
        ],
        3: [
            { q: "Ce culoare obții din roșu+galben?", options: ["Portocaliu", "Verde", "Mov", "Maroniu"], answer: "Portocaliu" },
            { q: "Ce formă are un triunghi?", options: ["Triunghi", "Pătrat", "Cerc", "Oval"], answer: "Triunghi" },
            { q: "Cum se numește pastelul?", options: ["Pastel", "Creion", "Pensulă", "Radieră"], answer: "Pastel" },
            { q: "Ce culoare are cerul?", options: ["Albastru", "Verde", "Galben", "Roșu"], answer: "Albastru" },
            { q: "Ce desenăm cu carioca?", options: ["Linii colorate", "Sunete", "Note", "Numere"], answer: "Linii colorate" }
        ],
        4: [
            { q: "Cum combinăm albastru și roșu?", options: ["Mov", "Verde", "Portocaliu", "Negru"], answer: "Mov" },
            { q: "Ce formă are o elipsă?", options: ["Elipsă", "Pătrat", "Cerc", "Triunghi"], answer: "Elipsă" },
            { q: "Cum se numește markerul?", options: ["Marker", "Pensulă", "Creion", "Pastel"], answer: "Marker" },
            { q: "Ce culoare are frunza?", options: ["Verde", "Galben", "Roșu", "Albastru"], answer: "Verde" },
            { q: "Ce desenăm cu acuarele?", options: ["Peisaje", "Sunete", "Note", "Numere"], answer: "Peisaje" }
        ]
    },

    "Muzică": {
        1: [
            { q: "Ce notă urmează după Do?", options: ["Re", "Mi", "Fa", "Sol"], answer: "Re" },
            { q: "Cum se numește instrumentul cu clape?", options: ["Pian", "Toba", "Chitară", "Flaut"], answer: "Pian" },
            { q: "Cum se numește cântecul scurt?", options: ["Melodie", "Romanță", "Simfonie", "Sonată"], answer: "Melodie" },
            { q: "Ce simbol reprezintă o pauză?", options: ["|", "♩", "♪", "♬"], answer: "|" },
            { q: "Ce culoare are cheia sol?", options: ["Negru", "Alb", "Albastru", "Galben"], answer: "Negru" }
        ],
        2: [
            { q: "Ce notă urmează după Re?", options: ["Mi", "Fa", "Sol", "La"], answer: "Mi" },
            { q: "Cum se numește instrumentul cu coarde?", options: ["Chitară", "Tobă", "Flaut", "Pian"], answer: "Chitară" },
            { q: "Cum se numește cântecul lung?", options: ["Simfonie", "Melodie", "Romanță", "Sonată"], answer: "Simfonie" },
            { q: "Ce simbol reprezintă o notă întreagă?", options: ["♩", "♪", "♬", "|"], answer: "♩" },
            { q: "Care este prima notă muzicală?", options: ["Do", "Re", "Mi", "Fa"], answer: "Do" }
        ],
        3: [
            { q: "Ce notă urmează după Mi?", options: ["Fa", "Sol", "La", "Si"], answer: "Fa" },
            { q: "Cum se numește instrumentul cu coarde și arcuș?", options: ["Vioară", "Chitară", "Tobă", "Pian"], answer: "Vioară" },
            { q: "Cum se numește o simfonie?", options: ["Simfonie", "Melodie", "Romanță", "Sonată"], answer: "Simfonie" },
            { q: "Ce simbol reprezintă o notă jumătate?", options: ["♩.", "♪", "♬", "|"], answer: "♪" },
            { q: "Care este nota finală Do?", options: ["Do", "Re", "Mi", "Fa"], answer: "Do" }
        ],
        4: [
            { q: "Ce notă urmează după Fa?", options: ["Sol", "La", "Si", "Do"], answer: "Sol" },
            { q: "Cum se numește instrumentul cu coarde mari?", options: ["Contrabas", "Vioară", "Chitară", "Pian"], answer: "Contrabas" },
            { q: "Cum se numește o sonată?", options: ["Sonată", "Melodie", "Romanță", "Simfonie"], answer: "Sonată" },
            { q: "Ce simbol reprezintă o notă întreagă?", options: ["♩", "♪", "♬", "|"], answer: "♩" },
            { q: "Care este nota muzicală de început?", options: ["Do", "Re", "Mi", "Fa"], answer: "Do" }
        ]
    },

    "Educație fizică": {
        1: [
            { q: "Câte picioare are un om?", options: ["nu are picioare", "4", "3", "1", "2"], answer: "2" },
            { q: "Ce sport se joacă cu o minge?", options: ["Șah", "Go", "Fotbal"], answer: "Fotbal" },
            { q: "Ce exercițiu lucrează brațele?", options: ["Flotări", "Genuflexiuni", "Sprint", "Plimbare"], answer: "Flotări" },
            { q: "Cum alergăm mai repede?", options: ["Sprint", "Mers", "Stat", "Salt"], answer: "Sprint" },
            { q: "Ce activitate este în aer liber?", options: ["Fotbal", "Citit", "Scris", "Pictat"], answer: "Fotbal" }
        ],
        2: [
            { q: "Câte brațe are un om?", options: ["1", "2", "3", "4"], answer: "2" },
            { q: "Ce sport se joacă cu racheta?", options: ["Tenis", "Fotbal", "Baschet", "Volei"], answer: "Tenis" },
            { q: "Ce exercițiu lucrează picioarele?", options: ["Flotări", "Genuflexiuni", "Sprint", "Stat"], answer: "Genuflexiuni" },
            { q: "Cum sărim mai sus?", options: ["Salt", "Mers", "Stat", "Flotări"], answer: "Salt" },
            { q: "Ce activitate este în aer liber?", options: ["Fotbal", "Citit", "Scris", "Pictat"], answer: "Fotbal" }
        ],
        3: [
            { q: "Câte brațe are un om?", options: ["1", "2", "3", "4"], answer: "2" },
            { q: "Ce sport se joacă cu mingea mare?", options: ["Fotbal", "Volei", "Handbal", "Baschet"], answer: "Fotbal" },
            { q: "Ce exercițiu lucrează abdomenul?", options: ["Flotări", "Abdomene", "Genuflexiuni", "Sprint"], answer: "Abdomene" },
            { q: "Cum alergăm mai repede?", options: ["Sprint", "Mers", "Stat", "Salt"], answer: "Sprint" },
            { q: "Ce activitate este în aer liber?", options: ["Fotbal", "Citit", "Scris", "Pictat"], answer: "Fotbal" }
        ],
        4: [
            { q: "Câte brațe are un om?", options: ["1", "2", "3", "4"], answer: "2" },
            { q: "Ce sport se joacă cu racheta?", options: ["Tenis", "Fotbal", "Baschet", "Volei"], answer: "Tenis" },
            { q: "Ce exercițiu lucrează picioarele?", options: ["Flotări", "Genuflexiuni", "Sprint", "Salt"], answer: "Genuflexiuni" },
            { q: "Cum sărim mai sus?", options: ["Salt", "Mers", "Stat", "Flotări"], answer: "Salt" },
            { q: "Ce activitate este în aer liber?", options: ["Fotbal", "Citit", "Scris", "Pictat"], answer: "Fotbal" }
        ]
    },

    "Geografie": {
        3: [
            { q: "Capitala României?", options: ["București", "Cluj", "Iași", "Timișoara"], answer: "București" },
            { q: "Cel mai mare fluviu?", options: ["Dunărea", "Olt", "Mureș", "Prut"], answer: "Dunărea" },
            { q: "Cel mai înalt munte?", options: ["Moldoveanu", "Retezat", "Parâng", "Ceahlău"], answer: "Moldoveanu" },
            { q: "Ce mare este la est?", options: ["Marea Neagră", "Marea Mediterană", "Marea Adriatică", "Marea Nordului"], answer: "Marea Neagră" },
            { q: "Ce continent este România?", options: ["Europa", "Asia", "Africa", "America"], answer: "Europa" }
        ],
        4: [
            { q: "Capitala României?", options: ["București", "Cluj", "Iași", "Timișoara"], answer: "București" },
            { q: "Cel mai mare fluviu?", options: ["Dunărea", "Olt", "Mureș", "Prut"], answer: "Dunărea" },
            { q: "Cel mai înalt munte?", options: ["Moldoveanu", "Retezat", "Parâng", "Ceahlău"], answer: "Moldoveanu" },
            { q: "Ce mare este la est?", options: ["Marea Neagră", "Marea Mediterană", "Marea Adriatică", "Marea Nordului"], answer: "Marea Neagră" },
            { q: "Ce continent este România?", options: ["Europa", "Asia", "Africa", "America"], answer: "Europa" }
        ]
    }
};



let selectedSubject = null;
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let streak = 0;
const params = new URLSearchParams(window.location.search);
let selectedClass = params.get("class");

if (selectedClass && subjects[selectedClass]) {
    loadSubjects(selectedClass);
}
function loadSubjects(clasa) {

    title.textContent = "Clasa " + clasa;
    subjectButtonsDiv.innerHTML = "";

    subjects[clasa].forEach(sub => {
        const btn = document.createElement("button");
        btn.textContent = sub;

        btn.onclick = () => {
            selectedSubject = sub;
            subjectSelectionDiv.style.display = "none";
            startBtnDiv.style.display = "block";
            background.style.background = "linear-gradient(to right,#fff4f0,#ffc1b6)";
        };

        subjectButtonsDiv.appendChild(btn);
    });

    subjectSelectionDiv.style.display = "block";
}

startBtn.onclick = () => {
    startBtnDiv.style.display = "none";
    quizDiv.style.display = "block";

    quizQuestions = [...questions[selectedSubject][selectedClass]];
    shuffleArray(quizQuestions);

    currentQuestion = 0;
    score = 0;
    streak = 0;  // ← important

    showQuestion();
};


function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        let html = `<h2>Ai terminat! Scor: ${score}/${quizQuestions.length}</h2>`;
        if (score === quizQuestions.length) { html += `<div class="trophy">🏆</div>`; }
        html += `<button id="retry-btn">Refă testul</button>`;

        quizDiv.innerHTML = html;

        document.getElementById("retry-btn").onclick = () => {
            score = 0; streak = 0; currentQuestion = 0;
            quizQuestions = [...questions[selectedSubject]];
            shuffleArray(quizQuestions);
            showQuestion();
        };
        
        document.getElementById("home-btn").onclick = () => {
            quizDiv.style.display = "none";
            selectedClass = null;
            selectedSubject = null;
            classSelectionDiv.style.display = "block";
            subjectSelectionDiv.style.display = "none";
            startBtnDiv.style.display = "none";
            background.style.background = "linear-gradient(to right, #a1c4fd, #c2e9fb)";
        };
        return;
    }
    
    const q = quizQuestions[currentQuestion];
    quizDiv.innerHTML = `<h2>${q.q}</h2>`;
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, q.answer);
        quizDiv.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    quizDiv.innerHTML = "";
    if (selected === correct) {
        streak++; score++;
        const star = document.createElement("div"); star.className = "star"; star.textContent = "⭐ x" + streak;
        quizDiv.appendChild(star);
    } else {
        streak = 0;
        const sad = document.createElement("div"); sad.className = "sad-star"; sad.textContent = "😢";
        quizDiv.appendChild(sad);
    }
    currentQuestion++;
    setTimeout(showQuestion, 1000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Responsive topnav hamburger
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") { x.className += " responsive"; }
    else { x.className = "topnav"; }
}

