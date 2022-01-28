function windowResized() {
  resizeCanvas(windowWidth-(windowWidth*0.05), windowHeight-(windowHeight*0.2));
  background(0)

}
function setup() {

  document.body.style.backgroundColor = "rgb(57, 57, 57)";
  // document.body.style.marginTop = "10px";

  createCanvas(windowWidth-(windowWidth*0.05), windowHeight-(windowHeight*0.2), WEBGL)
  background(0)
  noFill()
  stroke(255)
  // rect(400,400,200,200)
  console.log((width-200))
}

var x = 0
var y = 0
var movex = 0
var movey = 0
var grid = []

var r = 127
var g = 127
var b = 127

setInterval(function(){
  // fill(0,0,0,10)
  // noFill()
  // rect(-500,-500,1000,1000)
  r = r + floor(random(-5,6))
  g = g + floor(random(-5,6))
  b = b + floor(random(-5,6))

  if(r < 5){
    r = 10
  }
  if(r > 250){
    r = 245
  }
  if(g < 5){
    g = 10
  }
  if(g > 250){
    g = 245
  }
  if(b < 5){
    b = 10
  }
  if(b > 250){
    b = 245
  }
  // var rgb = [r,g,b]
  // console.log(rgb)

},100);

function draw() {
  // strokeWeight(0.1)
  // noFill()
  // circle(-100,0,r*2)
  // circle(0,0,g*2)
  // circle(100,0,b*2)

  
  // rotate(40)


  movex = floor(random(-42,43))
  movey = floor(random(-42,43))
  x = x + movex
  y = y + movey

  var v = createVector(x, y)
  grid.push(v)
  
  fill(r,g,b,168)
  // noFill()
  stroke(r,g,b,floor(random(10)))
  // noStroke()
  
  push()
  // translate(p5.Vector.fromAngle(millis() / 1000, 200));

  translate(grid[grid.length-1].x,grid[grid.length-1].y)

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(r/4,g/4,b/4)
  pop()

  strokeWeight(1)


  if(x > ((width/2)-10)){
    x = x - 10
  }
  if(y > ((height/2)-10)){
    y = y - 10
  }
  if(x < -((width/2)-10)){
    x = x + 10
  }
  if(y < -((height/2)-10)){
    y = y + 10
  }

  // if(grid.length >= 4200){
  //   noLoop()
  // }
}



var onoff = 1

function mouseClicked(){

  if(onoff === 1){

    noLoop()
    onoff = 0

  } else {

    loop()
    onoff = 1

  }  
}

// setInterval(function(){
  

// },100);


