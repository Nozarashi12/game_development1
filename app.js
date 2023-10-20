// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const ply = document.getElementById("play-button")

ply.addEventListener("click", ()=>{
    window.location.href = "game.html"
})