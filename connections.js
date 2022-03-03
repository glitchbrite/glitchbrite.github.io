let cap1
let connect1
let corner1

let test1
let test2
let test3
let test4
let test5
let test6
let test7
let test8
let test9





function preload(){
  cap1 = loadImage('images/connections/cap.png');
  connect1 = loadImage('images/connections/connect.png');
  corner1 = loadImage('images/connections/corner.png');

  test1 = loadImage('images/connections/SMtest01.png');
  test2 = loadImage('images/connections/SMtest02.png');
  test3 = loadImage('images/connections/SMtest03.png');
  test4 = loadImage('images/connections/SMtest04.png');
  test5 = loadImage('images/connections/SMtest05.png');
  test6 = loadImage('images/connections/SMtest06.png');
  test7 = loadImage('images/connections/SMtest07.png');
  test8 = loadImage('images/connections/SMtest08.png');
  test9 = loadImage('images/connections/SMtest09.png');

}

let canvasSize = 1000
let gridSize = 5
let divisor

function setup() {
  gridSize = floor(random(2,21))
  divisor = canvasSize/gridSize
  createCanvas(canvasSize, canvasSize)
  angleMode(DEGREES)
  
  background(0)

  const matrix =  generateMatrix(gridSize, gridSize)
  placeImages(matrix)
  
  
      
}

 // create grid size
 function generateMatrix(numOfRows, numOfColumns) {
  const row = Array(numOfColumns)
  let matrix = []
  for (let i=0; i<=numOfRows-1; i++) {
    matrix.push(row)
  }
  return matrix
}

let x = 0
let y = 0

function placeImages(matrix) {
  for (let row=0; row<matrix.length; row++) {
    for (let column=0; column<matrix[0].length; column++) {
      // check available spots

      // image(eval(imagelist[floor(random(0,3))]), x, y)

      let availableSpots = spotChecker(matrix, row, column)

      // find and rotate image
      let image1 = rotateAndPlaceImage(availableSpots)
    
      // update matrix with new image
      matrix[row][column] = image1
      // let image1 = imagefamily[floor(random(imagefamily.length))][0]
      
      // draw image in spot 
   

      push()
      // 

      let angles = [90, 180, 270, 360]
      imageMode(CENTER)

      translate((row*divisor)+divisor/2, (column*divisor)+divisor/2)
      rotate(angles[floor(random(3.99))])
      
      

      // scale(floor(random(-1,1.99)),floor(random(-1,1.99)))
      
      image(image1.name, 0, 0, divisor, divisor)
      pop()

    }
  
  }
}

function spotChecker(matrix, currentRow, currentColumn) {
  let availableSpots = {
    top: null,
    left: null
  }
  // some math
  // if row is 0 there is always an available top point
  if (currentRow === 0) {
    availableSpots.top = true
  } else {
    // check on image to the top
    // current column, current row - 1
    let topImg = matrix[currentRow -1][currentColumn]
     // if that image has bottom connection available
    // if true push to array
    if (topImg.connections.bottom === true) {
      availableSpots.top = true
    }
  }

  // if column is 0 there is always an available left point
  if (currentColumn === 0) {
    availableSpots.left = true
  } else {
    // check on image to the left
    // current row, currentcolumn -1
    let leftImg = matrix[currentRow][currentColumn-1]
    // if that image has right connection available
    // if true push to array
    if (leftImg.connections.right === true) {
      availableSpots.left = true
    }
  }

  console.log(availableSpots)
  return availableSpots

}

function rotateAndPlaceImage(availableConnectionPoints) { // { top: true, left: null }
  
  let cap = [cap1]
  let connect = [connect1]
  let corner = [corner1]

  // let imagefamily = [cap, connect, corner]
  let imagefamily = [test1, test2, test3, test4, test5, test6, test7, test8, test9,]
 
  let pickedImage = imagefamily[floor(random(imagefamily.length))]
 
  // calculate rotation and new connection points

  // save name and new connection point info
  // ex -
  // const imageName = cap
  // const newConnectionPoints = {top: false, right: false, bottom: true, left: false}

  const image = {name: pickedImage, connections: {/* newConnectionPoints*/ }}
  return image
}

function draw() {

}
   