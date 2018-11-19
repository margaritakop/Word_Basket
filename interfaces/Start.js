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

        playButton.show();
    }
}