.game-container {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #000;
    overflow: hidden;
}

.player {
    position: absolute;
    top: 180px;
    left: 180px;
    width: 40px;
    height: 40px;
    background-color: red;
}
document.addEventListener("DOMContentLoaded", function() {
    const player = document.querySelector(".player");
    
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp") {
            player.style.top = parseInt(player.style.top) - 10 + "px";
        } else if (event.key === "ArrowDown") {
            player.style.top = parseInt(player.style.top) + 10 + "px";
        } else if (event.key === "ArrowLeft") {
            player.style.left = parseInt(player.style.left) - 10 + "px";
        } else if (event.key === "ArrowRight") {
            player.style.left = parseInt(player.style.left) + 10 + "px";
        }
    });
});