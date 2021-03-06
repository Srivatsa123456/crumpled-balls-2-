const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    Paper1 = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    leftSide = new Dustbin(902,505,10,120);
    bottom = new Dustbin(962,565,130,10);
    rightSide = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);

   

    
    ground.display();
    Paper1.display();
    leftSide.display();
    bottom.display();
    rightSide.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:74,y:-75});
    }
}
