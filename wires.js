function windowResized() {
  resizeCanvas(windowWidth-(windowWidth*0.04), windowHeight-(windowHeight*0.2));
  background(0)

}

var points = []
var mult = 0.00021

function setup() {
  createCanvas((windowWidth-(windowWidth*0.04)), (windowHeight-(windowHeight*0.02)), WEBGL)

  background(0)
  angleMode(DEGREES)
  noiseDetail(42)
  
  var density = 11
  var space = windowWidth / density
    
  for (var x = 0; x < windowWidth+100; x += space){
    for (var y = 0; y < windowHeight+100; y += space){
      var p = createVector(x-(windowWidth-(windowWidth*0.5)), y-(windowHeight-(windowHeight*0.5)))
      points.push(p)
      
    }    
  }
}

function draw() {
  // fill(255)
  noStroke()

  for (var i = 0; i < points.length; i++){

    
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, width)
    
    points[i].add(createVector(sin(angle), (cos(angle))))
    
    var ran = random(42)
    var jan = random(42)
    
    ellipse(points[i].x, points[i].y, frameCount*0.04)
    ellipse(points[i].x, points[i].y, ran*cos(frameCount))
    fill("black")
    ellipse(points[i].x, points[i].y, ran*cos(frameCount+5))
    fill(200)
  }

  if(frameCount===1280){
    noLoop()
  }
}