import * as Asteroid from "../Interfaces/Asteroid.mjs"

export function LoadLevel() {
    let Asteroids = [];

    Asteroids.push(Asteroid.asteroid(0, 0, 3, 1, 20, 100));



    return Asteroids;
}

/*
    Winkel Erläuterung:
        - 1 => nach rechts unten
        - 0 => nach rechts
*/