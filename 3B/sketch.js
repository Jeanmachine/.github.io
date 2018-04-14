myGhost = [];
//var arr=[];
var myParticles = []


var w;
var img;
var x = 0;
var y=200;
var speed = 3;
var xLoc =200;
var yLoc =100;
var circleX = 250;
var circleY = 200;

var radius = 240;
var xX = 210;
var speedX =2.5;
var direction = 1;

function setup() {
  createCanvas(600, 400);
  randomR = int(random(255));
  randomG= int(random(255));
  randomB = int(random(255));

  for (var i = 0; i < 10; i++){
    var tempGhost = new Ghost();
    myGhost.push(tempGhost);
  }
}
function mousePressed(){

  for(var i=0; i<myGhost.length; i++){
    myGhost[i].clicked(mouseX,mouseY);
  }

}
function mouseDragged(){
  var tempParticle = new particle(mouseX,mouseY);
  myParticles.push(tempParticle);
}
function draw() {
  background(0);
  for (var y = 20; y <= height-20; y += 10){
    for (var x =20; x <=width-20; x+=10){

      // if(mouseIsPressed=true){
      //   stroke(0);
      // }else{
      //   stroke(255);
      // }

    }
  }

   for(var i = 0; i < myParticles.length; i++){
    myParticles[i].display();


  }
  for (var i=0; i<myGhost.length; i++){
    myGhost[i].display();
    myGhost[i].move();
  }

  var startRadians = radians(45);
  var endRadians = radians(315);
  xPosition = mouseX;
  yPosition = mouseY;


  if (keyIsPressed){
    if(keyCode == UP_ARROW){
      circleY -= 5;
    }else if(keyCode ==DOWN_ARROW){
      circleY += 5;
    }else if(keyCode==LEFT_ARROW){
      circleX -= 5;
    }

  }
  noStroke();
  ellipse(107,282,10,10);
  fill(0);
  ellipse(107,280,5,5);
  fill(0,255,255);
  fill(randomR,randomG,randomB, 80);
  ellipse(xLoc+10,yLoc-30,20,20);
  ellipse(xLoc+100,yLoc+100,20,20);
  ellipse(xLoc+100,yLoc+1500,20,20);
  ellipse(xLoc+150,yLoc+190,20,20);
  xLoc += random(-2,2);
  yLoc += random(-2,2);
  fill(0,0,0,40);
  if (mouseX > 350){

    ellipse(188,340,20,20);
    fill(255);
    ellipse(210,340,20,20);
    fill(0);
    ellipse(195,340,10,10);
    fill(0);
    ellipse(217,340,10,10);

curveVertex(20,10);
pop();
 }else if (mouseX >100){
   fill(0,255,200,60);
   noStroke();
 }else if(mouseX>50){
   noStroke();
   ellipse(400,200,20,20);
 }
  ellipse(x,200,20,20);
 }
