function windowResized() {
  resizeCanvas(windowWidth-(windowWidth*0.04), windowHeight-(windowHeight*0.02));
  background(0)

}
function setup() {

  // document.body.style.backgroundColor = "rgb(57, 57, 57)";

  createCanvas(windowWidth-(windowWidth*0.04), windowHeight-(windowHeight*0.02), WEBGL)

  background(0)
  
 r = floor(random(255))
 g = floor(random(255))
 b = floor(random(255))

}

setInterval(function(){
  // fill(0,0,0,10)
  // noFill()
  // rect(-500,-500,1000,1000)
  r = r + floor(random(-4,5))
  g = g + floor(random(-4,5))
  b = b + floor(random(-4,5))

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
// setInterval(function(){

//   fill(0)
//   rect(-(width/2),-(height/2),width,height)
  
// },100000);

var r = 127
var g = 127
var b = 127

var flipR
var flipG
var flipB

var xstart = -940
var ystart = -520
var spacing = 90
var xorigin = xstart
var yorigin = ystart

var x = 0
var y = 0
var movex = 0
var movey = 0
var grid = []

var randomSize = 1

function draw() {
  movex = floor(random(-42,43))
  movey = floor(random(-42,43))
  x = x + movex
  y = y + movey

  var v = createVector(x, y)
  grid.push(v)

  if(grid.length >= 100){
    grid.shift()
  }
  
  // fill(r,g,b,2)
  // noStroke()
  // push()
  // translate(grid[grid.length-1].x,grid[grid.length-1].y, -100)
  // box(random(40,200),random(40,100),random(40,100))
  // pop()


  fill(r,g,b,100)
  // noFill()
  stroke(r,g,b,floor(random(10)))
  // noStroke()

  push()
  translate(grid[grid.length-1].x,grid[grid.length-1].y)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  randomSize = floor(randomSize + random(-(r + g + b)/9,(r + g + b)/9))
  // console.log(randomSize)
  box(r/randomSize,g/randomSize,b/randomSize)
  pop()
  console.log(grid.length)
  // if(grid.length >= 4200){
  //   noLoop()
  // }


  if(randomSize > 100){
    randomSize = randomSize - 20
  }
  if(randomSize < -100){
    randomSize = randomSize + 10
  }

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