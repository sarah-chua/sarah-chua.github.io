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

// set default letter sizes and margin
let size = (width/6)-30;
let topMargin = (height/2)-(size/2);
let leftMargin = (size+60)/2;

let sarah = {
    "s": {
        "img": 'assets/s.png',
        "obj": null,
        "cood": [leftMargin, topMargin],
        "grabbed": false,
        "card": `<div class="card" style="width: 18rem;">
            <img src="./assets/profile.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center"><u>About me</u></h5>
            <p class="card-text">i am a surviving computer science student, interested in the applications of tech and design to enhance learning and education.</p>
        </div>`,
        "html": null
    },
    "a1": {
        "img": 'assets/a.png',
        "obj": null,
        "cood": [leftMargin+size+30, topMargin],
        "grabbed": false,
        "card": `<div class="card" style="width: 18rem;">
            <img src="./assets/growup.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center"><u>grow up</u></h5>
            <p class="card-text">i like collecting tamagotchis and sylvanian families. some say i need to grow up...</p>
        </div>`,
        "html": null
    },
    "r": {
        "img": 'assets/r.png',
        "obj": null,
        "cood": [leftMargin+(size*2)+60, topMargin],
        "grabbed": false,
        "card": `<div class="card" style="width: 18rem;">
            <img src="./assets/plant.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center"><u>not so green fingers</u></h5>
            <p class="card-text">a "fun" fact about me is that i've succeed in killing every plant i have owned</p>
        </div>`,
        "html": null
    },
    "a2": {
        "img": 'assets/a.png',
        "obj": null,
        "cood": [leftMargin+(size*3)+90, topMargin],
        "grabbed": false,
        "card": `<div class="card" style="width: 18rem;">
            <img src="./assets/fun.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center"><u>chingus</u></h5>
            <p class="card-text">i may be a huge introvert but i treasure the time i spend with my close friends greatly!</p>
        </div>`,
        "html": null
    },
    "h": {
        "img": 'assets/h.png',
        "obj": null,
        "cood": [leftMargin+(size*4)+120, topMargin],
        "grabbed": false,
        "card": `<div class="card" style="width: 18rem; position:absolute;">
            <img src="./assets/dream.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center"><u>dreaming</u></h5>
            <p class="card-text">i hope to retire to a farm when i am older and spend my days drinking coffee</p>
        </div>`,
        "html": null
    }
}

let bg;

function preload() {
    bg = loadImage('assets/background.gif');
    sarah.s.obj = loadImage(sarah.s.img);
    sarah.a1.obj = loadImage(sarah.a1.img);
    sarah.r.obj = loadImage(sarah.r.img);
    sarah.a2.obj = loadImage(sarah.a2.img);
    sarah.h.obj = loadImage(sarah.h.img);
}

function setup() {
    console.log('--start setup--');
    console.log(height);
    console.log(width)

    background(bg);
    var cnv = createCanvas(width, height);
    cnv.parent("big-section");
    cnv.elt.style.position = "absolute";
    dimX = width / 3;
    dimY = height / 2;
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
    background(bg);

    image(sarah.s.obj, sarah.s.cood[0], sarah.s.cood[1], size, size);
    image(sarah.a1.obj, sarah.a1.cood[0], sarah.a1.cood[1], size, size);
    image(sarah.r.obj, sarah.r.cood[0], sarah.r.cood[1], size, size);
    image(sarah.a2.obj, sarah.a2.cood[0], sarah.a2.cood[1], size, size);
    image(sarah.h.obj, sarah.h.cood[0], sarah.h.cood[1], size, size);

    showOnHover();
}

function mouseIsInRect(x, y, width, height) {
    return (mouseX > x) && (mouseX < x + width) && (mouseY > y) && (mouseY < y + height)
}

function mousePressed() {

    // remove all cards
    for(letter in sarah){
        if(sarah[letter].html != null){
            sarah[letter].html.remove();
            sarah[letter].html = null;
        }
    }

    if(mouseIsInRect(sarah.h.cood[0], sarah.h.cood[1], size, size)){
        sarah.h.grabbed = true;
    } else if(mouseIsInRect(sarah.a2.cood[0], sarah.a2.cood[1], size, size)){
        sarah.a2.grabbed = true;
    } else if(mouseIsInRect(sarah.r.cood[0], sarah.r.cood[1], size, size)){
        sarah.r.grabbed = true;
    } else if(mouseIsInRect(sarah.a1.cood[0], sarah.a1.cood[1], size, size)){
        sarah.a1.grabbed = true;
    } else if(mouseIsInRect(sarah.s.cood[0], sarah.s.cood[1], size, size)){
        sarah.s.grabbed = true;
    }
}

