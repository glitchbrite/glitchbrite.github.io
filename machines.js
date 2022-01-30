let bgWires1;
let bgWires2;
let bgWires3;
let bgWires4;

let messyWires1;
let messyWires2;
let messyWires3;

let top1
let top2
let top3
let top4
let top5
let top6
let top7

let leftSide1
let leftSide2
let leftSide3
let leftSide4
let leftSide5
let leftSide6
let leftSide7

let rightSide1
let rightSide2
let rightSide3
let rightSide4
let rightSide5
let rightSide6
let rightSide7

let screens1
let screens2
let screens3
let screens4
let screens5
let screens6
let screens7
let screens8
let screens9
let screens10

let buttons1
let buttons2
let buttons3
let buttons4
let buttons5
let buttons6
let buttons7

let panels1
let panels2
let panels3
let panels4
let panels5
let panels6
let panels7

function preload(){
  bgWires1 = loadImage('images/bgWires/bgWires1.png');
  bgWires2 = loadImage('images/bgWires/bgWires2.png');
  bgWires3 = loadImage('images/bgWires/bgWires3.png');
  bgWires4 = loadImage('images/bgWires/bgWires4.png');

  messyWires1 = loadImage('images/messyWires/messyWires1.png');
  messyWires2 = loadImage('images/messyWires/messyWires2.png');
  messyWires3 = loadImage('images/messyWires/messyWires3.png');

  top1 = loadImage('images/top/top1.png');
  top2 = loadImage('images/top/top2.png');
  top3 = loadImage('images/top/top3.png');
  top4 = loadImage('images/top/top4.png');
  top5 = loadImage('images/top/top5.png');
  top6 = loadImage('images/top/top6.png');
  top7 = loadImage('images/top/top7.png');
  
  leftSide1 = loadImage('images/leftSide/leftSide1.png');
  leftSide2 = loadImage('images/leftSide/leftSide2.png');
  leftSide3 = loadImage('images/leftSide/leftSide3.png');
  leftSide4 = loadImage('images/leftSide/leftSide4.png');
  leftSide5 = loadImage('images/leftSide/leftSide5.png');
  leftSide6 = loadImage('images/leftSide/leftSide6.png');
  leftSide7 = loadImage('images/leftSide/leftSide7.png');

  rightSide1 = loadImage('images/rightSide/rightSide1.png');
  rightSide2 = loadImage('images/rightSide/rightSide2.png');
  rightSide3 = loadImage('images/rightSide/rightSide3.png');
  rightSide4 = loadImage('images/rightSide/rightSide4.png');
  rightSide5 = loadImage('images/rightSide/rightSide5.png');
  rightSide6 = loadImage('images/rightSide/rightSide6.png');
  rightSide7 = loadImage('images/rightSide/rightSide7.png');

  screens1 = loadImage('images/screens/screens1.png');
  screens2 = loadImage('images/screens/screens2.png');
  screens3 = loadImage('images/screens/screens3.png');
  screens4 = loadImage('images/screens/screens4.png');
  screens5 = loadImage('images/screens/screens5.png');
  screens6 = loadImage('images/screens/screens6.png');
  screens7 = loadImage('images/screens/screens7.png');
  screens8 = loadImage('images/screens/screens8.png');
  screens9 = loadImage('images/screens/screens9.png');
  screens10 = loadImage('images/screens/screens10.png');

  buttons1 = loadImage('images/buttons/buttons1.png');
  buttons2 = loadImage('images/buttons/buttons2.png');
  buttons3 = loadImage('images/buttons/buttons3.png');
  buttons4 = loadImage('images/buttons/buttons4.png');
  buttons5 = loadImage('images/buttons/buttons5.png');
  buttons6 = loadImage('images/buttons/buttons6.png');
  buttons7 = loadImage('images/buttons/buttons7.png');

  panels1 = loadImage('images/panels/panels1.png');
  panels2 = loadImage('images/panels/panels2.png');
  panels3 = loadImage('images/panels/panels3.png');
  panels4 = loadImage('images/panels/panels4.png');
  panels5 = loadImage('images/panels/panels5.png');
  panels6 = loadImage('images/panels/panels6.png');
  panels7 = loadImage('images/panels/panels7.png');
}

