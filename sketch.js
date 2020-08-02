var count = 0;

const windowSizeHight = window.innerHeight * 6;
// document.getElementById('main').innerHTML = 
// new Array(1000).fill(255).map((d,i) => `${i+1}行目…………………………`).join('<br />');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvasSetup;
}
function setup() {
  canvas = createCanvas(windowWidth, windowSizeHight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(0);
  frameRate(120);

  //canvas.style('position','fixed');
}
function draw() {
  translate(0,-windowSizeHight/2);
  background(0);
  var scrY = window.scrollY;
  console.log(scrY);
  textSize(40);
  text(scrY);

  // strokeWeight(2);
  // noFill();
  // box(200,200,200);

  strokeWeight(200);
  point(0,0,0);

  // count  = scrY;
  // if(scrY <= 6000){
  //   drawTorus(0,500);
  // }

  drawRose(0,scrY + 400,scrY/100,2);
  // strokeWeight(200);
  // stroke(255,0,0);
  // point(0,200,0);
}

function drawTorus(_x,_y){
  var x,x2,y,y2,z,z2;
  var u,v,u2,v2;
  var r,R;
  var d;

  push();
  translate(_x, _y);
  noFill();
  stroke(255);
  rotateX(70);

  r = width/10;
  R = r * 2;
  
  u = random(TWO_PI);
  v = random(TWO_PI);
  u2 = random(TWO_PI);
  v2 = random(TWO_PI);
  
  x = (R + r * cos(u)) * cos(v);
  y = (R + r * cos(u)) * sin(v);
  z = r * sin(u);
  
  x2 = (R + r * cos(u2)) * cos(v2);
  y2 = (R + r * cos(u2)) * sin(v2);
  z2 = r * sin(u2);
  
  d = dist(x,y,z,x2,y2,z2);
  
  if(d <= R){
    stroke(255,255,255,40);
    strokeWeight(0.3);
    line(x,y,z,x2,y2,z2);
    
    stroke(255);
    strokeWeight(5);
    point(x,y,z);
    point(x2,y2,z2);
  }
  pop();
}

function drawRose(_x,_y,n,d){
  push();
  noFill();
  translate(_x,_y);
  var x1,x2;
  var y1,y2;
  let radius = window.innerWidth/4;
  let theta;
  let a;
  let numc = 600;

  x1 = 0;
  y1 = 0;

  for(let i=0; i<=numc * d; i++){
    theta = i * 360.0 / numc;
    a = radius * sin(n / d * theta);
    x2 = a * cos(theta);
    y2 = a * sin(theta);
    strokeWeight(0.5);
    stroke(255,255,255,50);
    line(x1,y1,x2,y2);
    x1 = x2;
    y1 = y2;
  }
  pop();
}

// function keyPressed(){
//   if(keyPressed){
//     drawTorus();
//   }
// }