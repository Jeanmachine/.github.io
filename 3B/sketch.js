function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  background(90, 72, 102);
  var radius = width * 1.5;

  //drag to move the world.
  orbitControl();

  normalMaterial();
  translate(0, 0, -800);
  for(var i = 0; i <= 11; i++){
    for(var j = 0; j <= 11; j++){
      push();
      var a = j/12 * PI;
      var b = i/12 * PI;
      translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2 , cos(2 * a) * radius * sin(b));
      if(j%2 === 0){
        cone(130, 130);
      }else{
      }
      pop();
    }
  }
}
