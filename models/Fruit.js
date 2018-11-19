class Fruit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    pickword(words){
        this.word = 'randomly selected word'
        //dont display again if it has already been, poop from list globally at this point
        //words.remove('selected word')
        return words

    }

    showLemon() {
        fill('#FCEC52');
        ellipse(this.x + 40, this.y, 80, 60);
        ellipse(this.x, this.y, 10);
        ellipse(this.x + 80, this.y, 10);
    }
}

// module.exports = Fruit