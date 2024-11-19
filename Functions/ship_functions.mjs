import { newProjectile } from "../Interfaces/Projectile.mjs";

export function createShip(canvas ,ctx, x1, y1) {

    let touched, identifierONE = undefined, identifierTWO = undefined;
    let position = [x1, y1, undefined, undefined];
    let PATH = new Path2D();
    let angle = 0;

    let Projectiles = [];                                                   //zum speichern der Projekktile des Schiffes
    let feuerrate_jetzt = 1;
    let feuerrate_grenze = 100;
    let HEAT = 0;
    let jammed = false;
    let jammed_cooldown = 200;

    let unit = canvas.width/200;


    function draw() {
        draw_spaceship(position[0], position[1]);
        for(let element of Projectiles) {
            element.fly();
            element.draw_instanz(ctx);
        }
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
            }
        }
    }

    function move(id, tx, ty) {

        if (id === identifierONE) {
            position[0] = tx; position[1] = ty;
        }
        if (id === identifierTWO) {
            position[2] = tx; position[3] = ty;
        }


        if(identifierONE !== undefined && identifierTWO !== undefined) {
            angle = Math.atan2(position[3] - position[1], position[2] - position[0]);
            if(feuerrate_jetzt % Math.round((feuerrate_grenze)/65) == 0) {
                if(!jammed) {
                    Projectiles.push(newProjectile(position[0], position[1], 15, angle));
                    feuerrate_grenze = distance(position[0], position[1], position[2], position[3]);
                    feuerrate_jetzt = 1;
                    HEAT+= 1.5;
                    jammed = HEAT > 100;
                }
            }
            feuerrate_jetzt++;
        } 
    }

    function draw_spaceship(x,y) {
        ctx.resetTransform();
        ctx.fillStyle = "red";
        
        ctx.translate(x,y);
        ctx.rotate(angle + (Math.PI/2));


        var path = new Path2D();
        path.moveTo(-1*unit, -10*unit);                                   //1
        path.lineTo(-3*unit, -6*unit);                                    //2
        path.lineTo(-5*unit, 0*unit);                                     //3
        path.lineTo(-5*unit, 8*unit);                                     //4
        path.lineTo(-5*unit, 18*unit);                                    //5  
        path.lineTo(-21*unit, 24*unit);                                   //6
        path.lineTo(-27*unit, 20*unit);                                   //7
        path.lineTo(-31*unit, 24*unit);                                   //8
        path.lineTo(-29*unit, 28*unit);                                   //9
        path.lineTo(-17*unit, 28*unit);                                   //10
        path.lineTo(-5*unit, 28*unit);                                    //11
        path.lineTo(-5*unit, 32*unit);                                    //12
        path.lineTo(-3*unit, 32*unit);                                    //13
        path.lineTo(-2*unit, 36*unit);                                    //14
        path.lineTo(-1*unit, 32*unit);                                    //15
        path.lineTo(1*unit, 32*unit);                                    //15
        path.lineTo(2*unit, 36*unit);                                    //14
        path.lineTo(3*unit, 32*unit);                                    //13
        path.lineTo(5*unit, 32*unit);                                    //12
        path.lineTo(5*unit, 28*unit);                                    //11
        path.lineTo(17*unit, 28*unit);                                   //10
        path.lineTo(29*unit, 28*unit);                                   //9
        path.lineTo(31*unit, 24*unit);                                   //8
        path.lineTo(27*unit, 20*unit);                                   //7
        path.lineTo(21*unit, 24*unit);                                   //6
        path.lineTo(5*unit, 18*unit);                                    //5
        path.lineTo(5*unit, 8*unit);                                     //4
        path.lineTo(5*unit, 0*unit);                                     //3
        path.lineTo(3*unit, -6*unit);                                    //2
        path.moveTo(1*unit, -10*unit);                                   //1
        path.moveTo(-1*unit, -10*unit);                                  //1



        /* old design
        var sWidth = canvas.width;
        var path = new Path2D();
        //triangle
        path.moveTo(sWidth/30, 0);                              //right
        path.lineTo(0, -sWidth/12);                             //top
        path.lineTo(-sWidth/30, 0);                             //left

        //rectangle
        path.lineTo(-sWidth/30, sWidth/9);                      //left-bottom           
        path.lineTo(sWidth/30, sWidth/9);                       //right-bottom

        //Wing
        path.lineTo(sWidth/9, sWidth/9);                        //right-wing
        path.lineTo(sWidth/9, sWidth/7); 
        path.lineTo(-sWidth/9, sWidth/7);                       //left-wing
        path.lineTo(-sWidth/9, sWidth/9);
        path.lineTo(sWidth/30, sWidth/9);
        */

        ctx.fill(path);                                         //End figure
        PATH = path;

        
        if(jammed) {
            jammed_cooldown--;
            jammed = jammed_cooldown > 0;
            if(!jammed) {
                jammed_cooldown = 200;
            }
        }
            
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

    function getCoordinates() {
        return position;
    }

    function getHeat() {
        return HEAT;
    }

    function cooldown() {
        if(HEAT > 0) {
            HEAT -= 0.5;
        }
    }

    function isJammed() {
        return jammed;
    }


    return { draw, Touched, move, reset, Projectiles, getCoordinates, getHeat, cooldown, isJammed};
}


function distance(x, y, tx, ty) {
    const dx = tx - x;
    const dy = ty - y;
    return Math.sqrt(dx * dx + dy * dy);
}
