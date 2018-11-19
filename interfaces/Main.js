class MainScreen {
    constructor() {
        
    }
    
    
    show() {
        background(bgCol);
        
        fill(btnCol);
        for (let x = 20; x < screenWidth + 120; x += 90) {
            ellipse(x, 60, 120);
        }

        fill(255);
        for (let x = 20; x < screenWidth + 120; x += 90) {
            ellipse(x, 20, 120);
        }

        fill(btnCol);
        for (let x = 20; x < screenWidth + 120; x += 90) {
            ellipse(x, -20, 120);
        }

        fill('#4E6E58');
        for (let i = 0; i < screenWidth + 10; i += 10) {
            ellipse(i, screenHeight - 5, 20);
        }

        basket.moveMouse();
        basket.show();

        
            if(lives == 3){
                this.heart(50, 30);
                this.heart(100, 30);
                this.heart(150, 30);
            }
            if(lives == 2){
                this.heart(50, 30);
                this.heart(100, 30);
            }
            if(lives == 1){
                this.heart(50, 30);
            }
        
      
        var speed = 5
        if (showPop != true){
            fruit.y = fruit.y + speed
            fruit.showFruit()
            }
       
        if(635 < fruit.y 
            && basket.x - 150 < fruit.x  
            && fruit.x < basket.x + 150
            ){
            fruit.y = 0
            fruit.x = Math.random() * 1000
            score++
            showPop = true
        } 
        if(635 < fruit.y){
            fruit.y = 0
            fruit.x = Math.random() * 1000
            lives --
        }

        //Task 3
        //fruits without words?
    }
    
    heart(x, y) {
        fill('#FF4B3E');
        arc(x - 20, y, 20, 20, PI, 0, OPEN);
        arc(x, y, 20, 20, PI, 0, OPEN);
        triangle(x - 30, y, x + 10, y, x - 10, y + 25);

        fill(255);
        ellipse(x + 2, y - 3, 4);
    }
    
}