class MainScreen {
    constructor() {

    }

    show() {
        background(bgCol);

        fill(btnCol);
        for (let i = 20; i < screenWidth + 120; i += 90) {
            ellipse(i, 40, 120);
        }

        fill('#4E6E58');
        for (let i = 0; i < screenWidth + 10; i += 10) {
            ellipse(i, screenHeight - 5, 20);
        }

        basket.moveMouse();
        basket.show();

        this.heart(50, 30);
        this.heart(100, 30);
        this.heart(150, 30);
    }
    
    heart(x, y) {
        fill('#FF4B3E');
        arc(x - 20, y, 20, 20, PI, 0, OPEN);
        arc(x, y, 20, 20, PI, 0, OPEN);
        triangle(x - 30, y, x + 10, y, x - 10, y + 25);

        fill(255);
        ellipse(x + 2, y - 3, 4);
    }
}