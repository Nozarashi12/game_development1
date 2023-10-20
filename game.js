// Iteration 2: Generate 2 random number and display it on the screen
const num1 = Math.floor(Math.random()*100);
const num2 = Math.floor(Math.random()*100);

const contnum1 = document.getElementById("number1");
const contnum2 = document.getElementById("number2");

contnum1.innerText= num1;
contnum2.innerText= num2;

score=parseInt(sessionStorage.getItem("score")) || 0;
// Iteration 3: Make the options button functional
const btns = document.getElementById("buttons");



btns.addEventListener("click",(event)=>{
    if(num1>num2 && event.target.alt =="greater-than-button"){
        console.log("correct");
        score+=1
        sessionStorage.setItem("score",score)
        window.location.reload()
        
    }
    else if(num1 ==num2 && event.target.id == "equal-to"){
        console.log("correct");
        score+=1
        sessionStorage.setItem("score",score)
        window.location.reload()
        
    
    }
    else if(num1 < num2 && event.target.id == "lesser-than"){
        console.log("correct");
        score+=1
        sessionStorage.setItem("score",score)
        window.location.reload()
    
    }
    else{
       window.location.href = "gameover.html"
    }
});
// Iteration 4: Build a timer for the game
let timer = document.getElementById("timer");

let time = 0;
let timerId;

function startTimer() {
  time = 5;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time === 0) {
      clearInterval(timerId); 
      location.href = "gameover.html";
    }
    timer.innerHTML = time;
  }, 1000);
}

function resetTime() {
  clearInterval(timerId);
  startTimer();
}
startTimer();

