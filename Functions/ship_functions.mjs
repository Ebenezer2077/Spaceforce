export function createShip(ctx, x, y, radius, callback) {
    let isTouched, identifier

    function draw() {
        circle(ctx, x, y, radius, "blue");
    }

    function Touched(id, tx, ty) {
        touched = distance(x, y, tx, ty) < radius;
        if(touched) {
            identifier = id;
            callback();
        }
    }

    return { draw, Touched };
}

function circle(ctx, x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 6.3, true)
    ctx.fill();
}