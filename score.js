// Iteration 5: Store the player score and display it on the game over screen

const scoreboard=document.getElementById("score-board")

const btn=document.getElementById('play-again-button')
btn.addEventListener("click",()=>{
    window.location.href="game.html"
    sessionStorage.removeItem("score")
})
scoreboard.innerText=sessionStorage.getItem("score")|| 0;