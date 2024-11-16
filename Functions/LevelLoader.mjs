import * as Asteroid from "../Interfaces/Asteroid.mjs"

export function LoadLevel(canvas) {
    let unit = canvas.width/44;
    let Asteroids = [];
    let endtime = 1500;
    let loopendtime = 0;

    let position_randomizerX = (Math.random()-0.5)*10*unit;
    let position_randomizerY = (Math.random()-0.5)*10*unit;
    let angle_randomizer = Math.random()*Math.PI*0.5;
    let time_randomizer = (Math.random()-0.5)*50;

    for(let lvl = 0; lvl <= 100; lvl++) {
        Asteroids.push(Asteroid.asteroid(0-200 + position_randomizerX, 0-200 + position_randomizerY, 3, 1, 20, loopendtime + 100));                               //nach rechts unten
        Asteroids.push(Asteroid.asteroid(canvas.width+200 + position_randomizerX, canvas.height+200 + position_randomizerY, 3, 4.2, 20,loopendtime + 300));      //nach links oben
        Asteroids.push(Asteroid.asteroid(canvas.width+200 + position_randomizerX, (canvas.height/2)+200 + position_randomizerY, 3, 3, 12,loopendtime + 500));    //nach links
        Asteroids.push(Asteroid.asteroid(canvas.width/2 + position_randomizerX, 0-200 + position_randomizerY, 3, 1.5, 25,loopendtime + 600));                   //nach unten
        Asteroids.push(Asteroid.asteroid(0-200 + position_randomizerX, canvas.height+200 + position_randomizerY, 3, 5.5, 18,loopendtime + 800));                    //rechts oben
        Asteroids.push(Asteroid.asteroid(canvas.width+200 + position_randomizerX, canvas.height*0.6 + position_randomizerY, 3, 3.1, 21,loopendtime + 850));
        Asteroids.push(Asteroid.asteroid(0-200 + position_randomizerX, 0-200 + position_randomizerY, 3.5, 1.1, 18,loopendtime + 870));
        Asteroids.push(Asteroid.asteroid(canvas.width/2 + position_randomizerX, canvas.height+200 + position_randomizerY, 2.5, (Math.PI/2)*3, 32,loopendtime + 1000));
        Asteroids.push(Asteroid.asteroid(0-200 + position_randomizerX, 0-200 + position_randomizerY, 3, 1, 20,loopendtime + 1000));
        Asteroids.push(Asteroid.asteroid(canvas.width+200 + position_randomizerX, 0-200 + position_randomizerY, 3, 2, 20,loopendtime + 1000));

        Asteroids.push(Asteroid.asteroid(0-200 + position_randomizerX, canvas.height*0.4 + position_randomizerY, 4, 1, 20,loopendtime + 1050));
        Asteroids.push(Asteroid.asteroid(canvas.width+200 + position_randomizerX, (canvas.height/2)+200 + position_randomizerY, 4, 3, 12,loopendtime + 1060)); 
        Asteroids.push(Asteroid.asteroid(0-200 + position_randomizerX, canvas.height+200 + position_randomizerY, 4, 5.6, 11,loopendtime + 1070)); 


        position_randomizerX = (Math.random()-0.5)*10*unit;
        position_randomizerY = (Math.random()-0.5)*10*unit;
        loopendtime += 1070;

    }


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

