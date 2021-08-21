var bg,cat,mouse;
var catIMG1,catIMG2,catIMG3;
var mouseIMG1,mouseIMG2,mouseIMG3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    catIMG1 = loadAnimation("images/cat1.png")
    catIMG2 = loadAnimation("images/cat2.png","images/cat3.png")
    catIMG3 = loadAnimation("images/cat4.png")

    mouseIMG1 = loadAnimation("images/mouse1.png")
    mouseIMG2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseIMG3 = loadAnimation("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catsleeping",catIMG1)
    cat.scale = 0.2;
    
    mouse = createSprite(200,600);
    mouse.addAnimation("mousewalking",mouseIMG1)
    mouse.scale = 0.2;
    
    


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
 if (cat.x - mouse.x<(cat.width-mouse.width)/2){
cat.velocityX = 0;
cat.addAnimation("catsitting",catIMG3)
cat .changeAnimation("catsitting");

mouse.addAnimation("mousehappy",mouseIMG3)
mouse.changeAnimation("mousehappy")
 }
    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseteasing",mouseIMG2)
        mouse.changeAnimation("mouseteasing")
        cat.velocityX = -5;
        cat.addAnimation("catrunning",catIMG2)
        cat .changeAnimation("catruning");
    }

  //For moving and changing animation write code here




}
