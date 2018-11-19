class PopUp {
    constructor() {
        
    }

    show() {
        fill('#EDE5A6');
        stroke(strkCol);
        strokeWeight(10);
        rect(100, 150, 800, 300, 20);

        this.circA();
        this.circB();

        this.textA();
        this.textB();

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

    textA() {
        fill('#007EA7');
        textAlign(LEFT);
        textSize(24);
        text('A shorter individual', 260, 240);
    }

    textB() {
        fill('#007EA7');
        textAlign(LEFT);
        textSize(24);
        text('A lesser individual', 260, 380);
    }
}