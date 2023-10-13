const questions = [

    {
        question: "How many programming languages do you know?",
        answers: ["1800", "1580", "2500", "3000"],
        correct: "C",
        isAnswer: false

    },
    {
        question: "What type of languages is javaScriprt?",
        answers: ["array", "object", "boolean", 'function'],
        correct: "D",
        isAnswer: false
    },
    {
        question: "What type are functions in javaScriprt? ",
        answers: ["array", "object", "boolean", "number"],
        correct: "B",
        isAnswer: false
    },
    {
        question: "How many types of functions are there in javaScripts? ",
        answers: [2, 3, 5, 9],
        correct: "B",
        isAnswer: false
    },
    {
        question: "What language  is the browser running in? ",
        answers: ["c++", "java", "javaScriprt", "C#"],
        correct: "C",
        isAnswer: false
    },
    {
        question: "What language  is the browser running in? ",
        answers: ["c++", "java", "javaScriprt", "C#"],
        correct: "D",
        isAnswer: false
    }
]

let timer
let i = 0;
let count = 0;

function ques() {
    let btns = document.querySelector('.btns');
    questions.forEach(item => {
        const button = document.createElement('button');
        button.classList.add('arrBtn')
        btns.append(button);
    });
}


function start() {
    let start = document.querySelector('.start')
    start.remove()
    render(0);
    ques()
    clock()

}


function send(tarberak) {
    let a = questions[i];

    let allBtn = document.querySelectorAll(".arrBtn")
    let currentbtn = allBtn[i]
    if (tarberak === a.correct) {
        count = count + 1;
        currentbtn.style.background = "green"

    } else {
        currentbtn.style.background = "red"
    }
    a.isAnswer = true
    if (isFinishedAnswers() || (minut == 0 && second == 0)) {
        const t = document.querySelector('.count');

        let c = document.getElementById('clock')
        c.remove()
        t.innerText = `You answered ${count} out of ${questions.length} questions correctly`;

    }
    i = i + 1;
    render(i);

}

function isFinishedAnswers() {
    let b = true
    for (let i = 0; i < questions.length; i++) {
        if (!questions[i].isAnswer) {
            b = false
            break
        }

    }
    console.log(b)
    return b
}


function prev() {
    i = i - 1;
    render(i);
}


function next() {
    i = i + 1;
    render(i);
}
let second = 60
let minut = questions.length - 1


function clock() {
    document.getElementById('clock').innerHTML = `${minut}:${second}`
    if (second == 0) {
        minut = minut - 1
        second = 60
    }
    second--
    timer = setTimeout(clock, 1000);
}

function render(i) {
    let a = questions[i];

    const wrapper = document.querySelector('.wraper');
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }

    const model = `
    <div class="quation">${a.question}</div>
    <div class="buttons">
        <div>
            <button class="btn" onclick="send('A')">A. ${a.answers[0]}</button>
            <button class="btn" onclick="send('B')">B. ${a.answers[1]}</button>
        </div>
        <div>
            <button class="btn" onclick="send('C')">C. ${a.answers[2]}</button>
            <button class="btn" onclick="send('D')">D. ${a.answers[3]}</button>
        </div>
    </div>
    <div class="prevNext">
    <button class="btn1" onclick="prev()"><i class="fas fa-arrow-left"></i></button>
    <button class="btn1" onclick="next()"><i class="fas fa-arrow-right"></i></button> 
     </div>

   `;

    const e = document.createElement("div");
    e.innerHTML = model;
    wrapper.append(e);

    if (a.isAnswer) {
        let btns = document.querySelectorAll(".btn")
        btns.forEach(btn => {
            btn.style.opacity = 0.6
            btn.style.cursor = "not-allowed"
        })
    }
}



