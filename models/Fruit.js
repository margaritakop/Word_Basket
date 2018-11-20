class Fruit {
    constructor(x, y) {
        this.word = ''
        this.x = x;
        this.y = y;
    }
    
    pickWord(){
        console.log(this.word)
        let i = Math.floor(Math.random()*Words.length)
        //add a chance factor if chosen word is actually assigned
        if (Math.random() > 0.5){
            this.word = Words[i]
            //remove the word from the Words array
            Words.splice(i, 1)
        } else {
            this.word = ''
        }
    }

    showFruit() {
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
}

// module.exports = Fruit