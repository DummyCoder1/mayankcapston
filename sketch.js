var turn=0
function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("silver");
    fill("#404040");
    rect(0, 0, width, 50);
    textAlign(CENTER);
    fill("White");
    textSize(18);
    text("TIC TAC TOE", width / 2, 33);
    fill("black");
}


function draw()
{

 createRow(100)
 createRow(200)
 createRow(300)  
}

function createRow(y)
{
  for (x = 300; x < 600; x=x+100)
   {
       var b1= new Box(x,y,100,100); 
       b1.appear();   
   }  
}