function setup() {
  document.body.style.backgroundColor = "black";
  
  
  createCanvas(1000, 1000)
  fill("black")
  rect(0,0,1920,1080)
  
  let x = 0
  let y = 0
  let xmover = 1000
  let ymover = 1000
  let r = random(42,84)
  let g = random(42,168)
  let b = random(168,255)

  let scaled = scale(0.333)
  let comps = 3

  for(var i = 0; i < comps; i++){

    for(var j = 0; j < comps; j++){
  

      let c = [r, g, b]

      r = r + 255 * random(-1,1)
      g = g + 84 * random(-1,1)
      b = b + random(42) * random(-1,1)


      let bg = fill(r, g, b)
     

      let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
      let messyWires = [messyWires1, messyWires2, messyWires3]
      let top = [top1, top2, top3, top4, top5, top6, top7]
      let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
      let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
      let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
      let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
      let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]
  
      push()
      scaled
      bg
      stroke('black')
      strokeWeight(50)
      rect(x, y, 1000, 1000)
      pop()
      
      push()
      scaled
      image(eval(bgWires[floor(random(0,4))]), x, y)
      image(eval(bgWires[floor(random(0,4))]), x, y)
      image(eval(messyWires[floor(random(0,2))]), x, y)
      image(eval(messyWires[floor(random(0,2))]), x, y)
      image(eval(top[floor(random(0,6))]), x, y)
      image(eval(leftSide[floor(random(0,6))]), x, y)
      image(eval(rightSide[floor(random(0,6))]), x, y)
      image(eval(screens[floor(random(0,9))]), x, y)
      image(eval(buttons[floor(random(0,6))]), x, y)
      image(eval(panels[floor(random(0,6))]), x, y)
      pop()

      push()
      scaled
      let d = fill(c[0], c[1], c[2])
      d
      rect(355+x,345+y,300,300)
      y = y+ymover
      pop()
      
    }
    y = 0
    let c = [r, g, b]
      
    r = r + random(42) * random(-1,1)
    g = g + random(42) * random(-1,1)
    b = b + random(42) * random(-1,1)
      
    let bg = fill(r, g, b)

    let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
    let messyWires = [messyWires1, messyWires2, messyWires3]
    let top = [top1, top2, top3, top4, top5, top6, top7]
    let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
    let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
    let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
    let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
    let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]

    push()
    scaled
    bg
    stroke('black')
    strokeWeight(50)
    rect(x, y, 1000, 1000)
    pop()
    
    push()
    scaled
    image(eval(bgWires[floor(random(0,4))]), x, y)
    image(eval(bgWires[floor(random(0,4))]), x, y)
    image(eval(messyWires[floor(random(0,2))]), x, y)
    image(eval(messyWires[floor(random(0,2))]), x, y)
    image(eval(top[floor(random(0,6))]), x, y)
    image(eval(leftSide[floor(random(0,6))]), x, y)
    image(eval(rightSide[floor(random(0,6))]), x, y)
    image(eval(screens[floor(random(0,9))]), x, y)
    image(eval(buttons[floor(random(0,6))]), x, y)
    image(eval(panels[floor(random(0,6))]), x, y)
    pop()

    push()
    scaled
    
    
    rect(355+x,345+y,300,300)
    x = x+xmover
    pop()

  
  }
  let xx = 0
  let yy = 0
  let xxmover = 1000
  let yymover = 1000
  let rr = random(42,84)
  let gg = random(42,168)
  let bb = random(168,255)

  for(var i = 0; i < comps; i++){

    for(var j = 0; j < comps; j++){
  
      let c = [r, g, b]

      rr = rr + 255 * random(-1,1)
      gg = gg + 84 * random(-1,1)
      bb = bb + random(42) * random(-1,1)

      let bg = fill(rr, gg, bb)
      
      push()
      scaled
      rect(355+xx,345+yy,300,300)
      yy = yy+yymover
      pop()
      
    }
    yy = 0
    let c = [rr, gg, bb]
      
    rr = rr + random(42) * random(-1,1)
    gg = gg + random(42) * random(-1,1)
    bb = bb + random(42) * random(-1,1)
      
    let bg = fill(rr, gg, bb)
    push()
    scaled
    rect(355+xx,345+yy,300,300)
    xx = xx+xxmover
    pop()
  }
  
  let xxx = 0
  let yyy = 0
  let xxxmover = 1000
  let yyymover = 1000
  let rrr = random(42,84)
  let ggg = random(42,168)
  let bbb = random(168,255)
  // let blend = blendMode(SOFT_LIGHT)

  for(var i = 0; i < 3; i++){

    for(var j = 0; j < 3; j++){
  
      let c = [rrr, ggg, bbb]

      rrr = rrr + 255 * random(-1,1)
      ggg = ggg + 84 * random(-1,1)
      bbb = bbb + random(42) * random(-1,1)

      let bg = fill(rrr, ggg, bbb, 50)
      
      push()
      scaled
      blend
      bg
      rect(xxx, yyy, 1000, 1000)
      yyy = yyy+yyymover
      pop()
      
    }
    yyy = 0
    let c = [rrr, ggg, bbb]
      
    rrr = rrr + random(42) * random(-1,1)
    ggg = ggg + random(42) * random(-1,1)
    bbb = bbb + random(42) * random(-1,1)
      
    let bg = fill(rrr, ggg, bbb, 50)
    push()
    scaled
    blend
    bg
    rect(xxx, yyy, 1000, 1000)
    xxx = xxx+xxxmover
    pop()
  }
  
}

