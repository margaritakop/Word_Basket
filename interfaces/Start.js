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
        textSize(30);
        text('Fruit Defence', screenWidth/2, screenHeight/3.3);

        fill(255);
        textSize(44);
        text('High Score: ' + highScore, screenWidth/2, screenHeight/2.5);

        playButton.show();
        instructionsButton.show();

        fill('#5ABCB9');
        ellipse(screenWidth/2 + 15, screenHeight - 70, 400, 50);

        blueberries4.showBlueberries();
        melon2.showWatermelon();
        apple.showApple();
        pear.showPear();
        blueberries3.showBlueberries();
        coconut.showCoconut();
        orange.showOrange();
        avocado.showAvocado();
        blueberries.showBlueberries();
        blueberries2.showBlueberries();
        melon.showWatermelon();
    }
}