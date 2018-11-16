class MainScreen {
    constructor() {

    }

    show() {
        background(50);

        fill('#FFBA49');
        textAlign(CENTER);
        textFont('Gill Sans', 32);
        text('Score : ' + score, screenWidth - 100, 50)

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
        triangle(x - 30, y, x + 10, y, x - 10, y + 25)
    }
}