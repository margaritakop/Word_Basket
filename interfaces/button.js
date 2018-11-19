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
        text(this.content, this.x + 100, this.y + 58);
    }

    playClicked() {
        if (mouseX > this.x &&
            mouseX < this.x + 200 &&
            mouseY > this.y &&
            mouseY < this.y + 100) {
                fruit = new Fruit()
                fruit.pickword()
                basket = new Basket();
                displayedScreen = 'main';
<<<<<<< HEAD
                
            }
    }
}
=======

                //Generate fruit objects to fall
                //spawnFruit()
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
                displayedScreen = 'start';
            }
    }
}
>>>>>>> master
