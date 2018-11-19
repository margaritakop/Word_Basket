class MainScreen {
    constructor() {

    }

    show() {
        background(bgCol);

        fill(btnCol);
        for (let x = 20; x < screenWidth + 120; x += 90) {
            ellipse(x, 60, 120);
        }

        fill(255);
        for (let x = 20; x < screenWidth + 120; x += 90) {
            ellipse(x, 20, 120);
        }

        fill(btnCol);
        for (let x = 20; x < screenWidth + 120; x += 90) {
            ellipse(x, -20, 120);
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

        if (keyIsDown(UP_ARROW)) {
            showPop = true;
        }
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