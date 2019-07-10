import { levelOne } from './main.js';
import { drawTheMap } from './grid.js';

class Player {
  constructor() {
    this.x = 1130;
    this.y = 440;
    this.tileSize = 40;
    this.tileX = 28;
    this.tileY = 11;
    this.currentTile = 380;
  }
}

export const chicken = new Player;

let chicken_down = document.getElementById("chicken-down");

export function drawChicken() {
  chicken.tileX = Math.floor(chicken.x / levelOne.tileSize);
  chicken.tileY = Math.floor(chicken.y / levelOne.tileSize);
  chicken.currentTile = (chicken.tileY * levelOne.columns + chicken.tileX);
  let ctx = document.getElementById('chicken').getContext('2d');

  ctx.beginPath();
  ctx.drawImage (chicken_down, chicken.x, chicken.y, chicken.tileSize, chicken.tileSize);
  // ctx.fillRect(fox.x, fox.y, fox.tileSize, fox.tileSize);
  ctx.closePath()
  console.log(chicken.currentTile);
  levelOne.map[chicken.currentTile] = 'c';
}
