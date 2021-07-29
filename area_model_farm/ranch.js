const gameWindow = document.querySelector(".game-window");
const garden = document.querySelector(".garden");

const instructions = document.querySelector("#instructions");
const startButton = document.querySelector("#start-button");

const rowLabels = document.querySelector("#row-labels");
const columnLabels = document.querySelector("#column-labels");

const row1 = document.querySelector("#ranch-row-1");
const row2 = document.querySelector("#ranch-row-2");

const columnTensLabel = document.querySelector("#column-tens-label");
const columnOnesLabel = document.querySelector("#column-ones-label");
const rowTensLabel = document.querySelector("#row-tens-label");
const rowOnesLabel = document.querySelector("#row-ones-label");

const numbersMenu = document.querySelector("#numbers-menu");

const areaInput = document.querySelector("#area-input");

const levelDisplay = document.querySelector("#level-display");
const pointsDisplay = document.querySelector("#points-display");
const highScoreDisplay = document.querySelector("#high-score-display");

const game = {
    rowTens: 0,
    rowOnes: 0,
    columnTens: 0,
    columnsOnes: 0,
    points: 0,
    round: 1,
    highScore: 0
};

numbersMenu.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.id == ('start-button')) {
        game.points = 0;
        game.round = 1;
        newRound();
    } else if (event.target.classList.contains('check-button')){
        let section = event.target.id
        checkPartialArea(section);
    }
  });


// //check the player's area answer
// submitButton.addEventListener("click", function(event){
//     event.preventDefault();
//     area.classList.toggle('hidden');
//     let areaAnswer = parseInt(areaInput.value);
//     checkArea(areaAnswer);
// });

function checkRows(r){
    if (r==game.rows){
        points(true);
    } else {
        points(false);
    }
}

// function checkArea(a){
//     if (a==(game.rows*game.columns)){
//         points(true);
//     } else {
//         points(false);
//     }
    
//     //advance to next round or end the game
//     game.round++;
//     levelDisplay.innerHTML=(game.round);
//     if(game.round<10){
//         newRound();
//     } else {
//         endGame();
//     }
// }

//Begin a new round
function newRound(){
    //clear garden and inputs
    row1.innerHTML = "";
    row2.innerHTML = "";
    areaInput.value = "";

    //generate new row count and column count between 1 and 9
    game.rowTens = (Math.ceil(Math.random()*9))*10;
    game.rowOnes = (Math.ceil(Math.random()*9));
    game.columnTens = (Math.ceil(Math.random()*9))*10;
    game.columnOnes = (Math.ceil(Math.random()*9));

    //populate garden with garden boxes
    generatePastures();
}

//Populate the ranch with pastures
function generatePastures(){

        columnTensLabel.innerHTML= game.columnTens;
        //columnTensLabel.width = `${game.columnTens*5}px`;
        columnTensLabel.style.color = "blue";

        columnOnesLabel.innerHTML= game.columnOnes;
        //columnTensLabel.width = `${game.columnOnes*5}px`;
        columnOnesLabel.style.color = "red";

        rowTensLabel.innerHTML= game.rowTens;
        //rowTensLabel.height = `${game.rowTens*5}px`;
        rowTensLabel.style.color = "blue";

        rowOnesLabel.innerHTML= game.rowOnes;
        //rowOnesLabel.height = `${game.rowOnes*5}px`;
        rowOnesLabel.style.color = "red";

        let pastureA = document.createElement('div');
        pastureA.classList.add("pasture");
        pastureA.id = ("pasture-a");
        pastureA.style.width = `${game.columnTens*5}px`;
        pastureA.style.height = `${game.rowTens*5}px`;
        pastureA.style.backgroundColor = "blue";
        row1.appendChild(pastureA);

        let pastureB = document.createElement('div');
        pastureB.classList.add("pasture");
        pastureB.id = ("pasture-b");
        pastureB.style.width = `${game.columnOnes*5}px`;
        pastureB.style.height = `${game.rowTens*5}px`;
        pastureB.style.backgroundColor = "purple";
        row1.appendChild(pastureB);

        let pastureC = document.createElement('div');
        pastureC.classList.add("pasture");
        pastureC.id = ("pasture-c");
        pastureC.style.width = `${game.columnTens*5}px`;
        pastureC.style.height = `${game.rowOnes*5}px`;
        pastureC.style.backgroundColor = "purple";
        row2.appendChild(pastureC);

        let pastureD = document.createElement('div');
        pastureD.classList.add("pasture");
        pastureD.id = ("pasture-d");
        pastureD.style.width = `${game.columnOnes*5}px`;
        pastureD.style.height = `${game.rowOnes*5}px`;
        pastureD.style.backgroundColor = "red";
        row2.appendChild(pastureD);
}

//Update points display
function points(gain){
    if (gain){
        game.points+=10;
        pointsDisplay.classList = ("correct");
    } else {
        game.points-=5;
        pointsDisplay.classList = ("incorrect");
    }
    pointsDisplay.innerHTML = game.points;
}

//Resolve the end of the game
function endGame(){
    if (game.highScore<game.points){
        game.highScore = game.points;
    }
    highScoreDisplay.innerText = game.highScore;
    pointsDisplay.classList = ("");
    instructions.innerHTML = "Click Start to Play Again";
    startButton.classList.toggle('hidden');
  }