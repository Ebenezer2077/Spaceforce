export function newProjectile( PosX, PosY, Velocity, Angle) {
    let instanz = {
        posx: PosX,
        posy: PosY,
        velocity: Velocity,
        angle: Angle,

        draw_instanz: (ctx) => {
            ctx.beginPath();
            ctx.arc(PosX, PosY, 400, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }


    return instanz;


}