var canvas;
var music;
var s1,s2,s3,s4,b
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1=createSprite(700,580,175,20)
    s1.shapeColor="magenta"
    s2=createSprite(500,580,175,20)
    s2.shapeColor="yellow"
    s3=createSprite(300,580,175,20)
    s3.shapeColor="lime"
    s4=createSprite(100,580,175,20)
    s4.shapeColor="cyan"
    //create box sprite and give velocity
    b=createSprite(random(20,750),200,20,20)
    b.shapeColor="white"
    b.velocityX=3
    b.velocityY=3
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges=createEdgeSprites()
  b.bounceOff(edges)

    //add condition to check if box touching surface and make it box
    if(s1.isTouching(b) && b.bounceOff(s1)){
        b.shapeColor="magenta"
        music.play()
    }
    if(s2.isTouching(b) && b.bounceOff(s2)){
        b.shapeColor="yellow"
    }
    if(s3.isTouching(b) && b.bounceOff(s3)){
        b.shapeColor="lime"
        b.velocityX=0
        b.velocityY=0
        music.stop()
    }
    if(s4.isTouching(b) && b.bounceOff(s4)){
        b.shapeColor="cyan"
    }
    drawSprites()
}

