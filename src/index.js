console.log('Webpack is working');
import MovingObject from "./moving_object.js";
window.MovingObject = MovingObject;

// console.log('hi')

// import MovingObject from "./moving_object.js";


const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});
// console.log('hi')
document.addEventListener('DOMContentLoaded', () => {

    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext("2d");
    // console.log('hi')
    
    mo.draw(ctx);
})