class EndScreen {
    constructor() {

    }
    
    show() {
        background(bgCol);

        noStroke();
        fill(255);
        textAlign(CENTER);
        textFont('Gill Sans', 140);
        text('Game Over!', screenWidth/2, screenHeight/4);

        fill(drkTxtCol);
        textSize(36);
        text('High Score: ' + highScore, screenWidth/2, screenHeight/3.1);

        fill(255);
        textSize(40);
        text('Final Score: ' + score, screenWidth/2, screenHeight/2.5);

        restartButton.show();
        homeButton.show();
    }
}