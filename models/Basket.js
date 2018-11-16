class Basket {
    constructor() {
        this.x = 500;
        this.y = 700;
    }

    show() {
        noStroke();

        fill('#D4B483');
        arc(this.x, this.y, 120, 120, 0, PI, OPEN);
        rect(this.x - 80, this.y - 30, 160, 30);
        arc(this.x, this.y - 30, 120, 120, PI, 0, OPEN);
        fill(50);
        arc(this.x, this.y - 30, 100, 100, PI, 0, OPEN);
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