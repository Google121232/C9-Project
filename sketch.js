var btn_red;
var btn_green;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  btn_red = createButton("red");
  btn_red.position(100,200);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("green");
  btn_green.position(200,200);
  btn_green.mousePressed(green_bg);

  btn_blue = createButton("blue");
  btn_blue.position(300,200);
  btn_blue.mousePressed(blue_bg);
}

function draw() {
  background(r,g,b);
}


function red_bg() {
  r = 100;
  g = 0;
  b = 0;
}

function green_bg() {
  r = 0;
  g = 100;
  b = 0;
}

function blue_bg() {
  r = 0;
  g = 0;
  b = 100;
}