class Food{
    constructor(){
        this.foodStock= 0;
        this.lastFed= 0;
        this.milkImg=loadImage("/images/Milk.png");
    }
     display(){
         var x= 80
         var y= 100
         imageMode(CENTER)
         image(this.milkImg,720,220,70,70);
         if(this.foodStock=!0){
             for(var i=0;i<this.foodStock;i++){
                 if(i%10===0){
                     
                     x=80
                     y=y+50
                     
                 }
                 image(this.milkImg,x,y,50,50);
                 x=x+30
             }
            
         }
     }
     getFoodstock(){
         return this.foodStock
     }
     deductFood(){
         if(this.foodStock>0){
             this.foodStock= this.foodStock - 1
         }
     }
     addFood(){
         this.foodStock=this.foodStock+1;
     }
     getfeedTime(lf){
         this.lastFed= lf
     }
     updatefoodStock(fS){
         this.foodStock= fS
     }
}