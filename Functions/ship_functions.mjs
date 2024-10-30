export function createShip(canvas ,ctx, x, y, radius, callback) {

    let touched, identifier
    let position = [x, y];

    function draw() {
        draw_spaceship(position[0], position[1]);
        //circle(ctx, position[0], position[1], radius, "blue");
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

    function draw_spaceship(x,y) {
        var sWidth = canvas.width;
        var sHeight = canvas.height;
        var path = new Path2D();
        //triangle
        path.moveTo(x+12, y);                       //right
        path.lineTo(x, y-30);                       //top
        path.lineTo(x-12, y);                       //left

        //rectangle
        path.lineTo(x-12, y+40);                    //left-bottom           
        path.lineTo(x+12, y+40);                    //right-bottom

        //Wing
        path.lineTo(x+40, y+40);                    //right-wing
        path.lineTo(x+40, y+55); 
        path.lineTo(x-40, y+55);                     //left-wing
        path.lineTo(x-40, y+40);
        path.lineTo(x+12, y+40);  





        ctx.fill(path);                 //End figure
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
