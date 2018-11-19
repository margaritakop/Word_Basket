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
var mainScreen = new MainScreen();
var instructions = new Instructions();
var popUp;

var playButton = new Button('Play', screenWidth/2 - 100, screenHeight/2.2);
var instructionsButton = new Button('Instructions', screenWidth/2 - 100, screenHeight/1.6);
var insBackButton = new Button('Back', screenWidth/2 - 100, screenHeight*(7/9));
var popUp;

var basket;
var fruit;
var lives = 3
var displayedScreen = 'start';
var showPop = false;

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
    }
}

function mouseClicked() {
    if (displayedScreen == 'start') {
        playButton.playClicked();
        instructionsButton.insClicked();
    } if (displayedScreen == 'instructions') {
        insBackButton.backClicked();
    } if (displayedScreen == 'main') {
        if (showPop) {
            popUp.aClicked();
            popUp.bClicked();
        }
    }
}

function checkWordsReset() {
    if (Words.length == 0) {
        Words = [{
            word: 'Inferior',
            correctDef: 'Lower in status',
            incorrectDef: 'Shorter individual' },
            {
            word: 'Race',
            correctDef: 'Group of people which share different physical characteristics',
            incorrectDef: 'People from different places' },
            {
            word: 'Religion',
            correctDef: 'The beliefs of a person',
            incorrectDef: 'The way a person acts' },
            {
            word: 'Ethnicity ',
            correctDef: 'State of belonging to a social group that an common tradition',
            incorrectDef: 'Where you are born ' },
            {
            word: 'Discrimination',
            correctDef: 'Treating a particular person or group of people differently',
            incorrectDef: 'Different groups of people' },
            {
            word: 'Violence ',
            correctDef: 'Physical force intended to hurt or damage someone',
            incorrectDef: 'Playing with somebody' },
            {
            word: 'Nationality ',
            correctDef: 'Status of belonging to a particular nation',
            incorrectDef: 'The countries a person has visited' },
            {
            word: 'Age',
            correctDef: 'The number of years someone has been alive',
            incorrectDef: 'The place of birth' },
            {
            word: 'Test',
            correctDef: 'A procedure to establish quality',
            incorrectDef: 'Some coding thing' }];
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