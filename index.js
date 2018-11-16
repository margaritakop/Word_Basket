//require will be used for testing, the files are called in the script tag of index.html

// var Fruit = require('./models/Fruit');
// var Word = require('./models/Word');

var screenHeight = 800;
var screenWidth = 1000;
var score = 0;

var startScreen = new StartScreen();
var mainScreen = new MainScreen();

var playButton = new Button('Play', screenWidth/2 - 100, screenHeight/2.8);

var basket = new Basket();

var displayedScreen = 'main';

function setup() {
    createCanvas(screenWidth, screenHeight);
}

function draw() {
    if (displayedScreen == 'start') {
        startScreen.show();
    } if (displayedScreen == 'main') {
        mainScreen.show();
    }
}

function mouseClicked() {
    if (displayedScreen == 'start') {
        playButton.playClicked();
    }
}