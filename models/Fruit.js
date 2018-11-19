class Fruit {
    constructor() {
        this.word = '' //if empty string, fruit is not worded
    }
    pickword(words){
        let i = Math.floor(Math.random()*Words.length)
        this.word = Words[i]
        
        //remove the word from the Words array
        Words.splice(i, 1)
    }

    showFruit(x, y) {
        fill('#FCEC52');
        ellipse(x + 40, y, 80, 60);
        ellipse(x, y, 10);
        ellipse(x + 80, y, 10);
    }
}

// module.exports = Fruit