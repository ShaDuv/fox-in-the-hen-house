import { levelOne } from './main.js';
import { callDrawFarmer } from './farmer.js';
import { isFoxCaught } from './main.js';
import { isChickenBeingEaten } from './main.js';

class Player {
  constructor() {
    this.x = 60;
    this.y = 60;
    this.up = false;
    this.left = false;
    this.down = false;
    this.right = false;
    this.tileSize = 40;
    this.tileX = 1;
    this.tileY = 1;
    this.speed = 3;
    this.direction = foxImageRight;
  }

}
function drawPlayer() {
  let ctx = document.getElementById('creatures').getContext('2d');


  ctx.clearRect(0, 0, 1280, 720);

  if (fox.left) {
    ctx.drawImage (foxImageLeft, fox.x, fox.y, fox.tileSize, fox.tileSize);
  } else if (fox.right) {
    ctx.drawImage (foxImageRight, fox.x, fox.y, fox.tileSize, fox.tileSize);
  } else if (fox.up) {
    ctx.drawImage (foxImageUp, fox.x, fox.y, fox.tileSize, fox.tileSize);
  } else if (fox.down) {
    ctx.drawImage (foxImageDown, fox.x, fox.y, fox.tileSize, fox.tileSize);
  } else {
    ctx.drawImage (fox.direction, fox.x, fox.y, fox.tileSize, fox.tileSize);
  }
  window.requestAnimationFrame(loopityLoop);
}

const foxImageLeft = document.getElementById("fox-left");
const foxImageRight = document.getElementById("fox-right");
const foxImageUp = document.getElementById("fox-up");
const foxImageDown = document.getElementById("fox-down");

export const fox = new Player();


export function keyDownHandler(event) {
  if (event.keyCode === 87 || event.keyCode === 38) {
    // if w or up arrow
    fox.up = true;
    fox.direction = foxImageUp;
    console.log('Up.');
  } else if (event.keyCode === 65 || event.keyCode === 37) {
    // if a left arrow
    fox.left = true;
    fox.direction = foxImageLeft;
    console.log('Left');
  } else if (event.keyCode === 83 || event.keyCode === 40) {
    // if s or down arrow
    fox.down = true;
    fox.direction = foxImageDown;
    console.log('Down');
  } else if (event.keyCode === 68 || event.keyCode === 39) {
    // if d or right arrow
    fox.right = true;
    fox.direction = foxImageRight;
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


  // console.log(fox.tileY * levelOne.columns + fox.tileX);

  if (fox.up) {
    // if you move up 3 pixels will that put you into a tile that contains a 1
    if (Math.floor(levelOne.map[Math.floor((fox.y - fox.speed - (levelOne.tileSize / 2)) / levelOne.tileSize) * levelOne.columns + fox.tileX]) === 0 || levelOne.map[Math.floor((fox.y - fox.speed - (levelOne.tileSize / 2)) / levelOne.tileSize) * levelOne.columns + fox.tileX] === 'v' || levelOne.map[Math.floor((fox.y - fox.speed - (levelOne.tileSize / 2)) / levelOne.tileSize) * levelOne.columns + fox.tileX] === 'c') {
      fox.y -= fox.speed;
    }
  } else if (fox.left) {
    // console.log('this is what you want'); //Math.floor(levelOne.map[testPosition * levelOne.columns + fox.tileX]));
    if (Math.floor(levelOne.map[(fox.tileY * levelOne.columns + Math.floor((fox.x - fox.speed - (levelOne.tileSize / 2)) / levelOne.tileSize))]) === 0 || levelOne.map[(fox.tileY * levelOne.columns + Math.floor((fox.x - fox.speed - (levelOne.tileSize / 2)) / levelOne.tileSize))] === 'v' || levelOne.map[(fox.tileY * levelOne.columns + Math.floor((fox.x - fox.speed - (levelOne.tileSize / 2)) / levelOne.tileSize))] === 'c') {
      fox.x -= fox.speed;
    }
  } else if (fox.down) {
    if (Math.floor(levelOne.map[Math.floor(((fox.y + (levelOne.tileSize / 2)) + fox.speed) / levelOne.tileSize) * levelOne.columns + fox.tileX]) === 0 || levelOne.map[Math.floor(((fox.y + (levelOne.tileSize / 2)) + fox.speed) / levelOne.tileSize) * levelOne.columns + fox.tileX] === 'v' || levelOne.map[Math.floor(((fox.y + (levelOne.tileSize / 2)) + fox.speed) / levelOne.tileSize) * levelOne.columns + fox.tileX] === 'c') {
      fox.y += fox.speed;
    }
  } else if (fox.right) {
    if (Math.floor(levelOne.map[(fox.tileY * levelOne.columns + Math.floor((fox.x + fox.speed + (levelOne.tileSize / 2)) / levelOne.tileSize))]) === 0 || levelOne.map[(fox.tileY * levelOne.columns + Math.floor((fox.x + fox.speed + (levelOne.tileSize / 2)) / levelOne.tileSize))] === 'v' || levelOne.map[(fox.tileY * levelOne.columns + Math.floor((fox.x + fox.speed + (levelOne.tileSize / 2)) / levelOne.tileSize))] === 'c') {
      fox.x += fox.speed;
    }
  }
  // else {
    //     console.log('Only an idiot would think that foxes can walk though non-zero walls Daniel!');
    //   }

    if (isFoxCaught() && isChickenBeingEaten()) {
      drawPlayer();
      callDrawFarmer();
    }
  }




  // levelOne.map[(fox.tileY * levelOne.columns + fox.tileX)]

  // if the fox is caught the else happens
