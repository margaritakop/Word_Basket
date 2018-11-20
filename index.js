//require will be used for testing, the files are called in the script tag of index.html

// var Fruit = require('./models/Fruit');
// var Words = require('./models/Words')
// var Word = require('./models/Word')
//console.log(Words)

var screenHeight = 800;
var screenWidth = 1000;
var highScore = 0;
var score = 0;

//colour palette
var bgCol = '#93E1D8';
var btnCol = '#DDFFF7';
var strkCol = '#545E75';
var hvrCol = '#75E4B3';
var drkTxtCol = '#007EA7';

var startScreen = new StartScreen();
var mainScreen;
var instructions = new Instructions();
var endScreen;
var popUp;

var playButton = new Button('Play', screenWidth/2 - 100, screenHeight/2.2);
var instructionsButton = new Button('Instructions', screenWidth/2 - 100, screenHeight/1.6);
var insBackButton = new Button('Back', screenWidth/2 - 100, screenHeight*(7/9));
var restartButton = new Button('Play again', screenWidth/2 - 100, screenHeight/2.2);
var homeButton = new Button('Home', screenWidth/2 - 100, screenHeight/1.6);

var basket;
var fruit;
var lives = 3
var displayedScreen = 'start';
var showPop = false;

var ding = new Audio('./sounds/ding.mp3');
var wrong = new Audio('./sounds/wrong.mp3');
var splat = new Audio('./sounds/splat.mp3');

function setup() {
    createCanvas(screenWidth, screenHeight);
}

function draw() {
    if (displayedScreen == 'start') {
        startScreen.show();
    } if (displayedScreen == 'instructions') {
        instructions.show();
    } if (displayedScreen == 'main') {
        mainScreen.show();
        if (showPop) {
            popUp.show();
        }
    } if (displayedScreen == 'end') {
        endScreen.show();
    }
}

function mouseClicked() {
    if (displayedScreen == 'start') {
        playButton.playClicked();
        instructionsButton.insClicked();
    } else if (displayedScreen == 'instructions') {
        insBackButton.backClicked();
    } else if (displayedScreen == 'main') {
        if (showPop) {
            popUp.aClicked();
            popUp.bClicked();
        }
    } else if (displayedScreen == 'end') {
        restartButton.playClicked();
        homeButton.backClicked();
    }
}

function checkWordsReset() {
    if (Words.length == 0) {
        $.getJSON(staticUrl, function(data) {
            for (let i = 0; i < data.feed.entry.length; i++){
                let word = data.feed.entry[i].title.$t
                let correctDef = data.feed.entry[i].gsx$correctdefinition.$t
                let incorrectDef = data.feed.entry[i].gsx$incorrectdefinition.$t
                Words.push(new Word(word, correctDef, incorrectDef))
            }
      console.log('updated words: ', Words)
  });
    }
}

function checkHighScore() {
    if (score > highScore) {
        highScore = score;
    }
}

var staticUrl = 'https://spreadsheets.google.com/feeds/list/1o9w4hMb1L05AyZjHSrQPZpdDQEQpY75Iaeoy9pQBzd4/od6/public/values?alt=json';

$.getJSON(staticUrl, function(data) {
          for (let i = 0; i < data.feed.entry.length; i++){
              let word = data.feed.entry[i].title.$t
              let correctDef = data.feed.entry[i].gsx$correctdefinition.$t
              let incorrectDef = data.feed.entry[i].gsx$incorrectdefinition.$t
              Words.push(new Word(word, correctDef, incorrectDef))
          }
    console.log('updated words: ', Words)
});