function mouseClicked(){
  let x = 0
  let y = 0
  let xmover = 1000
  let ymover = 1000
  let r = random(42,84)
  let g = random(42,168)
  let b = random(168,255)

  let scaled = scale(0.333)
  let comps = 3

  for(var i = 0; i < comps; i++){

    for(var j = 0; j < comps; j++){
  

      let c = [r, g, b]

      r = r + 255 * random(-1,1)
      g = g + 84 * random(-1,1)
      b = b + random(42) * random(-1,1)


      let bg = fill(r, g, b)
     

      let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
      let messyWires = [messyWires1, messyWires2, messyWires3]
      let top = [top1, top2, top3, top4, top5, top6, top7]
      let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
      let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
      let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
      let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
      let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]
  
      push()
      scaled
      bg
      stroke('black')
      strokeWeight(50)
      rect(x, y, 1000, 1000)
      pop()
      
      push()
      scaled
      image(eval(bgWires[floor(random(0,4))]), x, y)
      image(eval(bgWires[floor(random(0,4))]), x, y)
      image(eval(messyWires[floor(random(0,2))]), x, y)
      image(eval(messyWires[floor(random(0,2))]), x, y)
      image(eval(top[floor(random(0,6))]), x, y)
      image(eval(leftSide[floor(random(0,6))]), x, y)
      image(eval(rightSide[floor(random(0,6))]), x, y)
      image(eval(screens[floor(random(0,9))]), x, y)
      image(eval(buttons[floor(random(0,6))]), x, y)
      image(eval(panels[floor(random(0,6))]), x, y)
      pop()

      push()
      scaled
      let d = fill(c[0], c[1], c[2])
      d
      rect(355+x,345+y,300,300)
      y = y+ymover
      pop()
      
    }
    y = 0
    let c = [r, g, b]
      
    r = r + random(42) * random(-1,1)
    g = g + random(42) * random(-1,1)
    b = b + random(42) * random(-1,1)
      
    let bg = fill(r, g, b)

    let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
    let messyWires = [messyWires1, messyWires2, messyWires3]
    let top = [top1, top2, top3, top4, top5, top6, top7]
    let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
    let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
    let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
    let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
    let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]

    push()
    scaled
    bg
    stroke('black')
    strokeWeight(50)
    rect(x, y, 1000, 1000)
    pop()
    
    push()
    scaled
    image(eval(bgWires[floor(random(0,4))]), x, y)
    image(eval(bgWires[floor(random(0,4))]), x, y)
    image(eval(messyWires[floor(random(0,2))]), x, y)
    image(eval(messyWires[floor(random(0,2))]), x, y)
    image(eval(top[floor(random(0,6))]), x, y)
    image(eval(leftSide[floor(random(0,6))]), x, y)
    image(eval(rightSide[floor(random(0,6))]), x, y)
    image(eval(screens[floor(random(0,9))]), x, y)
    image(eval(buttons[floor(random(0,6))]), x, y)
    image(eval(panels[floor(random(0,6))]), x, y)
    pop()

    push()
    scaled
    
    
    rect(355+x,345+y,300,300)
    x = x+xmover
    pop()

  
  }
  let xx = 0
  let yy = 0
  let xxmover = 1000
  let yymover = 1000
  let rr = random(42,84)
  let gg = random(42,168)
  let bb = random(168,255)

  for(var i = 0; i < comps; i++){

    for(var j = 0; j < comps; j++){
  
      let c = [r, g, b]

      rr = rr + 255 * random(-1,1)
      gg = gg + 84 * random(-1,1)
      bb = bb + random(42) * random(-1,1)

      let bg = fill(rr, gg, bb)
      
      push()
      scaled
      rect(355+xx,345+yy,300,300)
      yy = yy+yymover
      pop()
      
    }
    yy = 0
    let c = [rr, gg, bb]
      
    rr = rr + random(42) * random(-1,1)
    gg = gg + random(42) * random(-1,1)
    bb = bb + random(42) * random(-1,1)
      
    let bg = fill(rr, gg, bb)
    push()
    scaled
    rect(355+xx,345+yy,300,300)
    xx = xx+xxmover
    pop()
  }
  
  let xxx = 0
  let yyy = 0
  let xxxmover = 1000
  let yyymover = 1000
  let rrr = random(42,84)
  let ggg = random(42,168)
  let bbb = random(168,255)
  // let blend = blendMode(SOFT_LIGHT)

  for(var i = 0; i < 3; i++){

    for(var j = 0; j < 3; j++){
  
      let c = [rrr, ggg, bbb]

      rrr = rrr + 255 * random(-1,1)
      ggg = ggg + 84 * random(-1,1)
      bbb = bbb + random(42) * random(-1,1)

      let bg = fill(rrr, ggg, bbb, 50)
      
      push()
      scaled
      blend
      bg
      rect(xxx, yyy, 1000, 1000)
      yyy = yyy+yyymover
      pop()
      
    }
    yyy = 0
    let c = [rrr, ggg, bbb]
      
    rrr = rrr + random(42) * random(-1,1)
    ggg = ggg + random(42) * random(-1,1)
    bbb = bbb + random(42) * random(-1,1)
      
    let bg = fill(rrr, ggg, bbb, 50)
    push()
    scaled
    blend
    bg
    rect(xxx, yyy, 1000, 1000)
    xxx = xxx+xxxmover
    pop()
  }
}

