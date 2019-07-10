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
    this.speed = 2;
    this.currentTile = 436;
    this.direction = 'y';
    this.name = 'farmer';
  }
  farmerVision() {
    this.tileX = Math.floor(this.x / levelOne.tileSize);
    this.tileY = Math.floor(this.y / levelOne.tileSize);
    this.currentTile = (this.tileY * levelOne.columns + this.tileX);
    // farmer going left
    if (this.name === 'farmer') {
      for (let i = 0; i < levelOne.map.length; i++) {
        if (levelOne.map[i] === 'v') {
          levelOne.map[i] = 0;
        }
      }
    }
    if (levelOne.map[this.currentTile] === 0 || levelOne.map[this.currentTile] === 'v') {
      levelOne.map[this.currentTile] = 'v';
    }
    if (this.direction === 'x' && this.speed < 0) {
      // if the this is going left
      // clear all 'v'

      // this
      // this line
      if (levelOne.map[this.currentTile - 1] === 0 || levelOne.map[this.currentTile - 1] === 'v') {
        levelOne.map[this.currentTile - 1] = 'v';
        if (levelOne.map[this.currentTile - 2] === 0 || levelOne.map[this.currentTile - 2] === 'v') {
          levelOne.map[this.currentTile - 2] = 'v';
          if (levelOne.map[this.currentTile - 3] === 0 || levelOne.map[this.currentTile - 3] === 'v') {
            levelOne.map[this.currentTile - 3] = 'v';
            if (levelOne.map[this.currentTile - 4] === 0 || levelOne.map[this.currentTile - 4] === 'v') {
              levelOne.map[this.currentTile - 4] = 'v';
            }
          }
        }
      }
      // this peripheral top
      if (levelOne.map[this.currentTile - 34] === 0 || levelOne.map[this.currentTile - 34] === 'v') {
        levelOne.map[this.currentTile - 34] = 'v';
        if (levelOne.map[this.currentTile - 35] === 0 || levelOne.map[this.currentTile - 35] === 'v') {
          levelOne.map[this.currentTile - 35] = 'v';
          if (levelOne.map[this.currentTile - 36] === 0 || levelOne.map[this.currentTile - 36] === 'v') {
            levelOne.map[this.currentTile - 36] = 'v';
          }
        }
      }
      // this peripheral bottom
      if (levelOne.map[this.currentTile + 30] === 0 || levelOne.map[this.currentTile + 30] === 'v') {
        levelOne.map[this.currentTile + 30] = 'v';
        if (levelOne.map[this.currentTile + 29] === 0 || levelOne.map[this.currentTile + 29] === 'v') {
          levelOne.map[this.currentTile + 29] = 'v';
          if (levelOne.map[this.currentTile + 28] === 0 || levelOne.map[this.currentTile + 28] === 'v') {
            levelOne.map[this.currentTile + 28] = 'v';
          }
        }
      }
    } else if (this.direction === 'x' && this.speed > 0) {
      // if the this is going right
      // clear all 'v'

      // this
      // this line
      if (levelOne.map[this.currentTile + 1] === 0 || levelOne.map[this.currentTile + 1] === 'v') {
        levelOne.map[this.currentTile + 1] = 'v';
        if (levelOne.map[this.currentTile + 2] === 0 || levelOne.map[this.currentTile + 2] === 'v') {
          levelOne.map[this.currentTile + 2] = 'v';
          if (levelOne.map[this.currentTile + 3] === 0 || levelOne.map[this.currentTile + 3] === 'v') {
            levelOne.map[this.currentTile + 3] = 'v';
            if (levelOne.map[this.currentTile + 4] === 0 || levelOne.map[this.currentTile + 4] === 'v') {
              levelOne.map[this.currentTile + 4] = 'v';
            }
          }
        }
      }
      // this peripheral bottom
      if (levelOne.map[this.currentTile + 34] === 0 || levelOne.map[this.currentTile + 34] === 'v') {
        levelOne.map[this.currentTile + 34] = 'v';
        if (levelOne.map[this.currentTile + 35] === 0 || levelOne.map[this.currentTile + 35] === 'v') {
          levelOne.map[this.currentTile + 35] = 'v';
          if (levelOne.map[this.currentTile + 36] === 0 || levelOne.map[this.currentTile + 36] === 'v') {
            levelOne.map[this.currentTile + 36] = 'v';
          }
        }
      }
      //this peripheral top
      if (levelOne.map[this.currentTile - 30] === 0 || levelOne.map[this.currentTile - 30] === 'v') {
        levelOne.map[this.currentTile - 30] = 'v';
        if (levelOne.map[this.currentTile - 29] === 0 || levelOne.map[this.currentTile - 29] === 'v') {
          levelOne.map[this.currentTile - 29] = 'v';
          if (levelOne.map[this.currentTile - 28] === 0 || levelOne.map[this.currentTile - 28] === 'v') {
            levelOne.map[this.currentTile - 28] = 'v';
          }
        }
      }
    } else if (this.direction === 'y' && this.speed < 0) {
      // the this is is going up
      // clear all 'v'

      // this
      // this line
      if (levelOne.map[this.currentTile - 32] === 0 || levelOne.map[this.currentTile - 32] === 'v') {
        levelOne.map[this.currentTile - 32] = 'v';
        if (levelOne.map[this.currentTile - 64] === 0 || levelOne.map[this.currentTile - 64] === 'v') {
          levelOne.map[this.currentTile - 64] = 'v';
          if (levelOne.map[this.currentTile - 96] === 0 || levelOne.map[this.currentTile - 96] === 'v') {
            levelOne.map[this.currentTile - 96] = 'v';
            if (levelOne.map[this.currentTile - 128] === 0 || levelOne.map[this.currentTile - 128] === 'v') {
              levelOne.map[this.currentTile - 128] = 'v';
            }
          }
        }
      }
      // this peripheral left
      if (levelOne.map[this.currentTile - 65] === 0 || levelOne.map[this.currentTile - 65] === 'v') {
        levelOne.map[this.currentTile - 65] = 'v';
        if (levelOne.map[this.currentTile - 97] === 0 || levelOne.map[this.currentTile - 97] === 'v') {
          levelOne.map[this.currentTile - 97] = 'v';
          if (levelOne.map[this.currentTile - 129] === 0 || levelOne.map[this.currentTile - 129] === 'v') {
            levelOne.map[this.currentTile - 129] = 'v';
          }
        }
      }
      // this peripheral bottom
      if (levelOne.map[this.currentTile - 63] === 0 || levelOne.map[this.currentTile - 63] === 'v') {
        levelOne.map[this.currentTile - 63] = 'v';
        if (levelOne.map[this.currentTile - 95] === 0 || levelOne.map[this.currentTile - 95] === 'v') {
          levelOne.map[this.currentTile - 95] = 'v';
          if (levelOne.map[this.currentTile - 127] === 0 || levelOne.map[this.currentTile - 127] === 'v') {
            levelOne.map[this.currentTile - 127] = 'v';
          }
        }
      }
    } else if (this.direction === 'y' && this.speed > 0) {
      // the this is is going up
      // clear all 'v'

      // this
      // this line
      if (levelOne.map[this.currentTile + 32] === 0 || levelOne.map[this.currentTile + 32] === 'v') {
        levelOne.map[this.currentTile + 32] = 'v';
        if (levelOne.map[this.currentTile + 64] === 0 || levelOne.map[this.currentTile + 64] === 'v') {
          levelOne.map[this.currentTile + 64] = 'v';
          if (levelOne.map[this.currentTile + 96] === 0 || levelOne.map[this.currentTile + 96] === 'v') {
            levelOne.map[this.currentTile + 96] = 'v';
            if (levelOne.map[this.currentTile + 128] === 0 || levelOne.map[this.currentTile + 128] === 'v') {
              levelOne.map[this.currentTile + 128] = 'v';
            }
          }
        }
      }
      // this peripheral left
      if (levelOne.map[this.currentTile + 65] === 0 || levelOne.map[this.currentTile + 65] === 'v') {
        levelOne.map[this.currentTile + 65] = 'v';
        if (levelOne.map[this.currentTile + 97] === 0 || levelOne.map[this.currentTile + 97] === 'v') {
          levelOne.map[this.currentTile + 97] = 'v';
          if (levelOne.map[this.currentTile + 129] === 0 || levelOne.map[this.currentTile + 129] === 'v') {
            levelOne.map[this.currentTile + 129] = 'v';
          }
        }
      }
      // this peripheral bottom
      if (levelOne.map[this.currentTile + 63] === 0 || levelOne.map[this.currentTile + 63] === 'v') {
        levelOne.map[this.currentTile + 63] = 'v';
        if (levelOne.map[this.currentTile + 95] === 0 || levelOne.map[this.currentTile + 95] === 'v') {
          levelOne.map[this.currentTile + 95] = 'v';
          if (levelOne.map[this.currentTile + 127] === 0 || levelOne.map[this.currentTile + 127] === 'v') {
            levelOne.map[this.currentTile + 127] = 'v';
          }
        }
      }
    }
    levelOne.drawTheMap();
  }
}

