class PopUp {
    constructor() {
        this.pickCorrect();
    }

    show() {
        fill(255);
        stroke(strkCol);
        strokeWeight(10);
        rect(screenWidth / 2 - 150, 420, 300, 100, 20);

        fill('#EDE5A6');
        stroke(strkCol);
        strokeWeight(10);
        rect(100, 150, 800, 300, 20);

        this.circA();
        this.circB();

        this.textA();
        this.textB();

        textAlign(CENTER);
        textSize(32);
        text(fruit.word.word, screenWidth/2, 495);

        //stops the rest of the game having the stroke properties
        noStroke();
    }

    circA() {
        stroke(strkCol);
        strokeWeight(6);
        if (mouseX > 130 && mouseX < 230 && mouseY > 180 && mouseY < 280) {
            fill(hvrCol);
        } else {
            fill(255);
        }
        ellipse(180, 230, 100);

        noStroke();
        fill('#007EA7');
        textAlign(CENTER);
        textSize(60);
        text('A', 180, 250);
    }

    aClicked() {
        if (mouseX > 130 && mouseX < 230 && mouseY > 180 && mouseY < 280) {
            this.checkAnswerA();
            this.resetPopUp();
        }
    }

    circB() {
        stroke(strkCol);
        strokeWeight(6);
        if (mouseX > 130 && mouseX < 230 && mouseY > 320 && mouseY < 420) {
            fill(hvrCol);
        } else {
            fill(255);
        }
        ellipse(180, 370, 100);

        noStroke();
        fill('#007EA7');
        textAlign(CENTER);
        textSize(60);
        text('B', 180, 390);
    }

    bClicked() {
        if (mouseX > 130 && mouseX < 230 && mouseY > 320 && mouseY < 420) {
            this.checkAnswerB();
            this.resetPopUp();
        }
    }

    textA() {
        fill('#007EA7');
        textAlign(LEFT);
        textSize(24);
        //the text shown will come from the word object  
        text(this.aText, 260, 240);
    }

    textB() {
        fill('#007EA7');
        textAlign(LEFT);
        textSize(24);
        //the text shown will come from the word object
        text(this.bText, 260, 380);
    }

    checkAnswerA() {
        if (this.aText == fruit.word.correctDef) {
            score++;
        }
    }

    checkAnswerB() {
        if (this.bText == fruit.word.correctDef) {
            score++;
        }
    }

    resetPopUp() {
        fruit.pickWord();
        this.pickCorrect();
        popUp = new PopUp();
        showPop = false;
        checkWordsReset();
    }

    pickCorrect() {
        if (Math.floor(Math.random() * 2) == 1) {
            this.aText = fruit.word.correctDef
            this.bText = fruit.word.incorrectDef
        } else {
            this.aText = fruit.word.incorrectDef
            this.bText = fruit.word.correctDef
        }
    }
}