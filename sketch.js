var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, orangeImg, redImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 

}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x = World.mouseX;
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  spawnApple()
  spawnOrange()
  spawnRed()

  function spawnApple(){
    if(frameCount % 60===0){
      var obstacle=createSprite(200,0,10,40)
      var rand=Math.round(random(1,6))
      obstacle.velocityY=6
      switch(rand){
      case 1: obstacle.addImage(appleImg);
      break;
      case 2: obstacle.addImage(orangeImg);
      break;
      case 3: obstacle.addImage(redImg);
      break;
      }
      obstacle.scale=0.05
      obstacle.lifetime=100      
      }
    
    }

    function spawnOrange(){
      if(frameCount % 60===0){
        var obstacle=createSprite(100,0,10,40)
        var rand=Math.round(random(1,6))
        obstacle.velocityY=7
        switch(rand){
        case 1: obstacle.addImage(appleImg);
        break;
        case 2: obstacle.addImage(orangeImg);
        break;
        case 3: obstacle.addImage(redImg);
        break;
        }
        obstacle.scale=0.05
        obstacle.lifetime=100      
        }
      
      }

      function spawnRed(){
        if(frameCount % 60===0){
          var obstacle=createSprite(300,0,10,40)
          var rand=Math.round(random(1,6))
          obstacle.velocityY=5
          switch(rand){
          case 1: obstacle.addImage(appleImg);
          break;
          case 2: obstacle.addImage(orangeImg);
          break;
          case 3: obstacle.addImage(redImg);
          break;
          }
          obstacle.scale=0.05
          obstacle.lifetime=100      
          }
        
        }

}

