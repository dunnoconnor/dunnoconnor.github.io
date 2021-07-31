//declare page elements
const gameWindow = document.querySelector(".game-window");
const garden = document.querySelector(".garden");

//declare prompts
const instructions = document.querySelector("#instructions");
const startButton = document.querySelector("#start-button");

//consts to display answers
const rowDisplay = document.querySelector("#row-display");
const columnDisplay = document.querySelector("#column-display");
const displays = document.querySelector("#displays");

//declare row/column keys
const rowLabel = document.querySelector("#row-ruler-label");
const columnLabel = document.querySelector("#column-ruler-label");

//declare value input/submit divs
const rows = document.querySelector("#rows");
const columns = document.querySelector("#columns");
const area = document.querySelector("#area");

//declare value inputs
const rowsInput = document.querySelector("#rows-input");
const columnsInput = document.querySelector("#columns-input");
const areaInput = document.querySelector("#area-input");

//declare value submit buttons
const rowsButton = document.querySelector("#rows-button");
const columnsButton = document.querySelector("#columns-button");
const submitButton = document.querySelector("#submit-button");

//declare text displays
const levelDisplay = document.querySelector("#level-display");
const pointsDisplay = document.querySelector("#points-display");
const highScoreDisplay = document.querySelector("#high-score-display");

//declare positive sound effects
const correctA = new Audio("./assets/sounds/a_Guitar.wav");
const correctB = new Audio("./assets/sounds/b_Guitar.wav");
const correctC = new Audio("./assets/sounds/c_Guitar.wav");
const correctD = new Audio("./assets/sounds/d_Guitar.wav");

//declare negative sound effects
const incorrectF = new Audio("./assets/sounds/f_Bass.wav");
const incorrectG = new Audio("./assets/sounds/g_Bass.wav");

//sort sound effects into arrays
const hits = [correctA,correctB,correctC,correctD];
const misses = [incorrectF, incorrectG];

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

//declare game object to store key data
const game = {
    rows: 0,
    columns: 0,
    points: 0,
    round: 1,
    highScore: 0
};

//Start a new round when Start button is clicked
startButton.addEventListener("click", function(event){
    event.preventDefault();
    game.points = 0;
    game.round = 1;
    displays.classList.toggle('hidden');
    startButton.classList.toggle('hidden');
    newRound();
});

//check the player's row answer
rowsButton.addEventListener("click", function(event){
    event.preventDefault();
    rows.classList.toggle('hidden');
    rowLabel.classList.toggle('hidden');
    let rowAnswer = parseInt(rowsInput.value);
    checkRows(rowAnswer);
});

//check the player's column answer
columnsButton.addEventListener("click", function(event){
    event.preventDefault();
    columns.classList.toggle('hidden');
    columnLabel.classList.toggle('hidden');
    let columnAnswer = parseInt(columnsInput.value);
    checkColumns(columnAnswer);
});

//check the player's area answer
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    area.classList.toggle('hidden');
    let areaAnswer = parseInt(areaInput.value);
    checkArea(areaAnswer);
});

//check if the player's row count is correct
function checkRows(r){
    if (r==game.rows){
        points(true);
        rowDisplay.classList = ('correct');
    } else {
        points(false);
        rowDisplay.classList = ('incorrect');
    }
    columns.classList.toggle('hidden');
    columnLabel.classList.toggle('hidden');
    rowDisplay.innerHTML = `${game.rows}`
    instructions.innerHTML = "Count the number of Columns";
}

//check if the player's column count is correct
function checkColumns(c){
    if (c==game.columns){
        points(true);
        columnDisplay.classList = ('correct');
    } else {
        points(false);
        columnDisplay.classList = ('incorrect');
    }
    area.classList.toggle('hidden');
    columnDisplay.innerHTML = `${game.columns}`
    instructions.innerHTML = "Area = Rows * Columns";
}

//check if the player's area calculation is correct
function checkArea(a){
    if (a==(game.rows*game.columns)){
        points(true);
    } else {
        points(false);
    }
    
    //hide previous counts
    rowDisplay.classList.toggle('hidden');
    columnDisplay.classList.toggle('hidden');

    //advance to next round or end the game
    game.round++;
    levelDisplay.innerHTML=(game.round);
    if(game.round<10){
        newRound();
    } else {
        endGame();
    }
}

//Begin a new round
function newRound(){
    //clear garden and inputs
    garden.innerHTML = "";
    rowsInput.value = "";
    columnsInput.value = "";
    areaInput.value = "";

    //generate new row count and column count between 1 and 9
    game.rows = (Math.ceil(Math.random()*9));
    game.columns = (Math.ceil(Math.random()*9));

    //populate garden with garden boxes
    generateBoxes();

    //Show Row Inputs
    instructions.innerHTML = "Count the number of Rows";
    rows.classList.toggle('hidden');
    rowLabel.classList.toggle('hidden');
}

//Populate the garden with boxes
function generateBoxes(){
    for(let i=0;i<game.rows;i++){

        let row = document.createElement('div');
        row.classList.add("row");
        garden.appendChild(row);

        for(let j=0;j<game.columns;j++){
        let newBox = document.createElement('div');
        newBox.classList.add("box");
        row.appendChild(newBox);

        let plantImg = document.createElement('img');
        plantImg.classList.add("plant-img");
        plantImg.src = "./assets/plant.jpeg"
        newBox.appendChild(plantImg);
        }
    }
}

//Update points display
function points(gain){
    if (gain){
        playSound(true);
        game.points+=10;
        pointsDisplay.classList = ("correct");
    } else {
        playSound(false);
        game.points-=5;
        pointsDisplay.classList = ("incorrect");
    }
    pointsDisplay.innerHTML = game.points;
}

//play the relevant sound for correct and incorrect answers
function playSound(hit){
    let thisSound, rand;
    if (hit) {
        rand = Math.floor(Math.random()*hits.length);
        thisSound = hits[rand];
    } else {
        rand = Math.floor(Math.random()*misses.length);
        thisSound = misses[rand];
    }
    thisSound.play();
}

//Resolve the end of the game
function endGame(){
    if (game.highScore<game.points){
        game.highScore = game.points;

    }
    highScoreDisplay.innerText = game.highScore;
    pointsDisplay.innerHTML = 0;
    pointsDisplay.classList = ("");
    instructions.innerHTML = "Click Start to Play Again";
    startButton.classList.toggle('hidden');
    displays.classList.toggle('hidden');
  }