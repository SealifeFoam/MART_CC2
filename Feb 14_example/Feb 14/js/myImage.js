class myImage
{
    constructor(imagePath, x, y, w, h)
    {
        //this.imagePath = imagePath;
        this.theImage = loadImage(imagePath)
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    setFlipX(flipX)
    {
        this.flipX = flipX;
    }
    setX(x)
    {
        this.x = x;
    }
    draw()
    {
        if(this.flipX)
        {
            push();
    
            // Scale -1, 1 means reverse the x axis, keep y the same.
            scale(-1, 1);
            image(this.theImage, -this.x-this.w, this.y);
            // Because the x-axis is reversed, we need to draw at different x position.
         //   image(img, -width, 0);
           // image(animations[i], -imageX1-imageW1,imageY1);
           // animations[i].draw();
            pop();
        }
        else
        {
            image(this.theImage, this.x, this.y);
        }
       
    }

}