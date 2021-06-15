//Create variables here
var fedTime, lastFed, foodS,dogSprite,standingdog,happydog,feedButton,fedTime,database
var foodfordog
function preload()
{
 standingdog = loadImage("/images/dogImg.png");
 happydog= loadImage("/images/dogImg1.png");
	//load images here
}

function setup() {
  database=firebase.database()
	createCanvas(1000, 400);
  foodObj= new Food()
  var address= database.ref("Food")
  address.on("value",readStock)
  dogSprite= createSprite(800,200,150,150);
  dogSprite.addImage(standingdog);
  dogSprite.scale= 0.15
  feedButton= createButton("feed the dog");
  feedButton.position(700,95);
  feedButton.mousePressed(feedDog)
  addFood= createButton("addFood")
  addFood.position(600,95);
  addFood.mousePressed(foodfordog);
}


function draw() {  
   background("green");
   foodObj.display();

   fedTime= database.ref("Feedtime");
   fedTime.on("value",getfeedTime);
   fill(255,255,254);
   textSize(15);
   if(lastFed>=12){ 
     text("Last Feed : "+ lastFed%12 + " PM", 350,30); 
    }else if(lastFed==0){ 
      text("Last Feed : 12 AM",350,30); 
    }else{ 
      text("Last Feed : "+ lastFed + " AM", 350,30); 
    }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS= data.val()
}
function feedDog(){
  dogSprite.addImage(happydog);
  if(foodObj.getFoodstock<=0){
    foodObj.updatefoodStock(foodObj.getFoodstock()*0)
  }
  else{
    foodObj.updatefoodStock(foodObj.getFoodstock()-1)
  }
   database.ref("/").update({
     Food:foodObj.getFoodstock(),
     Feedtime: hour()
   })
  
}
function getfeedTime(data){
  lastfed= data.val()
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}