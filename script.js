//area math 
const area = document.querySelector(".game-wrapper")
const heighta = area.clientHeight
const widtha = area.clientWidth


//button math 
const button = document.querySelector(".target")
const heightb = button.clientHeight
const widthb = button.clientWidth


//math 
const maxY = heighta-heightb
const maxX = widtha-widthb
//score
const scoreElement = document.getElementById("score")
let score = 0;
function Addscore (){
    score = score+1
    scoreElement.textContent = score;
}


//sound 
const sound = new Audio('beep.mp3');
//timer 
const timeElement = document.getElementById("timer")
function startTimer() {
    let timeLeft = 10
    const timer = setInterval(() => {
        timeLeft = timeLeft-1
        timeElement.textContent = timeLeft
        if (timeLeft <= 0) {
            clearInterval(timer);
            Reset()
        }
    }, 1000); 
}
//reset
function Reset (){
    alert("Your score is: " + score);
    score = 0;
    timeLeft = 10
    timeElement.textContent = 10
    startTimer()
}



//randomizer
startTimer()
button.addEventListener("click",() => {
    const x = Math.floor(Math.random() * maxX)
    const y = Math.floor(Math.random() * maxY)
    button.style.left = x + "px"
    button.style.top = y + "px"
    Addscore()
    sound.play();
})

