const gameWindow = document.querySelector(".game-window");
const canvas = document.querySelector(".canvas");
const generateButton = document.querySelector("#generate-button");

const num1Display = document.querySelector("#num1-display");
const num2Display = document.querySelector("#num2-display");

const areaInput = document.querySelector("#area-input");
const submitButton = document.querySelector("#submit-button");
const pointsDisplay = document.querySelector("#points-display");
const highScoreDisplay = document.querySelector("#high-score-display");

let start = Date.now();

const game = {
    num1: 0,
    num2: 0,
    points: 0,
    round: 1,
    highScore: 0
};


//Alternate Layout to allow number input
// let num1Input = document.querySelector("#num1-input");
// let num2Input = document.querySelector("#num2-input");

generateButton.addEventListener("click", function(event){
    event.preventDefault();
    game.points = 0;
    game.round = 1;
    generateButton.classList.toggle('hidden');
    submitButton.classList.toggle('hidden');
    newRound();
});

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let answer = parseInt(areaInput.value);
    checkAnswer(answer);
});

function checkAnswer(a){
    if (a==(game.num1*game.num2)){
        game.points+=10;
    } else {
        game.points-=5;
    }

    game.round++
    if(game.round<10){
        newRound();
    } else {
        endGame();
    }
}

function newRound(){
    canvas.innerHTML = "";
    areaInput.value = "";
    game.num1 = (Math.ceil(Math.random()*9));
    game.num2 = (Math.ceil(Math.random()*9));
    generateBoxes();
    updateText();
}

function generateBoxes(){
    for(let i=0;i<game.num1;i++){

        let row = document.createElement('div');
        row.classList.add("row");
        canvas.appendChild(row);

        for(let j=0;j<game.num2;j++){
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

function updateText(){
    num1Display.innerHTML = game.num1;
    num2Display.innerHTML = game.num2;
    pointsDisplay.innerHTML = game.points;
}

function endGame(){
    if (game.highScore<game.points){
        game.highScore = game.points;

    }
    pointsDisplay.innerHTML = game.points;
    highScoreDisplay.innerText = game.highScore;
    generateButton.classList.toggle('hidden');
    submitButton.classList.toggle('hidden');
  }