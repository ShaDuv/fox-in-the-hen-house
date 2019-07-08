export function drawPlayer() {
  let movement = 0;
  // if (movement.up) {
  //   this
  // } else if (movement.left) {
  //
  // } else if (movement.down) {
  //
  // } else if (movemnt.right) {
  //
  // }

  drawTile(drawOnThis)
}
  function drawTile(drawOnThis, x, y) {
    let ctx = drawOnThis.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#FF0990';
    ctx.fillRect(x, y, 20, 20);
  };


export class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}
