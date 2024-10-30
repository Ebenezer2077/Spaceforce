export function createShip(canvas ,ctx, x1, y1, radius, callback) {

    let touched, identifierONE = undefined, identifierTWO = undefined;
    let position = [x1, y1, 0, 0];
    let PATH = new Path2D();
    let angle = 0;

    function draw() {
        draw_spaceship(position[0], position[1]);
    }

    function Touched(id, tx, ty) {
        if(identifierONE === undefined) {
            touched = ctx.isPointInPath(PATH, tx, ty);
            if(touched) {
                identifierONE = id;
                position[0] = tx;
                position[1] = ty;
            }
        } else {
            if(identifierTWO === undefined) {
                identifierTWO = id;
                position[2] = tx;
                position[3] = ty;
                angle = Math.atan2(position[3] - position[1], position[2] - position[0]);
                //console.log(angle);
            }
        }
    }

    function move(id, tx, ty) {
        if(identifierONE !== undefined && identifierTWO !== undefined) {
            angle = Math.atan2(position[3] - position[1], position[2] - position[0]);
        } else if(identifierONE !== undefined) {
            position[0] = tx;
            position[1] = ty;
        }
        console.log(position);
    }

    function draw_spaceship(x,y, angle = 0) {
        ctx.translate(x,y);
        ctx.rotate(angle);
        var sWidth = canvas.width;
        var sHeight = canvas.height;
        var path = new Path2D();
        //triangle
        path.moveTo(12, 0);                       //right
        path.lineTo(0, -30);                       //top
        path.lineTo(-12, 0);                       //left

        //rectangle
        path.lineTo(-12, 40);                    //left-bottom           
        path.lineTo(12, 40);                    //right-bottom

        //Wing
        path.lineTo(40, 40);                    //right-wing
        path.lineTo(40, 55); 
        path.lineTo(-40, 55);                     //left-wing
        path.lineTo(-40, 40);
        path.lineTo(12, 40);  





        ctx.fill(path);                 //End figure
        PATH = path;
    }

    function reset(id) {
        if(id === identifierONE) {
            touched = false;
            identifierONE = undefined;
        }
        if(id === identifierTWO) {
            identifierTWO = undefined;
        }
    }


    return { draw, Touched, move, reset };
}


function distance(x, y, tx, ty) {
    const dx = tx - x;
    const dy = ty - y;
    return Math.sqrt(dx * dx + dy * dy);
}
