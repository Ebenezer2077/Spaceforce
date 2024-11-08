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
        }
    }


    return instanz;


}