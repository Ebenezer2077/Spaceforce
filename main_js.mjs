import * as lib from "./Functions/general.mjs"
import * as ship from "./Functions/ship_functions.mjs"
import * as ast from "./Interfaces/Asteroid.mjs"
import * as GB from "./Functions/GarbageCollector.mjs"

window.onload = () => {
    const { canvas, ctx} = lib.init("canvas_id");
    ctx.fillStyle = "#f00";

    const interactive_Elements = [];
    interactive_Elements.push(ship.createShip(canvas, ctx, 100, 100));
    const asteroids = [];

    //testing
    let a = ast.asteroid(200, 600, 1, 0, 20);
    asteroids.push(a);
    //testing

    const Touches = {};

    function draw() {
        ctx.resetTransform();
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
        lib.draw_background(ctx);
        let project = interactive_Elements[0].Projectiles;

        GB.check_TP(asteroids);

        for(const element of asteroids) {
            element.draw_instanz(ctx);
            element.register_collision(project);
        }

        for(const ie of interactive_Elements) {
            ie.draw();
        }

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