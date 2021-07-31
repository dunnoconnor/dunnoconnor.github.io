//declare music const
const music = new Audio("./assets/sounds/garden.mp3");

//when the window loads, set music volume and play
window.onload = function() {
    music.volume = 0.05;
    music.play();
};

//when the song ends, play again
music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
