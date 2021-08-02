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

//declare array of plant images
const plants = ["./assets/plant1.png","./assets/plant2.png","./assets/plant3.png","./assets/plant4.png"];

//declare array of dirt images
const dirts = ["url(./assets/dirt1.png)","url(./assets/dirt2.png)","url(./assets/dirt3.png)"];

//declare sound effects
const correct = new Audio("./assets/sounds/b_Guitar.wav");
const incorrect = new Audio("./assets/sounds/g_Bass.wav");

//declare music const
const music = new Audio("./assets/sounds/garden.mp3");

// when the window loads, set music volume and play
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
    if(game.round<5){
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
    game.rows = (Math.ceil(Math.random()*8))+1;
    game.columns = (Math.ceil(Math.random()*8))+1;

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

        let randDirt = Math.floor(Math.random()*dirts.length);
        let randPlant = Math.floor(Math.random()*plants.length);

        for(let j=0;j<game.columns;j++){
        let newBox = document.createElement('div');
        newBox.classList.add("box");
        newBox.style.backgroundImage = dirts[randDirt];
        row.appendChild(newBox);

        let plantImg = document.createElement('img');
        plantImg.classList.add("plant-img");
        plantImg.src = plants[randPlant];
        newBox.appendChild(plantImg);
        }
    }
}

//Update points display and play sound effect
function points(gain){
    if (gain){
        correct.play();
        game.points+=10;
        pointsDisplay.classList = ("correct");
        if (game.highScore<game.points){
            game.highScore = game.points;
            highScoreDisplay.innerText = game.highScore;
        }
    } else {
        incorrect.play();
        game.points-=5;
        pointsDisplay.classList = ("incorrect");
    }
    pointsDisplay.innerHTML = game.points;
}

//Resolve the end of the game
function endGame(){
    pointsDisplay.innerHTML = 0;
    pointsDisplay.classList = ("");
    instructions.innerHTML = "Click Start to Play Again";
    startButton.classList.toggle('hidden');
    displays.classList.toggle('hidden');
  }

  muteButton.addEventListener("click", function(event){
    music.muted = !music.muted;
});