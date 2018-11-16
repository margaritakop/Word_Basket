class StartScreen {
    constructor() {

    }

    show() {
        background('#EEF5DB');
    
        noStroke();
        fill('#FFBA49');
        textAlign(CENTER);
        textFont('Gill Sans', 140)
        text('Word Basket', screenWidth/2, screenHeight/4);

        playButton.show();
    }
}