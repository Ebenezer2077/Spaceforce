import * as lib from "./Functions/general.mjs"
import * as ship from "./Functions/ship_functions.mjs"
import * as ast from "./Interfaces/Asteroid.mjs"
import * as GB from "./Functions/GarbageCollector.mjs"
import * as LL from "./Functions/LevelLoader.mjs"

window.onload = () => {
    const { canvas, ctx} = lib.init("canvas_id");
    ctx.fillStyle = "#f00";

    const Spaceship = ship.createShip(canvas, ctx, 300, 600);
    const allAsteroids = [] = LL.LoadLevel(canvas);
    const asteroids = [];


    const Touches = {};
    let TIMER = 0;

    function draw() {
        TIMER++;

        for(const element of allAsteroids) {
            if(element.timestamp == TIMER) {
                asteroids.push(element);
            }
        }


        ctx.resetTransform();

        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
        lib.draw_background(ctx);

        let project = Spaceship.Projectiles;

        GB.check_TP(asteroids);
        GB.is_in_canvas(canvas, asteroids);
        GB.is_in_canvas(canvas, project);

        for(const element of asteroids) {
            if(GB.is_ship_hit(Spaceship.getHitbox(),element)) {
                Spaceship = undefined;
            }
            element.draw_instanz(ctx);
            element.register_collision(project);
            element.fly();
        }

        Spaceship.draw();
        
   
        lib.draw_HUD(ctx, canvas, TIMER, Spaceship.getHeat(), Spaceship.isJammed());
        
        Spaceship.cooldown();

        window.requestAnimationFrame(draw);
    }
    draw();

    canvas.addEventListener("touchstart", (evt) => {
        evt.preventDefault();
        for(const t of evt.changedTouches) {
            Touches[t.identifier] = { x: t.pageX, y: t.pageY};
            Spaceship.Touched(t.identifier, t.pageX, t.pageY);
        }
    });

    canvas.addEventListener("touchend", (evt) => {
        evt.preventDefault();
        for(const t of evt.changedTouches) {
            delete Touches[t.identifier];
            Spaceship.reset(t.identifier);
        }
    });

    canvas.addEventListener("touchmove", (evt) => {
        evt.preventDefault();
        for(const t of evt.changedTouches) {
            Touches[t.identifier] = { x: t.pageX, y: t.pageY};
            Spaceship.move(t.identifier, t.pageX, t.pageY);
        }
    });


}