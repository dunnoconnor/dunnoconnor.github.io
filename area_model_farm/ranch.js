//declare page elements
const gameWindow = document.querySelector(".game-window");
const garden = document.querySelector(".garden");

//declare prompts
const instructions = document.querySelector("#instructions");
const displays = document.querySelector("#displays");
const startButton = document.querySelector("#start-button");

//consts to display answers
const aDiv = document.querySelector("#a-div");
const areaDiv = document.querySelector("#area-div");
const areaInput = document.querySelector("#area-input");

//declare inputs and displays to iterate over/ clear later
const allInputs = document.querySelectorAll(".input");
const allDisplays = document.querySelectorAll(".display");

//rows to store pasture divs
const row0 = document.querySelector("#ranch-row-0");
const row1 = document.querySelector("#ranch-row-1");
const row2 = document.querySelector("#ranch-row-2");

//declare number interface to propagate button events 
const numbersMenu = document.querySelector("#numbers-menu");

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

//array of input ids so they can be 
const prompts = ["a","b","c","d","area"];

//declare game object to store key data
const game = {
    rowTens: 0,
    rowOnes: 0,
    columnTens: 0,
    columnOnes: 0,
    answers: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        area: 0
    },
    points: 0,
    round: 1,
    highScore: 0
};

//event listener for start button and submit buttons
numbersMenu.addEventListener("click", function(event) {
    //start  button
    if(event.target.id=="start-button"){
        event.preventDefault();
        displays.classList.toggle('hidden');
        startButton.classList.toggle('hidden');
        game.points = 0;
        game.round = 1;
        instructions.innerHTML = "Add the area of the four sections together to get the total area."
        newRound();
    } else if (event.target.classList.contains('check-button')) {
        //event propagation for four partial area buttons
        let targetID = event.target.id;
        let targetInput = document.querySelector(`#${targetID}-input`);
        let targetAnswer = parseInt(targetInput.value);
        let targetDiv = document.querySelector(`#${targetID}-div`);
        targetDiv.classList.toggle('hidden');

        //check whether partial area answer is correct
        partialArea(targetID,targetAnswer);
        let nextID = prompts[(prompts.indexOf(targetID))+1]
        let nextDiv = document.querySelector(`#${nextID}-div`);
        nextDiv.classList.toggle('hidden');
    } else if (event.target.id=="submit"){
        //check total area answer
        areaDiv.classList.toggle('hidden');
        let areaAnswer = parseInt(areaInput.value);
        checkArea(areaAnswer);
    }
});

//update points and display for partial areas
function partialArea(p,answer){
    let targetDisplay = document.querySelector(`#${p}-display`);
    targetDisplay.innerHTML = game.answers[`${p}`]
    if (answer==game.answers[`${p}`]){
        targetDisplay.classList = ('correct');
        points(true);
    } else {
        points(false);
        targetDisplay.classList = ('incorrect');
    }
}

