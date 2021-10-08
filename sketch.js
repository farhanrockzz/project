var path,boy;
var coinImg,crowgroup;
var ConeImg,obstacleImg;

var END =0;
var PLAY =1;
var gameState = PLAY;

var gameOver;
var restart;
var distance = 0;



function preload(){
    pathImg = loadAnimation("background.jpg");
    boy = loadAnimation("boyrunner gif.gif");
    crowgroup =loadAnimation("crow group gif.gif");
    coinImg = loadImage("coin pic.jpg");
    ConeImg = loadImage("traffic cone.jpg")
    obstacleImg = loadImage("wood pic.jpg");

}

function setup() {

    createCanvas(1200,400);
    path = createSprite(8,400,400,400);
    path.addAnimation(pathImg);
    
    
}

function draw(){
 
}