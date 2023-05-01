class MovingObject {
    constructor(options) {
        this.pos = options['pos'];
        this.vel = options['vel'];
        this.radius = options['radius'];
        this.color = options['color'];
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(...this.pos, 0, 2*Math.PI, false);
        ctx.strokeStyle = 'orange';
        ctx.lineWidth = 20;
        ctx.stroke();
        ctx.fill();
        // console.log('ha')
    };
}

export default MovingObject; 