//update points and display for partial areas
function checkArea(a){
    if (a==(game.answers.area)){
        points(true);
    } else {
        points(false);
    }  
    //advance to next round or end the game
    game.round++;
    levelDisplay.innerHTML=(game.round);
    if(game.round<10){
        newRound();
    } else {
        endGame();
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
    row0.innerHTML = "";
    row1.innerHTML = "";
    row2.innerHTML = "";

    //generate tens place and ones place for numbers to be multiplied
    game.rowTens = (Math.ceil(Math.random()*5))*10;
    game.rowOnes = (Math.ceil(Math.random()*8))+1;
    game.columnTens = (Math.ceil(Math.random()*5))*10;
    game.columnOnes = (Math.ceil(Math.random()*8))+1;

    //stores the correct answers to this round's prompts
    game.answers.a = game.rowTens*game.columnTens;
    game.answers.b = game.rowTens*game.columnOnes;
    game.answers.c = game.rowOnes*game.columnTens;
    game.answers.d = game.rowOnes*game.columnOnes;
    game.answers.area = game.answers.a + game.answers.b + game.answers.c + game.answers.d;
    
    //clears all inputs
    for (let i of allInputs){
        i.value = "";
    }
    for (let i of allDisplays){
        i.innerHTML = "";
    }

    //populate garden with pastures
    generatePastures();

    //show first input
    aDiv.classList.toggle('hidden');
}

//Populate the ranch with pastures and labels
function generatePastures(){
    //conditional label sizer for desktop and mobile
    let vw;
    if (window.screen.width < 500) {
        vw = 10;
     }
     else {
        vw = 6;
     }
    console.log(vw);

    //corner divs to space labels
    let corner = document.createElement('div');
    corner.classList.add("pasture-label");
    corner.id = ("corner");
    corner.style.width = `${vw}vw`;
    corner.style.height = `${vw}vw`;
    row0.appendChild(corner);

    //label for tens place of column
    let columnTensLabel = document.createElement('div');
    columnTensLabel.classList.add("pasture-label");
    columnTensLabel.id = ("column-tens-label");
    columnTensLabel.innerHTML = `<p>${game.columnTens}</p>`;
    columnTensLabel.style.width = `${game.columnTens}vw`;
    columnTensLabel.style.height = `${vw}vw`;
    columnTensLabel.style.color = "blue";
    row0.appendChild(columnTensLabel);
    
    //label for ones place of column
    let columnOnesLabel = document.createElement('div');
    columnOnesLabel.classList.add("pasture-label");
    columnOnesLabel.id = ("column-ones-label");
    columnOnesLabel.innerHTML = `<p>${game.columnOnes}</p>`;
    columnOnesLabel.style.width = `${game.columnOnes}vw`;
    columnOnesLabel.style.height = `${vw}vw`;
    columnOnesLabel.style.color = "red";
    row0.appendChild(columnOnesLabel);

    //label for tens place of row
    let rowTensLabel = document.createElement('div');
    rowTensLabel.classList.add("pasture-label");
    rowTensLabel.id = ("row-tens-label");
    rowTensLabel.innerHTML = `<p>${game.rowTens}</p>`;
    rowTensLabel.style.width = `${vw}vw`;
    rowTensLabel.style.height = `${game.rowTens}vw`;
    rowTensLabel.style.color = "blue";
    row1.appendChild(rowTensLabel);
    
    //tens by tens
    let pastureA = document.createElement('div');
    pastureA.classList.add("pasture");
    pastureA.id = ("pasture-a");
    pastureA.innerHTML = "<p>A</p>";
    pastureA.style.width = `${game.columnTens}vw`;
    pastureA.style.height = `${game.rowTens}vw`;
    pastureA.style.backgroundColor = "blue";
    row1.appendChild(pastureA);
    
    //row tens by column ones
    let pastureB = document.createElement('div');
    pastureB.classList.add("pasture");
    pastureB.id = ("pasture-b");
    pastureB.innerHTML = "<p>B</p>";
    pastureB.style.width = `${game.columnOnes}vw`;
    pastureB.style.height = `${game.rowTens}vw`;
    pastureB.style.backgroundColor = "purple";
    row1.appendChild(pastureB);
    
    //label for ones place of row
    let rowOnesLabel = document.createElement('div');
    rowOnesLabel.classList.add("pasture-label");
    rowOnesLabel.id = ("row-ones-label");
    rowOnesLabel.innerHTML = `<p>${game.rowOnes}</p>`;
    rowOnesLabel.style.width = `${vw}vw`;
    rowOnesLabel.style.height = `${game.rowOnes}vw`;
    rowOnesLabel.style.color = "red";
    row2.appendChild(rowOnesLabel);
    
    //row ones by column tens
    let pastureC = document.createElement('div');
    pastureC.classList.add("pasture");
    pastureC.id = ("pasture-c");
    pastureC.innerHTML = "<p>C</p>"
    pastureC.style.width = `${game.columnTens}vw`;
    pastureC.style.height = `${game.rowOnes}vw`;
    pastureC.style.backgroundColor = "purple";
    row2.appendChild(pastureC);
    
    //ones place by ones place
    let pastureD = document.createElement('div');
    pastureD.classList.add("pasture");
    pastureD.id = ("pasture-d");
    pastureD.innerHTML = "<p>D</p>"
    pastureD.style.width = `${game.columnOnes}vw`;
    pastureD.style.height = `${game.rowOnes}vw`;
    pastureD.style.backgroundColor = "red";
    row2.appendChild(pastureD);
    console.log(game);
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

//play positive or negative sound effect
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