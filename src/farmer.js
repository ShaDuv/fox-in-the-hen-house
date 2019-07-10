import { levelOne } from './main.js';
import { drawTheMap } from './grid.js';

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
    this.currentTile = 436;
    this.direction = 'y';
  }
}

const farmer = new Player;
farmer.x = 820;
farmer.y = 540;


function drawFarmer() {
  let ctx = document.getElementById('creatures').getContext('2d');

  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(farmer.x, farmer.y, farmer.tileSize / 2, 0, 2 * Math.PI)
  ctx.fill()
  // ctx.fillRect(fox.x, fox.y, fox.tileSize, fox.tileSize);
  ctx.closePath()

}

function farmerVision() {
  const viewRange = 5;
  if (farmer.direction === 'x' && farmer.speed === -2) {
    // clear all 'v'
    for (var i = 0; i < levelOne.map.length; i++) {
      if (levelOne.map[i] === 'v') {
        levelOne.map[i] = 0;
      }
    }

    // farmer
    levelOne.map[farmer.currentTile] = 'v';
    // farmer line
    if (levelOne.map[farmer.currentTile - 1] === 0 || levelOne.map[farmer.currentTile - 1] === 'v') {
      levelOne.map[farmer.currentTile - 1] = 'v';
      if (levelOne.map[farmer.currentTile - 2] === 0 || levelOne.map[farmer.currentTile - 2] === 'v') {
        levelOne.map[farmer.currentTile - 2] = 'v';
        if (levelOne.map[farmer.currentTile - 3] === 0 || levelOne.map[farmer.currentTile - 3] === 'v') {
          levelOne.map[farmer.currentTile - 3] = 'v';
          if (levelOne.map[farmer.currentTile - 4] === 0 || levelOne.map[farmer.currentTile - 4] === 'v') {
            levelOne.map[farmer.currentTile - 4] = 'v';
          }
        }
      }
    }
    // farmer peripheral top
    if (levelOne.map[farmer.currentTile - 34] === 0 || levelOne.map[farmer.currentTile - 34] === 'v') {
      levelOne.map[farmer.currentTile - 34] = 'v';
      if (levelOne.map[farmer.currentTile - 35] === 0 || levelOne.map[farmer.currentTile - 35] === 'v') {
        levelOne.map[farmer.currentTile - 35] = 'v';
        if (levelOne.map[farmer.currentTile - 36] === 0 || levelOne.map[farmer.currentTile - 36] === 'v') {
          levelOne.map[farmer.currentTile - 36] = 'v';
        }
      }
    }
    // farmer peripheral top
    if (levelOne.map[farmer.currentTile + 30] === 0 || levelOne.map[farmer.currentTile - 30] === 'v') {
      levelOne.map[farmer.currentTile + 30] = 'v';
      if (levelOne.map[farmer.currentTile + 29] === 0 || levelOne.map[farmer.currentTile - 29] === 'v') {
        levelOne.map[farmer.currentTile + 29] = 'v';
        if (levelOne.map[farmer.currentTile + 28] === 0 || levelOne.map[farmer.currentTile - 28] === 'v') {
          levelOne.map[farmer.currentTile + 28] = 'v';
        }
      }
    }
    levelOne.drawTheMap();
  }

}



export function callDrawFarmer() {
  farmer.tileX = Math.floor(farmer.x / levelOne.tileSize);
  farmer.tileY = Math.floor(farmer.y / levelOne.tileSize);
  farmer.currentTile = (farmer.tileY * levelOne.columns + farmer.tileX);
  if (farmer.currentTile === 436) {
    farmer.direction = 'y';
    farmer.speed = -2;
  } else if (farmer.currentTile === 276) {
    farmer.direction = 'x';
    farmer.speed = -2;
  } else if (farmer.currentTile === 273) {
    farmer.direction = 'y';
    farmer.speed = -2;
  } else if (farmer.currentTile === 81) {
    farmer.direction = 'x';
    farmer.speed = -2;
  } else if (farmer.currentTile === 75) {
    farmer.direction = 'y';
    farmer.speed = 2;
  } else if (farmer.currentTile === 299) {
    farmer.direction = 'x';
    farmer.speed = -2;
  } else if (farmer.currentTile === 294) {
    farmer.direction = 'y';
    farmer.speed = 2;
  } else if (farmer.currentTile === 422) {
    farmer.direction = 'x';
    farmer.speed = 2;
  }
  if (farmer.direction === 'y') {
    farmer.y += farmer.speed;
  } else if (farmer.direction === 'x') {
    farmer.x += farmer.speed;
  }
  farmerVision();
  drawFarmer();
}
// solve for making the farmer look better farmer.y - (farmer.tileSize / 2)


function farmerLoop() {
  let count = 0;
  farmerTimer = setInterval(farmerMovement, 50);
  function farmerMovement() {

  }
}





// ProgressCountdown(10, 'pageBeginCountdown', 'pageBeginCountdownText');
//
//
// function ProgressCountdown(timeleft, bar, text) {
  //   return new Promise((resolve, reject) => {
    //     var countdownTimer = setInterval(() => {
      //       timeleft--;
      //
      //
      //
      //       if (timeleft <= 0) {
        //         clearInterval(countdownTimer);
        //         resolve();
        //       }
        //     }, 1000);
        //   });
        // }
