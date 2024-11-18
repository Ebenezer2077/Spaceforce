export function init(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    return {canvas, ctx};
}

export function draw_background(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

export function draw_HUD(ctx, canvas, TIMER, MaxHeat, currentHeat) {
    const grad = ctx.createLinearGradient(canvas.width*0.8 + 20, canvas.height*0.2, canvas.width*0.8 + 20, canvas.height*0.2 + MaxHeat);
    grad.addColorStop(0, "red");
    grad.addColorStop(0.5, "yellow"); 
    grad.addColorStop(1, "white"); 

    ctx.save();
    ctx.resetTransform();

    ctx.font = "30px serif";
    ctx.fillText("Score: " + TIMER, 10, 50);

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = "6";
    ctx.rect(canvas.width*0.8, canvas.height*0.2, 40, MaxHeat);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = grad;
    ctx.fillRect(canvas.width*0.8 + 3, canvas.height*0.2 + 3, 34, MaxHeat-6);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(canvas.width*0.8 + 3, canvas.height*0.2 + 3, 34, MaxHeat-6 - currentHeat);
    ctx.fill();



    ctx.restore();
}