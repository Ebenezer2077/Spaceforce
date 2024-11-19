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
    let HitboxBorders = [];



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
        HitboxBorders[0] = computeCoordinates(-1*unit, -10*unit);

        path.lineTo(-3*unit, -6*unit);                                    //2
        HitboxBorders[1] = computeCoordinates(-3*unit, -6*unit);

        path.lineTo(-5*unit, 0*unit);                                     //3
        HitboxBorders[2] = computeCoordinates(-5*unit, 0*unit);

        path.lineTo(-5*unit, 8*unit);                                     //4
        HitboxBorders[3] = computeCoordinates(-5*unit, 8*unit);

        path.lineTo(-5*unit, 18*unit);                                    //5 
        HitboxBorders[4] = computeCoordinates(-5*unit, 18*unit);

        path.lineTo(-21*unit, 24*unit);                                   //6
        HitboxBorders[5] = computeCoordinates(-21*unit, 24*unit);

        path.lineTo(-27*unit, 20*unit);                                   //7
        HitboxBorders[6] = computeCoordinates(-27*unit, 20*unit);

        path.lineTo(-31*unit, 24*unit);                                   //8
        HitboxBorders[7] = computeCoordinates(-31*unit, 24*unit);

        path.lineTo(-29*unit, 28*unit);                                   //9
        HitboxBorders[8] = computeCoordinates(-29*unit, 28*unit);

        path.lineTo(-17*unit, 28*unit);                                   //10
        HitboxBorders[9] = computeCoordinates(-17*unit, 28*unit);

        path.lineTo(-5*unit, 28*unit);                                    //11
        HitboxBorders[10] = computeCoordinates(-5*unit, 28*unit);

        path.lineTo(-5*unit, 32*unit);                                    //12
        HitboxBorders[11] = computeCoordinates(-5*unit, 32*unit);

        path.lineTo(-3*unit, 32*unit);                                    //13
        HitboxBorders[12] = computeCoordinates(-3*unit, 32*unit);

        path.lineTo(-2*unit, 36*unit);                                    //14
        HitboxBorders[13] = computeCoordinates(-2*unit, 36*unit);

        path.lineTo(-1*unit, 32*unit);                                    //15
        HitboxBorders[14] = computeCoordinates(-1*unit, 32*unit);
        
        path.lineTo(1*unit, 32*unit);                                    //15
        HitboxBorders[15] = computeCoordinates(1*unit, 32*unit);

        path.lineTo(2*unit, 36*unit);                                    //14
        HitboxBorders[16] = computeCoordinates(2*unit, 36*unit);

        path.lineTo(3*unit, 32*unit);                                    //13
        HitboxBorders[17] = computeCoordinates(3*unit, 32*unit);

        path.lineTo(5*unit, 32*unit);                                    //12
        HitboxBorders[18] = computeCoordinates(5*unit, 32*unit);

        path.lineTo(5*unit, 28*unit);                                    //11
        HitboxBorders[19] = computeCoordinates(5*unit, 28*unit);

        path.lineTo(17*unit, 28*unit);                                   //10
        HitboxBorders[20] = computeCoordinates(17*unit, 28*unit);

        path.lineTo(29*unit, 28*unit);                                   //9
        HitboxBorders[21] = computeCoordinates(29*unit, 28*unit);

        path.lineTo(31*unit, 24*unit);                                   //8
        HitboxBorders[22] = computeCoordinates(31*unit, 24*unit);

        path.lineTo(27*unit, 20*unit);                                   //7
        HitboxBorders[23] = computeCoordinates(27*unit, 20*unit);

        path.lineTo(21*unit, 24*unit);                                   //6
        HitboxBorders[24] = computeCoordinates(21*unit, 24*unit);

        path.lineTo(5*unit, 18*unit);                                    //5
        HitboxBorders[25] = computeCoordinates(5*unit, 18*unit);

        path.lineTo(5*unit, 8*unit);                                     //4
        HitboxBorders[26] = computeCoordinates(5*unit, 8*unit);

        path.lineTo(5*unit, 0*unit);                                     //3
        HitboxBorders[27] = computeCoordinates(5*unit, 0*unit);

        path.lineTo(3*unit, -6*unit);                                    //2
        HitboxBorders[28] = computeCoordinates(3*unit, -6*unit);

        path.moveTo(1*unit, -10*unit);                                   //1
        HitboxBorders[29] = computeCoordinates(1*unit, -10*unit);

        path.moveTo(-1*unit, -10*unit);                                  //1

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

    function computeCoordinates(Tx, Ty) {
        // Rotation um den Ursprung
        const cos = Math.cos(angle + (Math.PI/2));
        const sin = Math.sin(angle + (Math.PI/2));

        const rotatedX = cos * Tx - sin * Ty;
        const rotatedY = sin * Tx + cos * Ty;

        // Translation zurück
        const finalX = rotatedX + position[0];
        const finalY = rotatedY + position[1];

        return [finalX, finalY];
                
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

    function getHitbox() {
        return HitboxBorders;
    }


    return { draw, Touched, move, reset, Projectiles, getCoordinates, getHeat, cooldown, isJammed, getHitbox};
}


function distance(x, y, tx, ty) {
    const dx = tx - x;
    const dy = ty - y;
    return Math.sqrt(dx * dx + dy * dy);
}
