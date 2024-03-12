class myImage {

    // constructor
    constructor(myFileName, x, y, w, h) {

        this.characterImage = loadImage(myFileName);
        
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
       
        
    }
    // properties

    // functions
    updateX(x) {
        this.x = x;
    }

    updateFlip(flipX) {
        this.flipX = flipX;
    }
    draw() {
        this.characterImage.resize(this.w/2, this.h/2);
        if (this.flipX) {
            // The push and pop functions save and reset the previous transformation.
            push();
            // Scale -1, 1 means reverse the x axis, keep y the same.
            scale(-1, 1);
            // Because the x-axis is reversed, we need to draw at different x position.
            
            image(this.characterImage, -this.x - this.w / 4, this.y);
            pop();
        }
        else {
            
            image(this.characterImage, this.x, this.y);

        }

    }

    checkCollision(x2, y2, w2, h2) {

        return collideRectRect(this.x- this.w/2, this.y - h2/2, this.w, this.h, x2, y2,w2,h2);
       /* if (
            this.x - this.w / 2 < x2 + w2 / 2 &&
            this.x + w2 / 2 > x2 - this.w / 2 &&
            this.y - h2 / 2 < y2 + this.h / 2 &&
            this.y + h2 / 2 > y2 - this.h / 2
    
        ) {
            return true;
        } else {
            return false;
        }*/
    }
}