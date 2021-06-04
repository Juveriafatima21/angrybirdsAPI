var a="string"
console.log(a)

var n=10;
console.log(n);

var b=true;
console.log(b);

var object;
console.log(object);

object=null;
console.log(object);



const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var bg="sprites/bg.png";
var score=0;
var engine,world,box1,backgroundImg, constrainedlog;
var gamestate="onsling";
function preload(){
 getbackgroundimage();
}
function setup() {

  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  platform=new Ground(150,305,300,170);
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  pig1=new Pig(810,350);
  log1=new Log(810,260,300,PI/2);
  
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  pig2=new Pig(810,220);
  log2=new Log(810,180,300,PI/2);
  ground=new Ground(600,380,1200,20);
  log3=new Log(760,120,150,PI/7)
  log4=new Log(870,120,150,-PI/7)
  box5=new Box(810,160,70,70);
  bird=new Bird(200,200);
  //constrainedlog=new Log(230,180,80,PI/2);
  chain=new Chain(bird.body,{x:200, y:50});
  // console.log(object);
}

function draw() {
if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35);
    fill("white");
    text("Score: "+score,width-300,50);

  text(mouseX+","+mouseY, mouseX,mouseY);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  log1.display();
  log2.display();
  pig1.display();
  //pig1.score();
  pig2.display();
 // pig2.score();
  log3.display();
  log4.display();
  bird.display();
  platform.display();
  //constrainedlog.display();
  chain.display();
 
}


function mouseDragged(){
  if(gamestate!=="launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
  }
  
}

function mouseReleased(){
  chain.fly();
  gamestate="launched";
}

function keyPressed(){
  if(keyCode==32){
   // chain.attach(bird.body);
  }
}

async function getbackgroundimage(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON=await response.json();
var datetime=responseJSON.datetime;
var hour=datetime.slice(11,13);
console.log(hour)
if(hour>=06 && hour<=19){
  bg="sprites/bg.png";
}
else
bg="sprites/bg2.jpg";

backgroundImg=loadImage(bg);


}