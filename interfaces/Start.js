class StartScreen {
    constructor() {

    }

    show() {
        background(bgCol);
    
        noStroke();
        fill(255);
        textAlign(CENTER);
        textFont('Gill Sans', 140);
        text('Word Basket', screenWidth/2, screenHeight/4);

        fill(drkTxtCol);
        textSize(28);
        text('Fruit Defence', screenWidth/2, screenHeight/3.4);

        fill(255);
        textSize(40);
        text('High Score: ' + highScore, screenWidth/2, screenHeight/2.5);

        playButton.show();
        instructionsButton.show();
    }
}

module.exports = StartScreen