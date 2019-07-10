import { levelOne } from './main.js';
import { drawTheMap } from './grid.js';

class Player {
  constructor() {
    this.x = 1140;
    this.y = 460;
    this.tileSize = 40;
    this.tileX = 28;
    this.tileY = 11;
    this.currentTile = 380;
  }
}

export const chicken = new Player;


export function drawChicken() {
  chicken.tileX = Math.floor(chicken.x / levelOne.tileSize);
  chicken.tileY = Math.floor(chicken.y / levelOne.tileSize);
  chicken.currentTile = (chicken.tileY * levelOne.columns + chicken.tileX);
  let ctx = document.getElementById('chicken').getContext('2d');

  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.arc(chicken.x, chicken.y, chicken.tileSize / 2, 0, 2 * Math.PI)
  ctx.fill()
  // ctx.fillRect(fox.x, fox.y, fox.tileSize, fox.tileSize);
  ctx.closePath()
  console.log(chicken.currentTile);
  levelOne.map[chicken.currentTile] = 'c';
}
