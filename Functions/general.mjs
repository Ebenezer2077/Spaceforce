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
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}