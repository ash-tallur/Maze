var maze1,maze2,maze3,maze4;
var character,charImg1,charImg2;
var door,doorImg1,doorImg2;
var key,keyImage;
var gameState;
var PLAY = 1;
var END = 0;

function preload(){

    doorImg1 = loadImage("images/door1.PNG");
    doorImg2 = loadImage("images/door2.PNG");

    keyImage = loadImage("images/key.png");

    charImg1 = loadImage("images/boy8.PNG")

    charImg2  = loadAnimation("images/boy1.PNG","images/boy2.PNG","images/boy3.PNG","images/boy4.PNG","images/boy5.PNG","images/boy6.PNG","images/boy7.PNG","images/boy8.PNG")
}

function setup(){

    createCanvas(displayWidth-40,displayHeight-40); 
    
}

function draw(){
    
    background('white');

    if(gameState === undefined){
        
        welcomePage();

        if(keyDown('S') && gameState === undefined){

            gameState = PLAY;

        }
    }

    if(gameState === PLAY){

        background('white');
        level1Design();
        console.log("check1")
        key.rotation +=5;
        console.log("check2")
        if(keyDown(UP_ARROW)){
      //      character.addAnimation("boy walking",charImg2);
            character. y = character.y - 5;
            console.log("check3")
        }
        else if(keyDown(DOWN_ARROW)){
      //      character.addAnimation("boy walking",charImg2);
            character. y = character.y + 5;
        }
        else if(keyDown(LEFT_ARROW)){
       //     character.addAnimation("boy walking",charImg2);
            character.x = character.x - 5;
            console.log("check4")
        }
        else if(keyDown(RIGHT_ARROW)){
      //      character.addAnimation("boy walking",charImg2);
            character.x = character.x + 5;
        }
      //  else{
      //      character.addImage("boy",charImg1);

     //   }
     console.log("check5")
    }

    drawSprites();

}

function welcomePage(){

    background('lightblue');
        textSize(30)
        fill('black')
        text ('Welcome to the Maze Game',displayWidth/2-150,displayHeight/4);
        textSize(20)
        text('Press S to start the Game',displayWidth/2-80,displayHeight/3);
}

function level1Design(){

    door = createSprite(displayWidth/2+600,displayHeight/10,30,30);
    door.addImage(doorImg1);
    door.scale = 0.5;

    character = createSprite(displayWidth/2-700,displayHeight/2+200,50,50);
   // character.addImage("boy",charImg1);
   // character.scale = 0.5

    maze1 = createSprite(displayWidth/2,displayHeight/2,6,600);
    maze2 = createSprite(displayWidth/2-100,displayHeight/4,500,6);
    maze3 = createSprite(displayWidth/2+100,displayHeight/2-100,500,6);
    maze4 = createSprite(displayWidth/2,displayHeight/2-100+300,500,6);


    key = createSprite(displayWidth/2+40,displayHeight/2-60,25,25);
    key.addImage(keyImage);
    key.scale = 0.2;
    key.rotation = 180;
    key.rotateToDirection = true;
    
}