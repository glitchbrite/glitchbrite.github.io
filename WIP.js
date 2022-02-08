function windowResized() {
  resizeCanvas(windowWidth-(windowWidth*0.04), windowHeight-(windowHeight*0.2));
  background(0)

}
function setup() {

  // document.body.style.backgroundColor = "rgb(57, 57, 57)";

  createCanvas(windowWidth-(windowWidth*0.04), windowHeight-(windowHeight*0.02), WEBGL)
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
},100);

function draw() {
  
  movex = floor(random(-21,22))
  movey = floor(random(-21,22))
  x = x + movex
  y = y + movey

  var v = createVector(x, y)
  grid.push(v)
  
  // fill(r,g,b,168)
  // noFill()
  // stroke(r,g,b,floor(random(10)))
  // noStroke()
  
  push()
  translate(p5.Vector.fromAngle(millis() / 1000, 200));

  translate(grid[grid.length-1].x,grid[grid.length-1].y)

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  noStroke()
  fill(r,g,b)
  box(r/4,g/4,b/4)
  
  pop()

  // strokeWeight(1)

  // background(0)
  // fill(r,g,b,222)
  // stroke(r,g,b)
  // box(r,g,b)

  push()
  fill(r,g,b,86)
  noStroke()
  strokeWeight(8)
  translate(grid[grid.length-1].x,grid[grid.length-1].y)
  translate(r-(r*0.5),g-(g*0.5),b-(b*0.5))
  sphere(42)
  pop()

  // push()
  // stroke("red")
  // strokeWeight(8)
  // line(r-(r*0.5),-r+(r*0.5),g-(g*0.5),g-(g*0.5),b-(b*0.5),b-(b*0.5))
  // pop()

  // push()
  // stroke(255)
  // strokeWeight(8)
  // line(r-(r*0.5),r-(r*0.5),g-(g*0.5),-g+(g*0.5),b-(b*0.5),b-(b*0.5))
  // pop()

  // push()
  // stroke(255)
  // strokeWeight(8)
  
  // line(r-(r*0.5),r-(r*0.5),g-(g*0.5),g-(g*0.5),b-(b*0.5),-b+(b*0.5))
  
  // pop()


  push()
  translate(grid[grid.length-1].x,grid[grid.length-1].y)

  rotateX(frameCount * 0.008)
  rotateY(frameCount * 0.008)
  stroke(r,g,b,floor(random(1)))
  // noStroke()
  fill(r,g,b,168)
  strokeWeight(floor(random(0,4)))

  beginShape()
  vertex(-r+(r*0.5),g-(g*0.5),b-(b*0.5))
  vertex(r-(r*0.5),-g+(g*0.5),b-(b*0.5))
  vertex(r-(r*0.5),g-(g*0.5),-b+(b*0.5))
  vertex(-r+(r*0.5),g-(g*0.5),b-(b*0.5))
  endShape()
  
  pop()
  

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



// var onoff = 1

// function mouseClicked(){

//   if(onoff === 1){

//     noLoop()
//     onoff = 0

//   } else {

//     loop()
//     onoff = 1

//   }  
// }

// setInterval(function(){
  

// },100);


