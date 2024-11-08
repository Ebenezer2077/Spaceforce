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
            ctx.arc(0, 0, 40, 0, 2 * Math.PI);
            ctx.stroke();
        },

        fly: () => {
            instanz.posx += Math.cos(instanz.angle)*instanz.velocity;
            instanz.posy += Math.sin(instanz.angle)*instanz.velocity;
        }
    }


    return instanz;


}