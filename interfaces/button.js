class Button {
    constructor(content, x, y) {
        this.content = content;
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(150);
        strokeWeight(6);
        if (mouseX > this.x &&
            mouseX < this.x + 200 &&
            mouseY > this.y &&
            mouseY < this.y + 100) {
                fill('#FF4B3E');
            } else {
                fill('#FFBA49');
            }
        rect(this.x, this.y, 200, 100);

        noStroke();
        fill(150);
        textAlign(CENTER);
        textFont('Gill Sans', 32);
        text(this.content, this.x + 100, this.y + 58);
    }

    playClicked() {
        if (mouseX > this.x &&
            mouseX < this.x + 200 &&
            mouseY > this.y &&
            mouseY < this.y + 100) {
                basket = new Basket();
                displayedScreen = 'main';
                
                //Generate fruit objects to fall
                //spawnFruit()
            }
    }
}