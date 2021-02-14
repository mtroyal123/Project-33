var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var engine,world;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var Ground;
var count = 0;
var gameState = "play";
var particle; 
var points;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Ground = new ground(width/2,height,width,20);

  particle = new Particle(mouseX, 10,10,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
    
       plinkos.push(new Plinko(j,375));
    }
    
}

function draw() {
  background("black");
  Engine.update(engine);

  Ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (gameState === "play"){
    textSize(25);
    fill("white");
    noStroke();
    text("Score: "+ score, 5,25);
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  if (particle !== null){
    particle.display(); 
    if (particle.body.position.y > 760){
      count = count+1;
      if (particle.body.position.x < 300){
        score = score+500;
        particle= null;
      }
       else if (particle.body.position.x > 301 && particle.body.position.x < 600){
          score = score+100;
          particle= null;
      }
       else if (particle.body.position.x > 601 && particle.body.position.x < 900){
        score = score+200;
        particle= null;
      }
    }
    if (count >= 5){
      gameState = "end";
    }
  }
  }
  
  if (gameState === "end"){
    push()
    textSize(70);
    fill("white");
    noStroke();
    text("Game Over", 200, 230);
    pop();
    textSize(25);
    fill("white");
    noStroke();
    text("Score: "+ score, 5,25);

  }
  
  }

function mousePressed(){
  if(gameState !== "end"){
   particle = new Particle(mouseX, 10,10,10);
   particle.display();
  }

}

console.log(particle);