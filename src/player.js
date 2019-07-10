import { levelOne } from './main.js';

class Player {
  constructor() {
    this.x = 20;
    this.y = 20;
    this.up = false;
    this.left = false;
    this.down = false;
    this.right = false;
    this.tileSize = 20;
    this.tileX = 1;
    this.tileY = 1;
    this.speed = 3;
  }

}
function drawPlayer() {
  let ctx = document.getElementById('creatures').getContext('2d');
  ctx.clearRect(0, 0, 1000, 1000)
  // ctx.beginPath();
  ctx.fillStyle = '#FF0990';
  ctx.fillRect(fox.x, fox.y, 20, 20);
  // ctx.closePath()
  window.requestAnimationFrame(loopityLoop);
}

const fox = new Player;

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
  fox.tileX = Math.floor(fox.x / levelOne.tileSize);
  fox.tileY = Math.floor(fox.y / levelOne.tileSize);
  console.log(fox.tileX + ', ' + fox.tileY + ', ' + levelOne.map[(fox.tileY * levelOne.columns + fox.tileX)]);

  let testPosition = Math.floor((fox.x - fox.speed) / levelOne.tileSize);
  console.log('testPosition: ', testPosition);
    if (fox.up) {
      // if you move up 3 pixels will that put you into a tile that contains a 1
      if (Math.floor(levelOne.map[Math.floor((fox.y - fox.speed) / levelOne.tileSize) * levelOne.columns + fox.tileX]) === 0 ) {
        fox.y -= fox.speed;
      }
    } else if (fox.left) {
      // console.log('this is what you want'); //Math.floor(levelOne.map[testPosition * levelOne.columns + fox.tileX]));
      if (Math.floor(levelOne.map[(fox.tileY * levelOne.columns + Math.floor((fox.x - fox.speed) / levelOne.tileSize))]) === 0 ) {
      fox.x -= fox.speed;
    }
    } else if (fox.down) {
      if (Math.floor(levelOne.map[Math.floor(((fox.y + levelOne.tileSize) + fox.speed) / levelOne.tileSize) * levelOne.columns + fox.tileX]) === 0 ) {
      fox.y += fox.speed;
    }
    } else if (fox.right) {
      if (Math.floor(levelOne.map[(fox.tileY * levelOne.columns + Math.floor((fox.x + fox.speed) / levelOne.tileSize))]) === 0 ) {
        fox.x += fox.speed;
    }
    }
  // else {
  //   console.log('Only an idiot would think that foxes can walk though non-zero walls Daniel!');
  // }
  drawPlayer();
}

function locationToInvade() {

    console.log(fox.tileX + ', ' + fox.tileY + ', ' + levelOne.map[fox.tileY * levelOne.columns + fox.tileY]);
    if (levelOne.map[fox.tileY * levelOne.columns + fox.tileY] !== 0) {
      return false;
    }
    return true;
}

// levelOne.map[(fox.tileY * levelOne.columns + fox.tileX)]
