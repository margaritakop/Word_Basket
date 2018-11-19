class Fruit {
    constructor() {
        this.word = '' //if empty string, fruit is not worded
    }
    pickword(words){
        this.word = 'randomly selected word'
        //dont display again if it has already been, poop from list globally at this point
        //words.remove('selected word')
        return words
    }

    showLemon(x, y) {
        fill('#FCEC52');
        ellipse(x + 40, y, 80, 60);
        ellipse(x, y, 10);
        ellipse(x + 80, y, 10);
    }
}

// module.exports = Fruit