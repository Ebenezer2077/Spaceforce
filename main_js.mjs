import * as lib from "./Functions/general.mjs"
import * as ship from "./Functions/ship_functions.mjs"

window.onload = () => {
    const { canvas, ctx} = lib.init("canvas_id");
    ctx.fillStyle = "#f00";

    const interactive_Elements = [];
    interactive_Elements.push(ship.createShip(ctx, 100, 100, 30, () => {}));

    const Touches = {};

    function draw() {
        ctx.resetTransform();
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

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
                //ie.reset(t.identifier);
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