function mouseReleased() {
    for(letter in sarah){
        sarah[letter].grabbed = false;
    }
}

function mouseDragged() {
    if (sarah.h.grabbed) {
        sarah.h.cood[0] = mouseX;
        sarah.h.cood[1] = mouseY;
    } else if (sarah.a2.grabbed) {
        sarah.a2.cood[0] = mouseX;
        sarah.a2.cood[1] = mouseY;
    } else if (sarah.r.grabbed) {
        sarah.r.cood[0] = mouseX;
        sarah.r.cood[1] = mouseY;
    } else if (sarah.a1.grabbed) {
        sarah.a1.cood[0] = mouseX;
        sarah.a1.cood[1] = mouseY;
    } else if (sarah.s.grabbed) {
        sarah.s.cood[0] = mouseX;
        sarah.s.cood[1] = mouseY;
    }
}

function showOnHover(){
    if(mouseIsInRect(sarah.h.cood[0], sarah.h.cood[1], size, size) && !mouseIsPressed){
        // set all others to null
        for(letter in sarah){
            if(sarah[letter].html != null && letter != "h"){
                sarah[letter].html.remove();
                sarah[letter].html = null;
            }
        }

        // show H
        if(sarah.h.html == null){
            sarah.h.html = createDiv(sarah.h.card);
            sarah.h.html.position(mouseX, mouseY);
            sarah.h.html.parent('big-section');
        } else {
            sarah.h.html.position(mouseX, mouseY);
        }
    } else if(mouseIsInRect(sarah.a2.cood[0], sarah.a2.cood[1], size, size)){
        // set all others to null
        for(letter in sarah){
            if(sarah[letter].html != null && letter != "a2"){
                sarah[letter].html.remove();
                sarah[letter].html = null;
            }
        }

        // show A2
        if(sarah.a2.html == null){
            sarah.a2.html = createDiv(sarah.a2.card);
            sarah.a2.html.position(mouseX, mouseY);
            sarah.a2.html.parent('big-section');
        } else {
            sarah.a2.html.position(mouseX, mouseY);
        }
    } else if(mouseIsInRect(sarah.r.cood[0], sarah.r.cood[1], size, size)){
        // set all others to null
        for(letter in sarah){
            if(sarah[letter].html != null && letter != "r"){
                sarah[letter].html.remove();
                sarah[letter].html = null;
            }
        }

        // show H
        if(sarah.r.html == null){
            sarah.r.html = createDiv(sarah.r.card);
            sarah.r.html.position(mouseX, mouseY);
            sarah.r.html.parent('big-section');
        } else {
            sarah.r.html.position(mouseX, mouseY);
        }
    } else if(mouseIsInRect(sarah.a1.cood[0], sarah.a1.cood[1], size, size)){
        // set all others to null
        for(letter in sarah){
            if(sarah[letter].html != null && letter != "a1"){
                sarah[letter].html.remove();
                sarah[letter].html = null;
            }
        }

        // show H
        if(sarah.a1.html == null){
            sarah.a1.html = createDiv(sarah.a1.card);
            sarah.a1.html.position(mouseX, mouseY);
            sarah.a1.html.parent('big-section');
        } else {
            sarah.a1.html.position(mouseX, mouseY);
        }
    } else if(mouseIsInRect(sarah.s.cood[0], sarah.s.cood[1], size, size)){
        // set all others to null
        for(letter in sarah){
            if(sarah[letter].html != null && letter != "s"){
                sarah[letter].html.remove();
                sarah[letter].html = null;
            }
        }

        // show H
        if(sarah.s.html == null){
            sarah.s.html = createDiv(sarah.s.card);
            sarah.s.html.position(mouseX, mouseY);
            sarah.s.html.parent('big-section');
        } else {
            sarah.s.html.position(mouseX, mouseY);
        }
    } else {
        for(letter in sarah){
            if(sarah[letter].html != null){
                sarah[letter].html.remove();
                sarah[letter].html = null;
            }
        }
    }
}