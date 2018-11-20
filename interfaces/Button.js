class Button {
    constructor(content, x, y) {
        this.content = content;
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(strkCol);
        strokeWeight(6);
        if (mouseX > this.x &&
            mouseX < this.x + 200 &&
            mouseY > this.y &&
            mouseY < this.y + 100) {
                fill(hvrCol);
            } else {
                fill(btnCol);
            }
        rect(this.x, this.y, 200, 100, 10);

        noStroke();
        fill(drkTxtCol);
        textAlign(CENTER);
        textFont('Gill Sans', 32);
        text(this.content, this.x + 100, this.y + 59);
    }

    playClicked() {
        if (mouseX > this.x &&
            mouseX < this.x + 200 &&
            mouseY > this.y &&
            mouseY < this.y + 100) {
                ping.play();
                fruitSpeed = 5;
                lives = 3;
                score = 0;
                mainScreen = new MainScreen();
                displayedScreen = 'main';
                fruit = new Fruit(400, 0)
                fruit.pickWord()
                popUp = new PopUp();
                basket = new Basket();
            }
    }

    insClicked() {
        if (mouseX > this.x &&
            mouseX < this.x + 200 &&
            mouseY > this.y &&
            mouseY < this.y + 100) {
                displayedScreen = 'instructions';
            }
    }

    backClicked() {
        if (mouseX > this.x &&
            mouseX < this.x + 200 &&
            mouseY > this.y &&
            mouseY < this.y + 100) {
                endScreen = undefined;
                startScreen = new StartScreen();
                displayedScreen = 'start';
            }
    }
}
