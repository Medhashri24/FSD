const quiz=[
    {
        question:"What is the color of the sky?",
        options:['Blue','Red','Pink','Green'],
        answer:'Blue'
    },
    {
        question:"What Comes After Tuesday?",
        options:['Monday','Wednesday','friday','Saturday'],
        answer:'Wednesday'
    }
];

let index=0;
let score=0;
let time=30;

const question=document.getElementById("question");
const options=document.getElementById('options');
const result=document.getElementById('result')

function loadQuestion() {
    question.innerHTML=quiz[index].question;
    options.innerHTML="";

    quiz[index].options.forEach(option=>{
        options.innerHTML += `<input type="radio" name="ans" value="${option}">${option}<br>`;
    });

}

function nextQuestion(){
    const selected=document.querySelector("input[name='ans']:checked");

    if(selected && selected.value == quiz[index].answer){
        score++
    }
    index++;

    if(index<quiz.length){
        loadQuestion();
    }
    else{
        clearInterval(timer);
        result.innerHTML= "your Score:" + score + "/" + quiz.length;
        question.innerHTML="";
        options.innerHTML="";
    }

}
loadQuestion();

let timer = setInterval(function () {
    time--;

    document.getElementById("timer").innerHTML = "Time: " + time;

    if (time <= 0) {
        clearInterval(timer);
        result.innerHTML = "Time Over! Score: " + score + "/" + quiz.length;
        question.innerHTML = "";
        options.innerHTML = "";
    }
}, 1000);