setInterval(function(){
  var pickone = [[0,0],[333*3,0],[666*3,0],[0,333*3],[333*3,333*3],[666*3,333*3],[0,666*3],[333*3,666*3],[666*3,666*3]]
  var pickrandom = floor(random(0,9))
  
  var px = pickone[pickrandom][0]
  var py = pickone[pickrandom][1]

  

  let rrr = random(42,84)
  let ggg = random(42,168)
  let bbb = random(168,255)

  let rr = random(42,84)
  let gg = random(42,168)
  let bb = random(168,255)

  let ccc = [rrr, ggg, bbb]
  let cc = [rr, gg, bb]

  let scaled = scale(0.333)

  rrr = rrr + 255 * random(-1,1)
  ggg = ggg + 84 * random(-1,1)
  bbb = bbb + random(42) * random(-1,1)
 
  rr = rr + random(42) * random(-1,1)
  gg = gg + random(42) * random(-1,1)
  bb = bb + random(42) * random(-1,1)

  let bggg = fill(rrr, ggg, bbb)
  
  
 

  let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
  let messyWires = [messyWires1, messyWires2, messyWires3]
  let top = [top1, top2, top3, top4, top5, top6, top7]
  let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
  let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
  let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
  let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
  let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]

  push()
  scaled
  bggg
  stroke('black')
  strokeWeight(50)
  rect(px, py, 1000, 1000)
  pop()
  
  push()
  scaled
  image(eval(bgWires[floor(random(0,4))]), px, py)
  image(eval(bgWires[floor(random(0,4))]), px, py)
  image(eval(messyWires[floor(random(0,2))]), px, py)
  image(eval(messyWires[floor(random(0,2))]), px, py)
  image(eval(top[floor(random(0,6))]), px, py)
  image(eval(leftSide[floor(random(0,6))]), px, py)
  image(eval(rightSide[floor(random(0,6))]), px, py)
  image(eval(screens[floor(random(0,9))]), px, py)
  image(eval(buttons[floor(random(0,6))]), px, py)
  image(eval(panels[floor(random(0,6))]), px, py)
  pop()

  let bgg = fill(rr, gg, bb)
  
  push()
  scaled
  bgg
  rect(355+px,345+py,300,300)
  pop()
  
  
  let r = random(42,84)
  let g = random(42,168)
  let b = random(168,255)
  let c = [r, g, b]
  r = r + random(42) * random(-1,1)
  g = g + random(42) * random(-1,1)
  b = b + random(42) * random(-1,1)
    
  let bg = fill(r, g, b, 50)

  push()
  scaled
  stroke('black')
  bg
  // blendMode(SOFT_LIGHT)
  rect(px, py, 1000, 1000)
  
  pop()

},2000);

