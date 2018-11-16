class StartScreen {
    constructor() {

    }

    show() {
        background(50);
    
        stroke(40);
        strokeWeight(8);
        fill('#FFBA49');
        textAlign(CENTER);
        textFont('Gill Sans', 120)
        text('Word Basket', screenWidth/2, screenHeight/4);

        playButton.show();
    }
}