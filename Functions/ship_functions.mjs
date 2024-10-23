export function createShip(ctx, x, y, radius, callback) {
    let touched, identifier
    let position = [x, y];

    function draw() {
        circle(ctx, position[0], position[1], radius, "blue");
    }

    function Touched(id, tx, ty) {
        touched = distance(position[0], position[1], tx, ty) < radius;
        if(touched) {
            identifier = id;
            callback();
        }
    }

    function move(id, tx, ty) {
        position = [tx, ty];
        console.log("momentarily Position: ", position);
    }



    return { draw, Touched, move };
}

function circle(ctx, x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 6.3, true)
    ctx.fill();
}

function distance(x, y, tx, ty) {
    const dx = tx - x;
    const dy = ty - y;
    return Math.sqrt(dx * dx + dy * dy);
}