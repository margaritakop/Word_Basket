class Fruit {
    constructor(x, y) {
        this.word = ''
        this.x = x;
        this.y = y;
        this.fruitType = 'watermelon';
    }
    
    pickWord() {
        let i = Math.floor(Math.random()*Words.length)
        //add a chance factor if chosen word is actually assigned
        if (Math.random() > 0.875){
            this.word = Words[i]
            //remove the word from the Words array
            Words.splice(i, 1)
        } else {
            this.word = ''
        }
    }

    location() {
        this.y = 0;
        this.x = Math.random() * 950
    }

    showLemon() {
        fill('#FCEC52');
        ellipse(this.x + 40, this.y, 80, 60);
        ellipse(this.x, this.y, 10);
        ellipse(this.x + 80, this.y, 10);
        fill('#007EA7');
        textSize(20)
        if(fruit.word != ''){
        text(fruit.word.word[0], this.x + 40, this.y + 10);
        }
    }

    showPear() {
        fill('#AFFC41');
        ellipse(this.x, this.y, 60);
        ellipse(this.x, this.y - 20, 40, 60);

        fill('#946846');
        rect(this.x - 3, this.y - 65, 6, 20);
    }

    showWatermelon() {
        fill('#2A7221');
        arc(this.x, this.y, 100, 100, 0, PI, OPEN);
        fill(255);
        arc(this.x, this.y, 85, 85, 0, PI, OPEN);
        fill('#F2545B');
        arc(this.x, this.y, 80, 80, 0, PI, OPEN);
        fill(75);
        ellipse(this.x, this.y + 25, 8, 6);
        ellipse(this.x - 20, this.y + 12, 8, 6);
        ellipse(this.x + 20, this.y + 12, 8, 6);
    }

    showCoconut() {
        fill('#6A3E37');
        ellipse(this.x, this.y, 80);
        fill(255);
        ellipse(this.x, this.y, 65);
        fill(220);
        ellipse(this.x, this.y, 50);
    }

    showOrange() {
        fill('#F1A208');
        ellipse(this.x, this.y, 80);
        fill('#F8F4A6');
        ellipse(this.x, this.y, 72);
        fill('#F1A208');
        ellipse(this.x, this.y, 65);
        fill('#F8F4A6');
        ellipse(this.x, this.y, 15);
        fill(255);
        ellipse(this.x, this.y, 10);
        ellipse(this.x, this.y - 20, 2, 4);
        ellipse(this.x, this.y + 20, 2, 4);
        ellipse(this.x + 20, this.y, 4, 2);
        ellipse(this.x - 20, this.y, 4, 2);
    }
    
    showAvocado() {
        fill(50);
        ellipse(this.x, this.y, 65, 82);
        fill('#8CC084');
        ellipse(this.x, this.y, 60, 75);
        fill('#C1D7AE');
        ellipse(this.x, this.y, 50, 65);
        fill('#ECDCB0');
        ellipse(this.x, this.y, 40, 55);
        fill(80);
        ellipse(this.x, this.y + 10, 28);
        fill('#806443');
        ellipse(this.x, this.y + 10, 25);
        fill(220);
        ellipse(this.x + 5, this.y + 5, 10);
        fill(255);
        ellipse(this.x + 5, this.y + 5, 6);
    }

    showApple() {
        fill('#946846');
        rect(this.x + 10, this.y - 45, 4, 16);
        fill('#A33B20');
        ellipse(this.x, this.y, 54, 74);
        ellipse(this.x + 25, this.y, 54, 74);
        fill('#F8FFE5');
        ellipse(this.x, this.y, 50, 70);
        ellipse(this.x + 25, this.y, 50, 70);
        fill('#F3FFC6');
        ellipse(this.x + 12, this.y, 35, 50);
        fill(80);
        ellipse(this.x + 5, this.y, 5, 10);
        ellipse(this.x + 20, this.y, 5, 10);
    }

    showBlueberries() {
        fill('#2F2963');
        ellipse(this.x, this.y, 30);
        fill('#454372');
        ellipse(this.x, this.y - 8, 15, 10);
        fill(25);
        ellipse(this.x, this.y - 10, 8);
        fill(225)
        ellipse(this.x, this.y - 10, 2);
        
        fill('#2F2963');
        ellipse(this.x + 20, this.y, 30);
        fill('#454372');
        ellipse(this.x + 20, this.y - 8, 15, 10);
        fill(25);
        ellipse(this.x + 20, this.y - 10, 8);
        fill(225)
        ellipse(this.x + 20, this.y - 10, 2);

        fill('#2F2963');
        ellipse(this.x + 10, this.y + 10, 30);
        fill('#454372');
        ellipse(this.x + 10, this.y + 2, 15, 10);
        fill(25);
        ellipse(this.x + 10, this.y, 8);
        fill(225)
        ellipse(this.x + 10, this.y, 2);
    }

    pickFruit() {
        var temp = Math.floor(Math.random() * 8);

        if (temp == 1) {
            this.fruitType = 'watermelon'
        } else if (temp == 2) {
            this.fruitType = 'pear';
        } else if (temp == 3) {
            this.fruitType = 'coconut';
        } else if (temp == 4) {
            this.fruitType = 'orange';
        } else if (temp == 5) {
            this.fruitType = 'avocado';
        } else if (temp == 6) {
            this.fruitType = 'apple';
        } else if (temp == 7) {
            this.fruitType = 'blueberries';
        }
    }
}

// module.exports = Fruit