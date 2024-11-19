
export function check_TP(Asteroids) {
    for (let i = 0; i < Asteroids.length; i++) {
        if(Asteroids[i].TP <= 0) {
            Asteroids.splice(i, 1);
            i--;
        }
    }
}

export function is_ship_hit(/*shipX, shipY,*/Hitbox ,Asteroid) {
    /*
    if(distance(shipX, shipY, Asteroid.posx, Asteroid.posy) < Asteroid.radius) {
        window.alert("Game over");
        window.location.reload();
        return true;
    }
    return false;
    */
    for(let element of Hitbox) {
        if(distance(element[0], element[1], Asteroid.posx, Asteroid.posy) < Asteroid.radius) {
            window.alert("Game over");
            window.location.reload();
            return true;
        }
    }
    return false;

}

export function is_in_canvas(canvas, Objects) {
    for (let i = 0; i < Objects.length; i++) {
        if(Objects[i].posx < 0-canvas.width || Objects[i].posx > 2*canvas.width || Objects[i].posy < 0-canvas.height || Objects[i].posy > 2*canvas.height) {
            Objects.splice(i, 1);
            i--;
        }
    }
}

function distance(x, y, tx, ty) {
    const dx = tx - x;
    const dy = ty - y;
    return Math.sqrt(dx * dx + dy * dy);
}