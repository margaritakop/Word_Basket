class Instructions {
    constructor() {

    }

    show() {
        background(bgCol);

        fill('#EDE5A6');
        stroke(strkCol);
        strokeWeight(10);
        rect(200, 50, screenWidth - 400, screenHeight - 100, 20);

        fill(drkTxtCol);
        noStroke();
        textSize(64);
        text('How to play', screenWidth/2, 140);

        textAlign(LEFT);
        textSize(32);
        text("- Use the mouse to move the\n  basket", screenWidth/4, 210);
        text("- Collect the falling fruit", screenWidth/4, 320);
        text("- Answer the pop quiz correctly\n  to earn an extra point", screenWidth/4, 380);
        text("- You have 3 lives", screenWidth/4, 490);
        text("- Failing to catch the fruit makes\n  you lose a life", screenWidth/4, 550);

        insBackButton.show();
    }
}