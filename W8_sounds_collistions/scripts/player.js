class Player {
    constructor(){
      this.size = 50;
      this.x = 50;
      this.y = height - this.size;
      this.vy = 0;
      this.gravity = 1.5;
    }
    
    jump(){
      if(this.y == height - this.size){
        this.vy = -23;
      }
    }
    
    move(){
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.size)
    }
    
    show(){ //change to animation later 
      fill(255, 102, 153);
      rect(this.x, this.y, this.size, this.size);
    }
    
    hits(bob){
      return collideLineRect(bob.x, height, blob.x + blob.size / 2, bob.y, this.x, this.y, this.size, this.size);
    }
    
    
  }