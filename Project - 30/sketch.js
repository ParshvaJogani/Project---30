const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundIMG;
var box1;
var bird, slingShot;
var count;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    count = 3;
    console.log(count);

    ground = new Ground(600,250,400,20);

    box1 = new Box(510,250,30,40);
    box2 = new Box(540,250,30,40);
    box3 = new Box(570,250,30,40);
    box4 = new Box(600,250,30,40);
    
    box5 = new Box(525,210,30,40);
    box6 = new Box(555,210,30,40);
    box7 = new Box(585,210,30,40);

    box8 = new Box(540,170,30,40);
    box9 = new Box(570,170,30,40);

    box0 = new Box(555,130,30,40)
    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box0.display();

    bird.display();

    //log6.display();
    slingshot.display();   
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(bird.body);
    count = count-1;
    }
}
