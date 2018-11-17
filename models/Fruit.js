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
}

// module.exports = Fruit