// setInterval(function(){
//   var x = 0
//   var y = 0
//   var xmover = 1000
//   var ymover = 1000
//   var r = random(42,84)
//   var g = random(42,168)
//   var b = random(168,255)

//   let scaled = scale(0.1)

//   for(var i = 0; i < 10; i++){

//     for(var j = 0; j < 10; j++){
  

//       let c = [r, g, b]

//       r = r + 255 * random(-1,1)
//       g = g + 84 * random(-1,1)
//       b = b + random(42) * random(-1,1)


//       let bg = fill(r, g, b)
     

//       let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
//       let messyWires = [messyWires1, messyWires2, messyWires3]
//       let top = [top1, top2, top3, top4, top5, top6, top7]
//       let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
//       let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
//       let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
//       let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
//       let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]
  
//       push()
//       scaled
//       bg
//       stroke('black')
//       strokeWeight(50)
//       rect(x, y, 1000, 1000)
//       pop()
      
//       push()
//       scaled
//       image(eval(bgWires[floor(random(0,4))]), x, y)
//       image(eval(bgWires[floor(random(0,4))]), x, y)
//       image(eval(messyWires[floor(random(0,2))]), x, y)
//       image(eval(messyWires[floor(random(0,2))]), x, y)
//       image(eval(top[floor(random(0,6))]), x, y)
//       image(eval(leftSide[floor(random(0,6))]), x, y)
//       image(eval(rightSide[floor(random(0,6))]), x, y)
//       image(eval(screens[floor(random(0,9))]), x, y)
//       image(eval(buttons[floor(random(0,6))]), x, y)
//       image(eval(panels[floor(random(0,6))]), x, y)
//       pop()

//       push()
//       scaled
//       let d = fill(c[0], c[1], c[2])
//       d
//       rect(355+x,345+y,300,300)
//       y = y+ymover
//       pop()
      
//     }
//     y = 0
//     let c = [r, g, b]
      
//     r = r + random(42) * random(-1,1)
//     g = g + random(42) * random(-1,1)
//     b = b + random(42) * random(-1,1)
      
//     let bg = fill(r, g, b)

//       let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
//       let messyWires = [messyWires1, messyWires2, messyWires3]
//       let top = [top1, top2, top3, top4, top5, top6, top7]
//       let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
//       let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
//       let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
//       let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
//       let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]
  
//       push()
//       scaled
//       bg
//       stroke('black')
//       strokeWeight(50)
//       rect(x, y, 1000, 1000)
//       pop()
      
//       push()
//       scaled
//       image(eval(bgWires[floor(random(0,4))]), x, y)
//       image(eval(bgWires[floor(random(0,4))]), x, y)
//       image(eval(messyWires[floor(random(0,2))]), x, y)
//       image(eval(messyWires[floor(random(0,2))]), x, y)
//       image(eval(top[floor(random(0,6))]), x, y)
//       image(eval(leftSide[floor(random(0,6))]), x, y)
//       image(eval(rightSide[floor(random(0,6))]), x, y)
//       image(eval(screens[floor(random(0,9))]), x, y)
//       image(eval(buttons[floor(random(0,6))]), x, y)
//       image(eval(panels[floor(random(0,6))]), x, y)
//       pop()

