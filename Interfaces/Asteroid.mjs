
export function asteroid(PosX, PosY, Velocity, Angle, TP, Timestamp) {
    let instanz = {
        posx: PosX,
        posy: PosY,
        velocity: Velocity,
        angle: Angle,
        TP: TP,
        radius: TP*4,
        timestamp: Timestamp,

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
        },

        register_collision: (Projectiles) => {
            for (let i = 0; i < Projectiles.length; i++) {
                if(distance(Projectiles[i].posx, Projectiles[i].posy, instanz.posx, instanz.posy) < instanz.radius) {
                    Projectiles.splice(i, 1);
                    i--;
                    instanz.TP--;
                }
            }
        }

    }

    function distance(x, y, tx, ty) {
        const dx = tx - x;
        const dy = ty - y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    return instanz;
}