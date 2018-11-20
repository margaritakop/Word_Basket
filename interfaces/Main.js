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

        
            if (lives == 3) {
                this.heart(50, 30);
                this.heart(100, 30);
                this.heart(150, 30);
            }
            if (lives == 2) {
                this.heart(50, 30);
                this.heart(100, 30);
            }
            if (lives == 1) {
                this.heart(50, 30);
            }
            if (lives == 0) {
                checkHighScore();
                startScreen = undefined;
                endScreen = new EndScreen();
                displayedScreen = 'end';
            }

        if (showPop != true){
            if (fruit.word == '') {
                fruit.y = fruit.y + fruitSpeed

                if (fruit.fruitType == 'watermelon') {
                    fruit.showWatermelon();
                } else if (fruit.fruitType == 'pear') {
                    fruit.showPear();
                } else if (fruit.fruitType == 'coconut') {
                    fruit.showCoconut();
                }

            } else {
                fruit.y = fruit.y + fruitSpeed
                fruit.showLemon();
            }
            }
        
        if(620 < fruit.y 
            && basket.x - 120 < fruit.x  
            && fruit.x < basket.x + 120
            ){
            checkWordsReset()
            fruitSpeed = 5 + (score / 6);
            fruit.location();
            thud.play();
            score++
            if (fruit.word == '') {
                showPop = false;
                fruit.pickWord();
                fruit.pickFruit();
                //when picking word, create new popup object
                popUp = new PopUp();
            } else {
                showPop = true;
            }
        } 
        if(750 < fruit.y){
            checkWordsReset();
            fruit.location();
            splat.play();
            lives --
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