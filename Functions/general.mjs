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

export function draw_HUD(ctx, TIMER, MaxHeat, currentHeat) {
    ctx.save();
    ctx.resetTransform();

    ctx.font = "30px serif";
    ctx.fillText("Score: " + TIMER, 10, 50);

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = "6";
    ctx.rect(380, 200, 40, MaxHeat);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "pink";
    ctx.fillRect(383, 203, 34, currentHeat);
    ctx.fill();



    ctx.restore();
}