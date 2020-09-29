const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drops = [];

var rand;

var dropsLimit = 100;

var flashingThunder1,flashingThunder2,flashingThunder3,flashingThunder4;
 
var thunder1img,thunder2img,thunder3img,thunder4img;

var thunder;
var thunderDisplay = 0;

function preload() {

thunder1img = loadImage("/thunderbolt/1.png");
thunder2img = loadImage("/thunderbolt/2.png");
thunder3img = loadImage("/thunderbolt/3.png");
thunder4img = loadImage("/thunderbolt/4.png");

}


function setup(){
    engine = Engine.create();

    world = engine.world;

    createCanvas(400,700);
    
    umbrella = new Umbrella(200,500);

    if(frameCount % 250 === 0){

        for(var i=0; i<dropsLimit; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);

    background(0); 

    
    rand = Math.round(random(1,4));
    
    if(frameCount%80===0){
        thunderDisplay = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1img);
            break;
            case 2: thunder.addImage(thunder2img);
            break; 
            case 3: thunder.addImage(thunder3img);
            break;
            case 4: thunder.addImage(thunder4img);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }

    if(thunderDisplay + 10 === frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    for(var j = 0; j < dropsLimit; j++){
        
        drops[j].dropDisplay();
        drops[j].updatePosition()
        
    }

    drawSprites();
}   
