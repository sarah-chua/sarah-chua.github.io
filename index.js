console.log('--start index.js--');
let width = Math.max(window.screen.width, window.innerWidth)
let height = Math.max(window.screen.height, window.innerHeight)
console.log(width);

window.addEventListener("resize", function(){
    console.log('--resize event--');
    width = Math.max(window.screen.width, window.innerWidth);
    height = Math.max(window.screen.height, window.innerHeight);
    setup();
})

function setup() {
    console.log('--start setup--');
    console.log(height);
    console.log(width)

    var cnv = createCanvas(width, height);
    cnv.parent("big-section");
    dimX = width / 3;
    dimY = height / 2;
    background(0);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    ellipseMode(RADIUS);
    frameRate(2);
}

function draw() {
    background(0);
    for (let x = 0; x <= width; x += dimX) {
        for (let y = 0; y <=height; y += dimY){
            drawGradient(x,y);
        }
    }
}
  
function drawGradient(x, y) {
    let radius = dimY / 2; // radius is half of diameter
    let h = random(0, 280); // set hue
    for (let r = radius; r > 0; --r) {
        fill(h, 70, 80);
        ellipse(x, y, r, r);
        h = (h + 1) % 360;
    }
}
  