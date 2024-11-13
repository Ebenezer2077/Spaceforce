export function asteroid(PosX, PosY, Velocity, Angle, TP) {
    let instanz = {
        posx: PosX,
        posy: PosY,
        velocity: Velocity,
        angle: Angle,

        draw_instanz: (ctx) => {
            ctx.resetTransform();
            ctx.translate(instanz.posx, instanz.posy);
            ctx.beginPath();
            ctx.arc(0, 0, TP*4, 0, 2 * Math.PI);
            ctx.fillStyle = "grey";
            ctx.fill();
        },

        fly: () => {
            instanz.posx += Math.cos(instanz.angle)*instanz.velocity;
            instanz.posy += Math.sin(instanz.angle)*instanz.velocity;
        }
    }
    return instanz;
}