const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [
    {x:400,y:300}
];

let food = {
    x:Math.floor(Math.random()*40)*20,
    y:Math.floor(Math.random()*30)*20
};

let dx = 20;
let dy = 0;
let score = 0;

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowUp" && dy===0){
        dx=0; dy=-20;
    }
    if(e.key==="ArrowDown" && dy===0){
        dx=0; dy=20;
    }
    if(e.key==="ArrowLeft" && dx===0){
        dx=-20; dy=0;
    }
    if(e.key==="ArrowRight" && dx===0){
        dx=20; dy=0;
    }
});

function gameLoop(){

    const head = {
        x:snake[0].x + dx,
        y:snake[0].y + dy
    };

    if(head.x < 0) head.x = 780;
    if(head.x > 780) head.x = 0;
    if(head.y < 0) head.y = 580;
    if(head.y > 580) head.y = 0;

    snake.unshift(head);

    if(head.x === food.x && head.y === food.y){
        score++;
        document.getElementById("score").textContent = score;

        food = {
            x:Math.floor(Math.random()*40)*20,
            y:Math.floor(Math.random()*30)*20
        };
    } else {
        snake.pop();
    }

    for(let i=1;i<snake.length;i++){
        if(head.x===snake[i].x && head.y===snake[i].y){
            alert("Game Over! Score: "+score);
            location.reload();
        }
    }

    ctx.clearRect(0,0,800,600);

    ctx.fillStyle="red";
    ctx.fillRect(food.x,food.y,20,20);

    ctx.fillStyle="lime";
    snake.forEach(part=>{
        ctx.fillRect(part.x,part.y,20,20);
    });
}

setInterval(gameLoop,100);