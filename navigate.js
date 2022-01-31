
function setup() {

  document.body.style.backgroundColor = "rgb(0, 0, 0)";

  createCanvas(windowWidth-(windowWidth*0.04), windowHeight-(windowHeight*0.02))
  background(0)
  noFill()
  // stroke(255)
  // rect(400,400,200,200)
}

var x = 500
var y = 500
var movex = 0
var movey = 0
var grid = []

var r = 127
var g = 127
var b = 127

setInterval(function(){
  fill(0,0,0,10)
  // noFill()
  noStroke()
  rect(0,0,windowWidth,windowHeight)
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
  // circle(400,500,r*4)
  // circle(475,500,g*4)
  // circle(550,500,b*4)


  movex = floor(random(-84,85))
  movey = floor(random(-84,85))
  x = x + movex
  y = y + movey

  var v = createVector(x, y)
  grid.push(v)
  

  fill(r,g,b)
  stroke(r,g,b,floor(random(42,100)))
  rect(x+random(-21,22), y+random(-21,22), random(-1,4))

  // noFill()
  fill(r,g,b, 10)
  noStroke()
  rect(x+random(-41,22), y+random(-41,22), random(-42,100))

  
  stroke(r,g,b,floor(random(100,255)))
  strokeWeight(1)
  // line(grid[0].x,grid[0].y,grid[grid.length-1].x,grid[grid.length-1].y)

  // if(grid.length > 10){
  //   line(grid[grid.length-9].x,grid[grid.length-9].y,grid[grid.length-1].x,grid[grid.length-1].y)
  // }
  strokeWeight(1)

  if(grid.length > 10){
    // fill(r,g,b, 42)
    noFill()
    // noStroke()
    push()
    beginShape()
    vertex(grid[grid.length-1].x)
    bezierVertex(
      grid[grid.length-1].x,
      grid[grid.length-1].y,
      grid[grid.length-2].x,
      grid[grid.length-2].y,
      grid[grid.length-3].x,
      grid[grid.length-3].y
      )
    
    endShape()
    pop()
    push()
    beginShape()
    vertex(grid[grid.length-1].x)
    bezierVertex(
      grid[grid.length-1].x,
      grid[grid.length-1].y,
      grid[grid.length-2].x,
      grid[grid.length-2].y,
      grid[grid.length-3].x,
      grid[grid.length-3].y
      )
    
    endShape()
    pop()
    push()
    beginShape()
    vertex(grid[grid.length-1].x)
    bezierVertex(
      grid[grid.length-1].x,
      grid[grid.length-1].y,
      grid[grid.length-2].x,
      grid[grid.length-2].y,
      grid[grid.length-3].x,
      grid[grid.length-3].y
      )
    
    endShape()
    pop()
  }
  
  

  if(x > 800){
    x = x - 10
  }
  if(y > 800){
    y = y - 10
  }
  if(x < 200){
    x = x + 10
  }
  if(y < 200){
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


