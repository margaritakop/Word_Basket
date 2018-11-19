class Fruit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    showLemon() {
        fill('#FCEC52');
        ellipse(this.x + 40, this.y, 80, 60);
        ellipse(this.x, this.y, 10);
        ellipse(this.x + 80, this.y, 10);
    }
}

// module.exports = Fruit