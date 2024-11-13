export function check_TP(Asteroids) {
    for (let i = 0; i < Asteroids.length; i++) {
        if(Asteroids[i].TP <= 0) {
            Asteroids.splice(i, 1);
            i--;
        }
    }
}