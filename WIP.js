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

var newLength = 0

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

var dis = 0

function draw() {
  
  movex = floor(random(-301,302))
  movey = floor(random(-301,302))
  x = x + movex
  y = y + movey

  var v = createVector(x, y)
  grid.push(v)

  
  // fill(r,g,b,168)
  // noFill()
  // noStroke()
  
  push()
  // translate(p5.Vector.fromAngle(millis() / 1000, 200));

  translate(grid[grid.length-1].x,grid[grid.length-1].y)

  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // noStroke()
  stroke(r,g,b,floor(random(10)))

  fill(r,g,b, 168)
  // box(r/4,g/4,b/4)
  
  pop()

  // strokeWeight(1)

  // background(0)
  // fill(r,g,b,222)
  // stroke(r,g,b)
  // box(r,g,b)

  dis = (r+g+b)/random(21,42)

  push()
  fill(r,g,b,86)
  // noStroke()
  stroke(r,g,b,random(255))
  strokeWeight(random(0,0.5))
  circle(grid[grid.length-1].x,grid[grid.length-1].y,dis)

  rotateX(frameCount * 0.008)
  rotateY(frameCount * 0.008)
  translate(grid[grid.length-1].x,grid[grid.length-1].y)
  // translate(r-(r*0.5),g-(g*0.5),b-(b*0.5))
  sphere(dis)

  pop()

  // push()
  
  // circle(grid[grid.length-1].x,grid[grid.length-1].y,(r+g+b)/random(8,16))
  // pop()

  // rotate(random(2))
  // push()
  // stroke(r,g,b,1)
  // strokeWeight(1)
  // beginShape()
  // vertex(grid[grid.length-1].x,grid[grid.length-1].y,0)
  // vertex(gesture[gesture.length-1].x,gesture[gesture.length-1].y,0)
  
  // endShape()
  
  // pop()

  // newLength = floor(random(grid.length))
  // console.log(newLength)

  // push()
  // translate(grid[grid.length-1].x,grid[grid.length-1].y)


  // rotateX(frameCount * 0.008)
  // rotateY(frameCount * 0.008)
  // stroke(r,g,b,floor(random(1)))
  // // noStroke()
  // fill(r,g,b,242)
  // strokeWeight(floor(random(0,4)))

  // beginShape()
  // vertex(-r+(r*0.5),g-(g*0.5),b-(b*0.5))
  // vertex(r-(r*0.5),-g+(g*0.5),b-(b*0.5))
  // vertex(r-(r*0.5),g-(g*0.5),-b+(b*0.5))
  // vertex(-r+(r*0.5),g-(g*0.5),b-(b*0.5))
  // endShape()
  
  // pop()
  

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