const farmer = new Player;
farmer.x = 820;
farmer.y = 540;

const dog = new Player;
dog.x = 1060;
dog.y = 300;
dog.name = 'dog';

function drawFarmer() {
  let ctx = document.getElementById('creatures').getContext('2d');

  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(farmer.x, farmer.y, farmer.tileSize / 2, 0, 2 * Math.PI)
  ctx.fill()
  // ctx.fillRect(fox.x, fox.y, fox.tileSize, fox.tileSize);
  ctx.closePath()

  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.arc(dog.x, dog.y, dog.tileSize / 2, 0, 2 * Math.PI)
  ctx.fill()
  // ctx.fillRect(fox.x, fox.y, fox.tileSize, fox.tileSize);
  ctx.closePath()

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
  callDrawDog();
  farmer.farmerVision();
  dog.farmerVision();
  drawFarmer();
}
// solve for making the farmer look better farmer.y - (farmer.tileSize / 2)


export function callDrawDog() {
  dog.tileX = Math.floor(dog.x / levelOne.tileSize);
  dog.tileY = Math.floor(dog.y / levelOne.tileSize);
  dog.currentTile = (dog.tileY * levelOne.columns + dog.tileX);
  if (dog.currentTile === 250) {
    dog.direction = 'x';
    dog.speed = 12;
  } else if (dog.currentTile === 254) {
    dog.direction = 'y';
    dog.speed = 12;
  } else if (dog.currentTile === 542) {
    dog.direction = 'x';
    dog.speed = -12;
  } else if (dog.currentTile === 538) {
    dog.direction = 'y';
    dog.speed = -12;
  }
  if (dog.direction === 'y') {
    dog.y += dog.speed;
  } else if (dog.direction === 'x') {
    dog.x += dog.speed;
  }
}

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
