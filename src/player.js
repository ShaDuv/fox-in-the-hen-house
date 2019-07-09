export class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.up = false;
    this.left = false;
    this.down = false;
    this.right = false;
  }

}
function drawPlayer() {
  let ctx = document.getElementById('creatures').getContext('2d');
  ctx.clearRect(0, 0, 1000, 1000)
  // ctx.beginPath();
  ctx.fillStyle = '#FF0990';
  ctx.fillRect(fox.x, fox.y, 20, 20);
  // ctx.closePath();
  window.requestAnimationFrame(loopityLoop);
}

export var fox = new Player;

export function keyDownHandler(event) {
  if (event.keyCode === 87 || event.keyCode === 38) {
    // if w or up arrow
    fox.up = true;
    console.log('Up.');
  } else if (event.keyCode === 65 || event.keyCode === 37) {
    // if a left arrow
    fox.left = true;
    console.log('Left');
  } else if (event.keyCode === 83 || event.keyCode === 40) {
    // if s or down arrow
    fox.down = true;
    console.log('Down');
  } else if (event.keyCode === 68 || event.keyCode === 39) {
    // if d or right arrow
    fox.right = true;
    console.log('Right');
  }
}

export function keyUpHandler(event) {
  if (event.keyCode === 87 || event.keyCode === 38) {
    // if w
    fox.up = false;
    console.log('Up is not being pressed anymore.');
  } else if (event.keyCode === 65 || event.keyCode === 37) {
    // if a
    fox.left = false;
    console.log('Left is not being pressed anymore.');
  } else if (event.keyCode === 83 || event.keyCode === 40) {
    // if s
    fox.down = false;
    console.log('Down is not being pressed anymore.');
  } else if (event.keyCode === 68 || event.keyCode === 39) {
    // if d
    fox.right = false;
    console.log('Right is not being pressed anymore.');
  }
}

export function loopityLoop() {
  //if you want diagonals use a switch statement
  if (fox.up) {
    fox.y -= 3;
  } else if (fox.left) {
    fox.x -= 3;
  } else if (fox.down) {
    fox.y += 3;
  } else if (fox.right) {
    fox.x += 3;
  }
  drawPlayer();
}
