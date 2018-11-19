class Fruit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    pickword(words){
        let i = Math.floor(Math.random()*Words.length)
        this.word = Words[i]
        //remove the word from the Words array
        Words.splice(i, 1)
    }

    showFruit() {
        fill('#FCEC52');
        ellipse(this.x + 40, this.y, 80, 60);
        ellipse(this.x, this.y, 10);
        ellipse(this.x + 80, this.y, 10);
    }
}

// module.exports = Fruit