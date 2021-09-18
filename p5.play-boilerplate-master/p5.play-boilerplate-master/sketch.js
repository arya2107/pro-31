const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var plinkos=[]
var divisions=[]
var particles=[]
var dh=300
function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(width/2,height,width,20)
  for(var i=75;i<width;i+=80){
    divisions.push(new Division(i,height-dh/2,10,dh))
  }
  for(var i=50;i<width-50;i+=50){
    plinkos.push(new Plinko(i,175))
  }
  for(var i=75;i<width-50;i+=50){
    plinkos.push(new Plinko(i,275))
  }
  for(var i=50;i<width-50;i+=50){
    plinkos.push(new Plinko(i,375))
  }
  for(var i=75;i<width-50;i+=50){
    plinkos.push(new Plinko(i,75))
  }
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display()
for(var i=0;i<divisions.length;i++){
divisions[i].display()
}
for(var i=0;i<plinkos.length;i++){
  plinkos[i].display()
}
if(frameCount%60===0){
particles.push(new Particle(random(width/2-200,width/2+200),10,10))
}
for(var i=0;i<particles.length;i++){
  particles[i].display()
}
}