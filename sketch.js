var ball;
var database,position;
function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballposition=database.ref("ball/position");
    ballposition.on("value",readPosition,showError);
}

function draw(){
    if(position!==undefined){

    
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
    }
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
position=data.val();
ball.x= position.x; 
ball.y= position.y; 


}

function rightPosition(x,y) {
database.ref('ball/position').set({
 'X': position.x+x,
 'y': position.y+y,
})

}