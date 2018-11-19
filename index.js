//require will be used for testing, the files are called in the script tag of index.html

// var Fruit = require('./models/Fruit');
// var Words = require('./models/Words')
// var Word = require('./models/Word')
//console.log(Words)

var screenHeight = 800;
var screenWidth = 1000;
var score = 0;

//colour palette
var bgCol = '#93E1D8';
var btnCol = '#DDFFF7';
var strkCol = '#545E75';
var hvrCol = '#75E4B3';

var startScreen = new StartScreen();
var mainScreen = new MainScreen();
var instructions = new Instructions();
var popUp = new PopUp();

var playButton = new Button('Play', screenWidth/2 - 100, screenHeight/2.8);

var basket;
var lemon = new Fruit();

var displayedScreen = 'start';
var showPop = false;

function setup() {
    createCanvas(screenWidth, screenHeight);
}

function draw() {
    if (displayedScreen == 'start') {
        startScreen.show();
    } if (displayedScreen == 'main') {
        mainScreen.show();
        if (showPop) {
            popUp.show();
        }
    }
}

function mouseClicked() {
    if (displayedScreen == 'start') {
        playButton.playClicked();
    } else if (displayedScreen == 'main') {
        showPop = !showPop;
    }
}

