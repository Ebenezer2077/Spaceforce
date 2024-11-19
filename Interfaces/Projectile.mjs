export function newProjectile( PosX, PosY, Velocity, Angle) {
    let instanz = {
        posx: PosX,
        posy: PosY,
        velocity: Velocity,
        angle: Angle,

        draw_instanz: (ctx) => {
            ctx.resetTransform();
            ctx.translate(instanz.posx, instanz.posy);
            ctx.beginPath();
            ctx.arc(0, 0, 10, 0, 2 * Math.PI);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.resetTransform();
        },

        fly: () => {
            instanz.posx += Math.cos(instanz.angle)*instanz.velocity;
            instanz.posy += Math.sin(instanz.angle)*instanz.velocity;
        }
    }
    return instanz;
}