var x = [];
var y = [];

var sz = 40;

var fondo;
var steps;
var steps0;
var mano;

var ciudadImg;
var ciudadSonido;

var pastizalImg;
var pastizalSonido;

var playaImg;
var playaSonido;

var pozasImg;
var pozasSonido;

var bosqueImg;
var bosqueSonido;

var nocheImg;
var nocheSonido;

function setup() {
  createCanvas(1200, 600);

  fondo = loadImage("luces.GIF");
  mano = loadImage("mano.png");

  ciudadImg = loadImage("ciudad.jpg");
  ciudadSonido = loadSound("ciudad.mp3");

  pastizalImg = loadImage("pastizal.jpg");
  pastizalSonido = loadSound("pastizal.mp3");

  playaImg = loadImage("playa.jpg");
  playaSonido = loadSound("playa.mp3");

  pozasImg = loadImage("pozas.jpg");
  pozasSonido = loadSound("pozas.mp3");

  bosqueImg = loadImage("bosque.jpg");
  bosqueSonido = loadSound("bosque.mp3");

  nocheImg = loadImage("noche.jpg");
  nocheSonido = loadSound("noche.mp3");

  steps = height / 2;
  steps0 = height / 3;
  for (var i = steps / 1; i < width; i += steps) {
    for (var j = steps0 / 1; j < height; j += steps0) {
      x = append(x, i);
      y = append(y, j);
    }
  }
}

function draw() {
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  
 textAlign(CENTER);
    textSize(25);
    fill(255);
    text("Da click y deja presionado en los círculos para ver una fotografía y escucharla",0,30, width);
    

  for (var i = 0; i < x.length; i++) {
    var d = dist(x[i], y[i], mouseX, mouseY);

    if (d <= sz) {
      noStroke();
      fill(58, 96, 110);
    } else {
      noStroke();
      fill(255)
    }
    ellipse(x[i], y[i], sz, sz);
  }

  if (mouseIsPressed == 0) {
    bosqueSonido.stop();
    ciudadSonido.stop();
    nocheSonido.stop();
    pastizalSonido.stop();
    playaSonido.stop();
    pozasSonido.stop();
  } else {
  }

  for (var i = 0; i < x.length; i++) {
    var d = dist(x[i], y[i], mouseX, mouseY);

    if (d <= sz) {
      if (mouseIsPressed) {
        if (x[i] == x[0] && y[i] == y[0]) {
          imageMode(CORNER);
          image(ciudadImg, 0, 0, width, height);

          if (ciudadSonido.isPlaying()) {
          } else {
            ciudadSonido.play();
          }
        }
      }
      if (d <= sz) {
        if (mouseIsPressed) {
          if (x[i] == x[1] && y[i] == y[1]) {
            imageMode(CORNER);
            image(pastizalImg, 0, 0, width, height);

            if (pastizalSonido.isPlaying()) {
            } else {
              pastizalSonido.play();
            }
          }
        }
      }
      if (d <= sz) {
        if (mouseIsPressed) {
          if (x[i] == x[2] && y[i] == y[2]) {
            imageMode(CORNER);
            image(playaImg, 0, 0, width, height);

            if (playaSonido.isPlaying()) {
            } else {
              playaSonido.play();
            }
          }
        }
      }
      if (d <= sz) {
        if (mouseIsPressed) {
          if (x[i] == x[3] && y[i] == y[3]) {
            imageMode(CORNER);
            image(pozasImg, 0, 0, width, height);

            if (pozasSonido.isPlaying()) {
            } else {
              pozasSonido.play();
            }
          }
        }
      }
      if (d <= sz) {
        if (mouseIsPressed) {
          if (x[i] == x[4] && y[i] == y[4]) {
            imageMode(CORNER);
            image(bosqueImg, 0, 0, width, height);

            if (bosqueSonido.isPlaying()) {
            } else {
              bosqueSonido.play();
            }
          }
        }
      }
      if (d <= sz) {
        if (mouseIsPressed) {
          if (x[i] == x[5] && y[i] == y[5]) {
            imageMode(CORNER);
            image(nocheImg, 0, 0, width, height);

            if (nocheSonido.isPlaying()) {
            } else {
              nocheSonido.play();
            }
          }
        }
      }

      // if (x[i] == x[1] && y[i] == y[1]) {
      // ellipse(width / 2, height / 2, 500, 500);
      //}
    }
  }

  //fill(58, 96, 110);
  imageMode(CENTER);
  image(mano, mouseX, mouseY, 90, 100);
}
