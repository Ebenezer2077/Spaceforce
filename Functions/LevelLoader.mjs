import * as Asteroid from "../Interfaces/Asteroid.mjs"

export function LoadLevel() {
    let Asteroids = [];

    Asteroids.push(Asteroid.asteroid(0, 0, 30, Math.PI, 20, 100));
    Asteroids.push(Asteroid.asteroid(0, 0, 3, Math.PI, 20, 300));
    Asteroids.push(Asteroid.asteroid(0, 0, 3, Math.PI, 20, 500));
    Asteroids.push(Asteroid.asteroid(0, 0, 3, Math.PI, 20, 700));


    return Asteroids;
}