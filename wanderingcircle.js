
function setup() {

  document.body.style.backgroundColor = "rgb(57, 57, 57)";

  createCanvas(1000, 1000)
  background(0)
  noFill()
  stroke(255)
  rect(300, 300, 400, 400)
}
var direct = 0
var direct2 = 0

var d = 42

function draw() {
  var x = width/2
  var y = height/2
  direct = direct+floor(random(-4,5))
  direct2 = direct2+floor(random(-4,5))
  d = d+floor(random(-3,4))
  console.log(d)

  stroke(0)
  fill(255)
  circle(x+direct, y+direct2, d)
  

  if(direct > 300){
    direct = direct - 10
  }
  if(direct2 > 300){
    direct2 = direct2 - 10
  }
  if(direct < -300){
    direct = direct + 10
  }
  if(direct2 < -300){
    direct2 = direct2 + 10
  }
  if(d > 100){
    d = d - 10
  }
  if(d < 21){
    d = d + 5
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

// setInterval(function(){
  
//   fill(0,0,0,5)
//   rect(0, 0, 1000, 1000)

// },100);


