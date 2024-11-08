export function newProjectile( PosX, PosY, Velocity, Angle) {
    instanz = {
        PosX,
        PosY,
        Velocity,
        Angle
    }

    function draw_instanz() {
        ctx.rotate(Angle);
        ctx.beginPath();
        ctx.arc(PosX, PosY, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    return { instanz, draw_instanz}


}