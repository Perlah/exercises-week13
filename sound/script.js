/**
 * Here's where our JavaScript goes
 */

// We still define our variables here
var amenBreak;


function preload() {
  createCanvas(windowWidth, windowHeight)
  amenBreak = loadSound("amen.mp3")
}

function setup() {
  // get things started

  amenBreak.loop();


}

function draw() {
  background(0);

  var speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  amenBreak.rate(speed);

  // go!

  fill(255);
  ellipse(width/2, mouseY, 20, 20);
}
