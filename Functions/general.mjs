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

export function draw_HUD(ctx, canvas, TIMER, currentHeat, jammed) {
    const grad = ctx.createLinearGradient(canvas.width*0.8 + 20, canvas.height*0.3, canvas.width*0.8 + 20, canvas.height*0.7);
    grad.addColorStop(0, "red");
    grad.addColorStop(0.5, "yellow"); 
    grad.addColorStop(1, "white"); 

    ctx.save();
    ctx.resetTransform();

    ctx.font = "30px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + TIMER, 10, 50);
    if(jammed) {
        if(TIMER % 20 > 10) {
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.lineWidth = "6";
            ctx.rect(canvas.width*0.8, canvas.height*0.3, 40, canvas.height*0.4);
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = grad;
            ctx.fillRect(canvas.width*0.8 + 3, canvas.height*0.3 + 3, 34, canvas.height*0.4-6);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.fillRect(canvas.width*0.8 + 3, canvas.height*0.3 + 3, 34, canvas.height*0.4-6 - currentHeat*0.01*canvas.height*0.4);
            ctx.fill();
        }
    } else {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = "6";
        ctx.rect(canvas.width*0.8, canvas.height*0.3, 40, canvas.height*0.4);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.fillRect(canvas.width*0.8 + 3, canvas.height*0.3 + 3, 34, canvas.height*0.4-6);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(canvas.width*0.8 + 3, canvas.height*0.3 + 3, 34, canvas.height*0.4-6 - currentHeat*0.01*canvas.height*0.4);
        ctx.fill();
    }

    ctx.restore();
}