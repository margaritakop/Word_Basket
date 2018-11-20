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
        if (Math.random() > 0.75){
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

    pickFruit() {
        var temp = Math.floor(Math.random() * 4);

        if (temp == 1) {
            this.fruitType = 'watermelon'
        } else if (temp == 2) {
            this.fruitType = 'pear';
        } else if (temp == 3) {
            this.fruitType = 'coconut';
        }
    }
}

// module.exports = Fruit