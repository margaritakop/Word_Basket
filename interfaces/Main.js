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

        fruit.showFruit(400, 400)

        //Task 1
        //TODO refactor fruit x and to be attributes, like for basket
        //TODO decrease y of fruit to fall
        //TODO check if basket and fruit collided
        //if yes -> make new popup and shop popup
        //if not -> loose a life
        //display in random order


        //Task 2
        //updating scores one point one for correct answer
        //on pupup click correct? is text == fruit.word.correctDef
        //lose life if not caught
        //if wrong answer -> add the word back to the Words

        //Task 3
        //fruits without words?
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