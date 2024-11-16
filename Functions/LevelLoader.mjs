import * as Asteroid from "../Interfaces/Asteroid.mjs"

export function LoadLevel(canvas) {
    let Asteroids = [];

    Asteroids.push(Asteroid.asteroid(0-80, 0-80, 3, 1, 20, 100));
    Asteroids.push(Asteroid.asteroid(canvas.width+80, canvas.height+80, 3, 4.2, 20, 300));
    Asteroids.push(Asteroid.asteroid(canvas.width+80, (canvas.height/2)+80, 3, 3, 12, 500));
    Asteroids.push(Asteroid.asteroid(canvas.width/2, 0-80, 3, 1.5, 25, 600));
    Asteroids.push(Asteroid.asteroid(0, canvas.height+80, 3, 5.8, 18, 800));

    




    return Asteroids;
}

/*
    Winkel Erläuterung:
        - 1 => nach rechts unten
        - 0 => nach rechts

    remember: radius = 4*TP
*/