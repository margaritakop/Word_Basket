class Fruit {
    constructor() {

    }

    showLemon(x, y) {
        fill('#FCEC52');
        ellipse(x + 40, y, 80, 60);
        ellipse(x, y, 10);
        ellipse(x + 80, y, 10);
    }
}

// module.exports = Fruit