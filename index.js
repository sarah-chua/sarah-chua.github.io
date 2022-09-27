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
    dim = width / 2;
    background(0);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    ellipseMode(RADIUS);
    frameRate(1);
}

function draw() {
    background(0);
    for (let x = 0; x <= width; x += dim) {
        drawGradient(x, height / 2);
    }
}
  
function drawGradient(x, y) {
    let radius = dim / 2;
    let h = random(0, 360);
    for (let r = radius; r > 0; --r) {
        fill(h, 90, 90);
        ellipse(x, y, r, r);
        h = (h + 1) % 360;
    }
}
  