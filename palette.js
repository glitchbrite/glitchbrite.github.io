function setup() {

  document.body.style.backgroundColor = "rgb(42, 42, 42)";
  // document.body.style.marginTop = "10px";

  createCanvas(1040, 1040, WEBGL)
  background(42)
  
 


  for(var i = 0; i < 4; i++){
    
    for(var j = 0; j < 4; j++){
      
      for(var k = 0; k < 4; k++){
        var v = createVector(r,g,b)
        palette.push(v)
        b = b + 80
      }

      g = g + 80
      b = 10

    }

    r = r + 80
    g = 10

  }

console.log(palette)
}

var palette = []

var r = 10
var g = 10
var b = 10
var counter = 0
var xorigin = -400
var yorigin = -400

var order = [
  0,1,2,3,
  7,6,5,4,
  
  16,17,18,19,
  23,22,21,20,
  
  32,33,34,35,
  39,38,37,36,

  48,49,50,51,
  55,54,53,52,

  56,57,58,59,
  63,62,61,60,

  40,41,42,43,
  47,46,45,44,

  24,25,26,27,
  31,30,29,28,

  8,9,10,11,
  15,14,13,12
]

function draw() {
  fill(42)
  noStroke()
  push()
  translate(0,0,-100)
  rect(-1000,-1000,2000, 2000)
  pop()
  for(var i = 0; i < 8; i++){
    
    for(var j = 0; j < 8; j++){
      fill(palette[order[counter]].x,palette[order[counter]].y,palette[order[counter]].z, 222)
      stroke(palette[order[counter]].x,palette[order[counter]].y,palette[order[counter]].z, 10)
      push()
      translate(xorigin, yorigin)
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      // rotateX(42)
      // rotateY(88)
      box(palette[order[counter]].x/4,palette[order[counter]].y/4,palette[order[counter]].z/4)
      pop()
      yorigin = yorigin +110
      console.log(order[counter])
      counter++
    }
    yorigin = -400
    xorigin = xorigin + 110
  }
  xorigin = -400
  counter = 0
  // noLoop()
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