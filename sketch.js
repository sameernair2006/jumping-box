var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,500,200,100);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,500,200,100);
    surface2.shapeColor = "blue";

    surface3 = createSprite(500,500,200,100);
    surface3.shapeColor = "green";

    surface4 = createSprite(700,500,200,100);
    surface4.shapeColor = "purple";

    //create box sprite and give velocity
    box = createSprite(random(30,770),random(30,420),50,50);
    box.shapeColor = "white";
    box.velocityX = random(1,5)
    box.velocityY = random(-1,-5);

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.bounceOff(surface1);
        box.shapeColor = "red";
    }
    if(box.isTouching(surface2)){
        box.bounceOff(surface2);
        box.shapeColor = "blue";
        music.play();
    }
    if(box.isTouching(surface3)){
        box.bounceOff(surface3);
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(box.isTouching(surface4)){
        box.bounceOff(surface4);
        box.shapeColor = "purple";
    }

    drawSprites();
}
