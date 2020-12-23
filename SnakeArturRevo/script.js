const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');



const snakeHead = new Image();
 snakeHead.src = "Artur.jpg";
const vodka = new Image();
vodka.src = "vodka.jpg";
const img = document.getElementById("lamp");
class SnakePart{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
const up = document.querySelector(".up"),
    bottom = document.querySelector(".bottom"),
    left = document.querySelector(".left"),
    right = document.querySelector(".right");

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 0;

let appleX = 5;
let appleY = 5;

let xVelocity=0;
let yVelocity=0;

let score = 0;

//game loop
function drawGame(){
    changeSnakePosition();
    let result = isGameOver();
    if(result){
        return;
    }

    clearScreen();

    checkAppleCollision();
    drawApple();
    drawSnake();

    drawScore();

    if(score > 5){
        speed = 9;
    }
    if(score > 10){
        speed = 11;
    }

    setTimeout(drawGame, 1000/ speed);
}

function isGameOver(){
    let gameOver = false;

    if(yVelocity ===0 && xVelocity ===0){
        return false;
    }

    //walls
    if(headX < 0 ){
        gameOver = true;
    }
    else if(headX === tileCount){
        gameOver = true
    }
    else if( headY < 0){
        gameOver = true;
    }
    else if(headY === tileCount){
        gameOver = true
    }

    for(let i =0; i < snakeParts.length; i++){
        let part = snakeParts[i];
        if(part.x === headX && part.y === headY){
            gameOver = true;
            break;
        }
    }


    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "50px Verdana";

        if (gameOver) {
            ctx.fillStyle = "white";
            ctx.font = "50px Verdana";

            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop("0", " magenta");
            gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "red");
            // Fill with gradient
            ctx.fillStyle = gradient;

            ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
        }


        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    }

    return gameOver;
}

function drawScore(){
    ctx.fillStyle = "white";
    ctx.font = "10px Verdana"
    ctx.fillText("Score " + score, canvas.width-50, 10);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake(){
    let img1 = document.getElementById("lamp1")
    let pat = ctx.createPattern(img1, "repeat");
    ctx.fillStyle = pat;
    for(let i =0; i < snakeParts.length; i++){
        let part = snakeParts[i];
        ctx.drawImage(img1, part.x * tileCount, part.y * tileCount, tileSize, tileSize);

    }

    snakeParts.push(new SnakePart(headX, headY)); //put an item at the end of the list next to the head
    while (snakeParts.length > tailLength){
        snakeParts.shift(); // remove the furthet item from the snake parts if have more than our tail size.
    }
     ctx.drawImage(snakeHead, headX * tileCount, headY* tileCount, tileSize,tileSize);


}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawApple(){
    if(tailLength < 4){
        ctx.drawImage(img, appleX* tileCount, appleY* tileCount, tileSize, tileSize);
    } else{
        ctx.drawImage(vodka, appleX* tileCount, appleY* tileCount, tileSize, tileSize);
    }

}

function checkAppleCollision(){
    if(appleX === headX && appleY === headY){
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
    }
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event){
    //up
    if(event.keyCode == 38){
        if(yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
    }

    //down


    if(event.keyCode == 40){
        if(yVelocity == -1)
            return;
        yVelocity = 1;
        xVelocity = 0;
    }



    if(event.keyCode == 37){
        if(xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
    }

    //right
    if(event.keyCode == 39){
        if(xVelocity == -1)
            return;
        yVelocity = 0;
        xVelocity = 1;
    }
}


drawGame();
// const c = document.getElementById("myCanvas");
// const ctx = c.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(20, 20, 150, 100);
//
