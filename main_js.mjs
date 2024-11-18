import * as lib from "./Functions/general.mjs"
import * as ship from "./Functions/ship_functions.mjs"
import * as ast from "./Interfaces/Asteroid.mjs"
import * as GB from "./Functions/GarbageCollector.mjs"
import * as LL from "./Functions/LevelLoader.mjs"

window.onload = () => {
    const { canvas, ctx} = lib.init("canvas_id");
    ctx.fillStyle = "#f00";

    const interactive_Elements = [];
    interactive_Elements.push(ship.createShip(canvas, ctx, 300, 600));
    const allAsteroids = [] = LL.LoadLevel(canvas);
    const asteroids = [];


    const Touches = {};
    let TIMER = 0;
    let HEAT = 0;

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

        let project = interactive_Elements[0].Projectiles;

        GB.check_TP(asteroids);
        GB.is_in_canvas(canvas, asteroids);
        GB.is_in_canvas(canvas, project);

        for(const element of asteroids) {
            if(GB.is_ship_hit(interactive_Elements[0].getCoordinates()[0], interactive_Elements[0].getCoordinates()[1],element)) {
                interactive_Elements.pop();
            }
            element.draw_instanz(ctx);
            element.register_collision(project);
            element.fly();
        }

        for(const ie of interactive_Elements) {
            ie.draw();
        }
        /*
        
        ctx.save();
        ctx.resetTransform();

        ctx.font = "30px serif";
        ctx.fillText("Score: " + TIMER, 10, 50);
        ctx.restore();
        */
        lib.draw_HUD(ctx, canvas, TIMER, 400, interactive_Elements[0].getHeat());
        
        interactive_Elements[0].cooldown();

        window.requestAnimationFrame(draw);
    }
    draw();

    canvas.addEventListener("touchstart", (evt) => {
        evt.preventDefault();
        for(const t of evt.changedTouches) {
            Touches[t.identifier] = { x: t.pageX, y: t.pageY};
            for(const ie of interactive_Elements) {
                ie.Touched(t.identifier, t.pageX, t.pageY)
            }
        }
    });

    canvas.addEventListener("touchend", (evt) => {
        evt.preventDefault();
        for(const t of evt.changedTouches) {
            delete Touches[t.identifier];
            for(const ie of interactive_Elements) {
                ie.reset(t.identifier);
            }
        }
    });

    canvas.addEventListener("touchmove", (evt) => {
        evt.preventDefault();
        for(const t of evt.changedTouches) {
            Touches[t.identifier] = { x: t.pageX, y: t.pageY};
            for(const ie of interactive_Elements) {
                ie.move(t.identifier, t.pageX, t.pageY)
            }
        }
    });


}