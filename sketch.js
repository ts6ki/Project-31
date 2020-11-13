const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var div = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  base = new Ground(240,790,850,50);

}

function draw() {
  background("black"); 

  base.display();

  barriers();
  plinko();
  balls();
  


}

function barriers()
{
  for (var k = 0; k<= width; k = k+80)
  {
    div.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k < div.length; k++)
  {
    div[k].display();
  }
}

function plinko()
{
  for (var j = 40; j<= width; j = j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<= width - 10; j = j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40; j<= width; j = j+50)
  {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j<= width - 10; j = j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

  for (var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }
}

function balls()
{
  if(frameCount%10 === 0)
  {
    particles.push(new Ball(random(230, 250), 10, 10))
  }

  for (var i = 0; i < particles.length; i++)
  {
    particles[i].display();
  }
}