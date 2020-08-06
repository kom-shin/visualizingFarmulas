var count = 0;
let N = 255;
let L = 255;
let interval = 1000;

const windowSizeHight = window.innerHeight * 6;

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
  //console.log(scrY);
  textSize(40);
  text(scrY);

  // strokeWeight(2);
  // noFill();
  // box(200,200,200);

  // stroke(255);
  // strokeWeight(200);
  // point(0,0,0);

  if(scrY <= 500){
    drawWave(-window.innerWidth/2,scrY + 500,scrY/10);
  }else{
    drawWave(-window.innerWidth/2,1000,scrY/10);
  }

  //drawCircle(0,500,scrY/10);

  // count  = scrY;
  // if(scrY <= 6000){
  //   drawTorus(0,500);
  // }

  if(scrY > 500 && scrY <= 1300){
    drawRose(0,1700,scrY/100,2);
  }
  if(scrY > 1300 && scrY <= 2300){
    drawRose(0,scrY + 400,scrY/100,2);
  }else{
    drawRose(0,2700,10,2);
  }

  //drawMandelbrot(0,0);

  // strokeWeight(2);
  // noFill();
  // box(200,200,200);

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

function drawHypocycloid(_x,_y,n){
  push();
  noFill();
  translate(_x,_y);
  var x1,x2;
  var y1,y2;
  let radius = window.innerWidth/4;
  let a;

  x1 = 0;
  y1 = 0;

  // for(let i = 0; i<){

  // }

}

function drawMandelbrot(_x,_y){

  var SCALE = 3.0;
  var _x = 0;
  var count = 0;

  push();
  translate(_x,_y);
  strokeWeight(1);
  noFill();

  for (let a = -window.innerWidth / 2; a <= window.innerWidth / 2; a++) {
    for (let b = -window.innerHeight / 2; b <= -window.innerHeight / 2; b++) {
      let x = SCALE * a / window.innerWidth;
      let y = SCALE * b / window.innerHeight;
      let r = calc(x, y);
      stroke(r * 2,r * 2,r * 2);
      rect(a, b, 1, 1);
    }
  }
  pop();
}

function calc(x, y) {
  let tx, ty;
  let zx = 0.0;
  let zy = 0.0;
 
  for (let i = 1; i <= N; i++) {
    tx = zx;
    ty = zy;
 
    zx = tx * tx - ty * ty + x;
    zy = 2 * tx * ty + y;
 
    if (zx * zx + zy * zy > L)
      return i;
  }
  return 0;
}

function drawWave(_x,_y,theta){
  var sx = 0;
  var sy = 0;
  var cx = 0;
  var cy = 0;
  var tx = 0;
  var ty = 0;
  //var theta = 0;
  let a = 100;

  push();
  translate(_x,_y);

  // theta += 0.1;
  //cx += 2;
  // sx += 2;
  //console.log(theta);
  cx = theta * 20;
  sx = theta * 20;
  tx = theta * 20;
  cy = a * cos(theta);
  sy = a * sin(theta);
  ty = a * tan(theta);

  strokeWeight(50);
  stroke(255);
  point(cx,cy);
  point(sx,sy);
  //point(tx,ty);
  strokeWeight(2);
  line(0,0,window.innerWidth,0);

  pop();
}

function drawCircle(_x,_y,theta){
  var x = 0;
  var y = 0;
  let a = 100;

  push();
  translate(_x,_y);

  x = a * cos(theta);
  y = a * sin(theta);

  strokeWeight(50);
  stroke(255);
  point(x,y);

  pop();

}