//       push()
//       scaled
      
      
//       rect(355+x,345+y,300,300)
//       x = x+xmover
//       pop()

    
//   }
// },5000);

  // setInterval(function(){
    // var x = 0
    // var y = 0
    // var xmover = 1000
    // var ymover = 1000
    // var r = random(42,84)
    // var g = random(42,168)
    // var b = random(168,255)
  
    // let scaled = scale(0.1)
  
    // for(var i = 0; i < 10; i++){
  
    //   for(var j = 0; j < 10; j++){
    
    //     let c = [r, g, b]
  
    //     r = r + 255 * random(-1,1)
    //     g = g + 84 * random(-1,1)
    //     b = b + random(42) * random(-1,1)
  
    //     let bg = fill(r, g, b)
       
    //     push()
    //     scaled
    //     rect(355+x,345+y,300,300)
    //     y = y+ymover
    //     pop()
        
    //   }
    //   y = 0
    //   let c = [r, g, b]
        
    //   r = r + random(42) * random(-1,1)
    //   g = g + random(42) * random(-1,1)
    //   b = b + random(42) * random(-1,1)
        
    //   let bg = fill(r, g, b)
    //     push()
    //     scaled
    //     rect(355+x,345+y,300,300)
    //     x = x+xmover
    //     pop()
    // }
  // },5000);
  // setInterval(function(){
  //   var x = 0
  //   var y = 0
  //   var xmover = 1000
  //   var ymover = 1000
  //   var r = random(42,84)
  //   var g = random(42,168)
  //   var b = random(168,255)
  //   var blend = blendMode(EXCLUSION)
  
  //   let scaled = scale(0.25)
  
  //   for(var i = 0; i < 4; i++){
  
  //     for(var j = 0; j < 4; j++){
    
  //       let c = [r, g, b]
  
  //       r = r + 255 * random(-1,1)
  //       g = g + 84 * random(-1,1)
  //       b = b + random(42) * random(-1,1)
  
  //       let bg = fill(r, g, b, 50)
       
  //       push()
  //       scaled
  //       blend
  //       bg
  //       rect(x, y, 1000, 1000)
  //       y = y+ymover
  //       pop()
        
  //     }
  //     y = 0
  //     let c = [r, g, b]
        
  //     r = r + random(42) * random(-1,1)
  //     g = g + random(42) * random(-1,1)
  //     b = b + random(42) * random(-1,1)
        
  //     let bg = fill(r, g, b, 50)
  //       push()
  //       scaled
  //       blend
  //       bg
  //       rect(x, y, 1000, 1000)
  //       x = x+xmover
  //       pop()
  //   }
// },5000);

// function mouseClicked(){
//   let c = [random(84,255), random(84,255), random(84,255)]
//   let d = fill(c[0]+random(21)+21, c[1]+random(21)+21, c[2]+random(21)+21)
//   background(c[0]-42,c[1]-42,c[2]-42)
  
//   let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
//   let messyWires = [messyWires1, messyWires2, messyWires3]
//   let top = [top1, top2, top3, top4, top5, top6, top7]
//   let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
//   let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
//   let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
//   let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
//   let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]



//   image(eval(bgWires[floor(random(0,4))]), x, y)
//   image(eval(bgWires[floor(random(0,4))]), x, y)
//   image(eval(messyWires[floor(random(0,2))]), x, y)
//   image(eval(messyWires[floor(random(0,2))]), x, y)
//   image(eval(top[floor(random(0,6))]), x, y)
//   image(eval(leftSide[floor(random(0,6))]), x, y)
//   image(eval(rightSide[floor(random(0,6))]), x, y)
//   image(eval(screens[floor(random(0,9))]), x, y)
//   image(eval(buttons[floor(random(0,6))]), x, y)
//   image(eval(panels[floor(random(0,6))]), x, y)

//   d
//   rect(355,345,300,300)
  
// }

function draw() {
  
  
}

//  setInterval(function(){
//   let c = [random(84,255), random(84,255), random(84,255)]
//   let d = fill(c[0]+random(21)+21, c[1]+random(21)+21, c[2]+random(21)+21)
//   background(c[0]-42,c[1]-42,c[2]-42)
  
//   let bgWires = [bgWires1, bgWires2, bgWires3, bgWires4]
//   let messyWires = [messyWires1, messyWires2, messyWires3]
//   let top = [top1, top2, top3, top4, top5, top6, top7]
//   let leftSide = [leftSide1, leftSide2, leftSide3, leftSide4, leftSide5, leftSide6, leftSide7]
//   let rightSide = [rightSide1, rightSide2, rightSide3, rightSide4, rightSide5, rightSide6, rightSide7]
//   let screens = [screens1, screens2, screens3, screens4, screens5, screens6, screens7, screens8, screens9, screens10]
//   let buttons = [buttons1, buttons2, buttons3, buttons4, buttons5, buttons6, buttons7]
//   let panels = [panels1, panels2, panels3, panels4, panels5, panels6, panels7]



//   image(eval(bgWires[floor(random(0,4))]), x, y)
//   image(eval(bgWires[floor(random(0,4))]), x, y)
//   image(eval(messyWires[floor(random(0,2))]), x, y)
//   image(eval(messyWires[floor(random(0,2))]), x, y)
//   image(eval(top[floor(random(0,6))]), x, y)
//   image(eval(leftSide[floor(random(0,6))]), x, y)
//   image(eval(rightSide[floor(random(0,6))]), x, y)
//   image(eval(screens[floor(random(0,9))]), x, y)
//   image(eval(buttons[floor(random(0,6))]), x, y)
//   image(eval(panels[floor(random(0,6))]), x, y)

//   d
//   rect(355,345,300,300)
  
//  }, 5000);