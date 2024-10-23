export function createShip(ctx, x, y, radius, callback) {


    function draw() {
        circle(ctx, x, y, radius, "blue");
    }

    return { draw };
}

function circle(ctx, x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 6.3, true)
    ctx.fill();
}