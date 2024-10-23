import * as lib from "./Functions/general.mjs"
import * as ship from "./Functions/ship_functions.mjs"

window.onload = () => {
    const { canvas, ctx} = lib.init("canvas_id");
    ctx.fillStyle = "#f00";

    const interactive_Elements = [];
    interactive_Elements.push(ship.createShip(ctx, 100, 100, 30, () => {}));

    function draw() {
        ctx.resetTransform();
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

        for(const ie of interactive_Elements) {
            ie.draw();
        }
        window.requestAnimationFrame(draw);
    }
    draw();
}