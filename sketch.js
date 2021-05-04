var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;
var gameState="start";
var count=0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(40)
 text("500 ", 10,550);
 text("500 ", 90,550);
 text("500 ", 170,550);
 text("500 ", 170+80,550);
 text("100 ", 170+80+80,550);
 text("100 ", 170+80+80+80,550);
 text("100 ", 170+80+80+80+80,550);
 text("200 ", 170+80+80+80+80+80,550);
 text("200 ", 170+80+80+80+80+80+80,550);
 text("200 ", 170+80+160+160+160,550);

  Engine.update(engine);

  if(gameState==="end"){
textSize(20);
text("game over",300,400);
  }
 if(particle!=null){
particle.display();
if(particle.body.position.y>780){

if(particle.body.position.x<300){
score=score+500;
particle=null
if(count>=5){
  gameState="end";
}
}else if(particle.body.position.x>301&&particle.body.position.x<550){
  score=score+100;
  particle=null
  if(count>=5){
    gameState="end";
  }
  }else if(particle.body.position.x>551&&particle.body.position.x<800){
    score=score+200;
    particle=null
    if(count>=5){
      gameState="end";
    }
  }  
}

 }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
if(gameState!=="end"){
  count=count+1;
particle=new Particle(mouseX,10,10,10)
}
}
