
export function check_TP(Asteroids) {
    for (let i = 0; i < Asteroids.length; i++) {
        if(Asteroids[i].TP <= 0) {
            Asteroids.splice(i, 1);
            i--;
        }
    }
}

export function is_ship_hit(shipX, shipY, Asteroid) {
    if(distance(shipX, shipY, Asteroid.posx, Asteroid.posy) < Asteroid.radius) {
        window.alert("Game over");
        window.location.reload();
        return true;
    }
    return false;
}

function distance(x, y, tx, ty) {
    const dx = tx - x;
    const dy = ty - y;
    return Math.sqrt(dx * dx + dy * dy);
}