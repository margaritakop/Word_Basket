class Basket {
    constructor() {
        this.x = 500;
        this.y = 730;
    }

    show() {
        noStroke();

        fill('#D4B483');
        arc(this.x, this.y, 120, 120, 0, PI, OPEN);
        rect(this.x - 80, this.y - 30, 160, 30);
        fill('#6C534E');
        rect(this.x - 80, this.y - 10, 160, 10);
        arc(this.x, this.y - 30, 120, 120, PI, 0, OPEN);
        fill(bgCol);
        arc(this.x, this.y - 30, 100, 100, PI, 0, OPEN);

        fill(255);
        textAlign(CENTER);
        textSize(50);
        text(score, this.x, this.y + 45);
    }

    moveMouse() {
        this.x = mouseX;

        if (mouseX > 940) {
            this.x = 920;
        }

        if (mouseX < 60) {
            this.x = 80;
        }
    }
}