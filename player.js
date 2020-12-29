class Player{
    constructor(x,y,width,height) {
           var options={
               isStatic:true
           }
           this.body=Bodies.rectangle(x,y,width,height,options)
           this.height=40
           this.width=40

           World.add(wld,this.body)
           this.pos=createVector(170,70)
        
    }

    display(){
      
        fill ("red")
        rect(this.pos.x,this.pos.y,this.width,this.height)
      drawSprites()
    }

    move(step){
        this.pos.y+=step
    }

  

  
}