import * as Asteroid from "../Interfaces/Asteroid.mjs"

export function LoadLevel(canvas) {
    let unit = canvas.width/44;
    let Asteroids = [];
    let endtime = 150;

    Asteroids.push(Asteroid.asteroid(0-80, 0-80, 3, 1, 20, 100));
    Asteroids.push(Asteroid.asteroid(canvas.width+80, canvas.height+80, 3, 4.2, 20, 300));
    Asteroids.push(Asteroid.asteroid(canvas.width+80, (canvas.height/2)+80, 3, 3, 12, 500));
    Asteroids.push(Asteroid.asteroid(canvas.width/2, 0-80, 3, 1.5, 25, 600));
    Asteroids.push(Asteroid.asteroid(0, canvas.height+80, 3, 5.8, 18, 800));



    /*
    Winkel Erläuterung:
        - 1 => nach rechts unten
        - 0 => nach rechts

    remember: radius = 4*TP
*/


    //You Won slogan

    //Y
    Asteroids.push(Asteroid.asteroid(unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(2*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(3*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(4*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(5*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(3*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(3*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));

    //O
    Asteroids.push(Asteroid.asteroid(8*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(9*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(7*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(10*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(7*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(10*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(7*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(10*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(8*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(9*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));

    //U
    Asteroids.push(Asteroid.asteroid(12*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(12*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(12*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(12*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(15*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(15*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(15*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(15*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(13*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(14*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));

    //W
    Asteroids.push(Asteroid.asteroid(20*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(20*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(24*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(24*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(28*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(28*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(21*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(21*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(23*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(23*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(25*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(25*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(27*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(27*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(22*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(26*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));

    //O
    Asteroids.push(Asteroid.asteroid(31*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(32*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(30*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(33*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(30*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(33*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(30*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(33*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(31*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(32*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));

    //N
    Asteroids.push(Asteroid.asteroid(35*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(35*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(35*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(35*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(35*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(39*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(39*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(39*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(39*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(39*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(36*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(37*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(38*unit, -2*unit, 2, Math.PI/2, unit/8, endtime));

    //!
    Asteroids.push(Asteroid.asteroid(42*unit, -5*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(42*unit, -4*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(42*unit, -3*unit, 2, Math.PI/2, unit/8, endtime));
    Asteroids.push(Asteroid.asteroid(42*unit, -1*unit, 2, Math.PI/2, unit/8, endtime));






    return Asteroids;
}

