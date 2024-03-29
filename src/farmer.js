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
    this.vision = 'v';
  }
  farmerVision() {
    this.tileX = Math.floor(this.x / levelOne.tileSize);
    this.tileY = Math.floor(this.y / levelOne.tileSize);
    this.currentTile = (this.tileY * levelOne.columns + this.tileX);
    // farmer going left
    if (this.name === 'farmer') {
      for (let i = 0; i < levelOne.map.length; i++) {
        if (levelOne.map[i] === farmer.vision || levelOne.map[i] === dog.vision) {
          levelOne.map[i] = 0;
        }
      }
    }
    if (levelOne.map[this.currentTile] === 0 || levelOne.map[this.currentTile] === this.vision) {
      levelOne.map[this.currentTile] = this.vision;
    }
    if (this.direction === 'x' && this.speed < 0) {
      // if the this is going left
      // clear all this.vision

      // this
      // this line
      if (levelOne.map[this.currentTile - 1] === 0 || levelOne.map[this.currentTile - 1] === this.vision) {
        levelOne.map[this.currentTile - 1] = this.vision;
        if (levelOne.map[this.currentTile - 2] === 0 || levelOne.map[this.currentTile - 2] === this.vision) {
          levelOne.map[this.currentTile - 2] = this.vision;
          if (levelOne.map[this.currentTile - 3] === 0 || levelOne.map[this.currentTile - 3] === this.vision) {
            levelOne.map[this.currentTile - 3] = this.vision;
            if (levelOne.map[this.currentTile - 4] === 0 || levelOne.map[this.currentTile - 4] === this.vision) {
              levelOne.map[this.currentTile - 4] = this.vision;
            }
          }
        }
      }
      // this peripheral top
      if (levelOne.map[this.currentTile - 34] === 0 || levelOne.map[this.currentTile - 34] === this.vision) {
        levelOne.map[this.currentTile - 34] = this.vision;
        if (levelOne.map[this.currentTile - 35] === 0 || levelOne.map[this.currentTile - 35] === this.vision) {
          levelOne.map[this.currentTile - 35] = this.vision;
          if (levelOne.map[this.currentTile - 36] === 0 || levelOne.map[this.currentTile - 36] === this.vision) {
            levelOne.map[this.currentTile - 36] = this.vision;
          }
        }
      }
      // this peripheral bottom
      if (levelOne.map[this.currentTile + 30] === 0 || levelOne.map[this.currentTile + 30] === this.vision) {
        levelOne.map[this.currentTile + 30] = this.vision;
        if (levelOne.map[this.currentTile + 29] === 0 || levelOne.map[this.currentTile + 29] === this.vision) {
          levelOne.map[this.currentTile + 29] = this.vision;
          if (levelOne.map[this.currentTile + 28] === 0 || levelOne.map[this.currentTile + 28] === this.vision) {
            levelOne.map[this.currentTile + 28] = this.vision;
          }
        }
      }
    } else if (this.direction === 'x' && this.speed > 0) {
      // if the this is going right
      // clear all this.vision

      // this
      // this line
      if (levelOne.map[this.currentTile + 1] === 0 || levelOne.map[this.currentTile + 1] === this.vision) {
        levelOne.map[this.currentTile + 1] = this.vision;
        if (levelOne.map[this.currentTile + 2] === 0 || levelOne.map[this.currentTile + 2] === this.vision) {
          levelOne.map[this.currentTile + 2] = this.vision;
          if (levelOne.map[this.currentTile + 3] === 0 || levelOne.map[this.currentTile + 3] === this.vision) {
            levelOne.map[this.currentTile + 3] = this.vision;
            if (levelOne.map[this.currentTile + 4] === 0 || levelOne.map[this.currentTile + 4] === this.vision) {
              levelOne.map[this.currentTile + 4] = this.vision;
            }
          }
        }
      }
      // this peripheral bottom
      if (levelOne.map[this.currentTile + 34] === 0 || levelOne.map[this.currentTile + 34] === this.vision) {
        levelOne.map[this.currentTile + 34] = this.vision;
        if (levelOne.map[this.currentTile + 35] === 0 || levelOne.map[this.currentTile + 35] === this.vision) {
          levelOne.map[this.currentTile + 35] = this.vision;
          if (levelOne.map[this.currentTile + 36] === 0 || levelOne.map[this.currentTile + 36] === this.vision) {
            levelOne.map[this.currentTile + 36] = this.vision;
          }
        }
      }
      //this peripheral top
      if (levelOne.map[this.currentTile - 30] === 0 || levelOne.map[this.currentTile - 30] === this.vision) {
        levelOne.map[this.currentTile - 30] = this.vision;
        if (levelOne.map[this.currentTile - 29] === 0 || levelOne.map[this.currentTile - 29] === this.vision) {
          levelOne.map[this.currentTile - 29] = this.vision;
          if (levelOne.map[this.currentTile - 28] === 0 || levelOne.map[this.currentTile - 28] === this.vision) {
            levelOne.map[this.currentTile - 28] = this.vision;
          }
        }
      }
    } else if (this.direction === 'y' && this.speed < 0) {
      // the this is is going up
      // clear all this.vision

      // this
      // this line
      if (levelOne.map[this.currentTile - 32] === 0 || levelOne.map[this.currentTile - 32] === this.vision) {
        levelOne.map[this.currentTile - 32] = this.vision;
        if (levelOne.map[this.currentTile - 64] === 0 || levelOne.map[this.currentTile - 64] === this.vision) {
          levelOne.map[this.currentTile - 64] = this.vision;
          if (levelOne.map[this.currentTile - 96] === 0 || levelOne.map[this.currentTile - 96] === this.vision) {
            levelOne.map[this.currentTile - 96] = this.vision;
            if (levelOne.map[this.currentTile - 128] === 0 || levelOne.map[this.currentTile - 128] === this.vision) {
              levelOne.map[this.currentTile - 128] = this.vision;
            }
          }
        }
      }
      // this peripheral left
      if (levelOne.map[this.currentTile - 65] === 0 || levelOne.map[this.currentTile - 65] === this.vision) {
        levelOne.map[this.currentTile - 65] = this.vision;
        if (levelOne.map[this.currentTile - 97] === 0 || levelOne.map[this.currentTile - 97] === this.vision) {
          levelOne.map[this.currentTile - 97] = this.vision;
          if (levelOne.map[this.currentTile - 129] === 0 || levelOne.map[this.currentTile - 129] === this.vision) {
            levelOne.map[this.currentTile - 129] = this.vision;
          }
        }
      }
      // this peripheral bottom
      if (levelOne.map[this.currentTile - 63] === 0 || levelOne.map[this.currentTile - 63] === this.vision) {
        levelOne.map[this.currentTile - 63] = this.vision;
        if (levelOne.map[this.currentTile - 95] === 0 || levelOne.map[this.currentTile - 95] === this.vision) {
          levelOne.map[this.currentTile - 95] = this.vision;
          if (levelOne.map[this.currentTile - 127] === 0 || levelOne.map[this.currentTile - 127] === this.vision) {
            levelOne.map[this.currentTile - 127] = this.vision;
          }
        }
      }
    } else if (this.direction === 'y' && this.speed > 0) {
      // the this is is going up
      // clear all this.vision

      // this
      // this line
      if (levelOne.map[this.currentTile + 32] === 0 || levelOne.map[this.currentTile + 32] === this.vision) {
        levelOne.map[this.currentTile + 32] = this.vision;
        if (levelOne.map[this.currentTile + 64] === 0 || levelOne.map[this.currentTile + 64] === this.vision) {
          levelOne.map[this.currentTile + 64] = this.vision;
          if (levelOne.map[this.currentTile + 96] === 0 || levelOne.map[this.currentTile + 96] === this.vision) {
            levelOne.map[this.currentTile + 96] = this.vision;
            if (levelOne.map[this.currentTile + 128] === 0 || levelOne.map[this.currentTile + 128] === this.vision) {
              levelOne.map[this.currentTile + 128] = this.vision;
            }
          }
        }
      }
      // this peripheral left
      if (levelOne.map[this.currentTile + 65] === 0 || levelOne.map[this.currentTile + 65] === this.vision) {
        levelOne.map[this.currentTile + 65] = this.vision;
        if (levelOne.map[this.currentTile + 97] === 0 || levelOne.map[this.currentTile + 97] === this.vision) {
          levelOne.map[this.currentTile + 97] = this.vision;
          if (levelOne.map[this.currentTile + 129] === 0 || levelOne.map[this.currentTile + 129] === this.vision) {
            levelOne.map[this.currentTile + 129] = this.vision;
          }
        }
      }
      // this peripheral bottom
      if (levelOne.map[this.currentTile + 63] === 0 || levelOne.map[this.currentTile + 63] === this.vision) {
        levelOne.map[this.currentTile + 63] = this.vision;
        if (levelOne.map[this.currentTile + 95] === 0 || levelOne.map[this.currentTile + 95] === this.vision) {
          levelOne.map[this.currentTile + 95] = this.vision;
          if (levelOne.map[this.currentTile + 127] === 0 || levelOne.map[this.currentTile + 127] === this.vision) {
            levelOne.map[this.currentTile + 127] = this.vision;
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
dog.vision = 'd';

const ctx = document.getElementById('creatures').getContext('2d');
const dogImageLeft = document.getElementById("dog-left");
const dogImageRight = document.getElementById("dog-right");
const dogImageUp = document.getElementById("dog-up");
const dogImageDown = document.getElementById("dog-down");
const farmerImageLeft = document.getElementById("farmer-left");
const farmerImageRight = document.getElementById("farmer-right");
const farmerImageUp = document.getElementById("farmer-up");
const farmerImageDown = document.getElementById("farmer-down");

function drawFarmer() {


  if (farmer.direction === 'x' && farmer.speed < 0) {
    ctx.drawImage (farmerImageLeft, farmer.x - (farmer.tileSize - 20), farmer.y - (farmer.tileSize - 20), farmer.tileSize, farmer.tileSize);
  } else if (farmer.direction === 'x' && farmer.speed > 0) {
    ctx.drawImage (farmerImageRight, farmer.x - (farmer.tileSize - 20), farmer.y - (farmer.tileSize - 20), farmer.tileSize, farmer.tileSize);
  } else if (farmer.direction === 'y' && farmer.speed < 0) {
    ctx.drawImage (farmerImageUp, farmer.x - (farmer.tileSize - 20), farmer.y - (farmer.tileSize - 20), farmer.tileSize, farmer.tileSize);
  } else if (farmer.direction === 'y' && farmer.speed > 0) {
    ctx.drawImage (farmerImageDown, farmer.x - (farmer.tileSize - 20), farmer.y - (farmer.tileSize - 20), farmer.tileSize, farmer.tileSize);
  }

  if (dog.direction === 'x' && dog.speed < 0) {
    ctx.drawImage (dogImageLeft, dog.x - (dog.tileSize / 2), dog.y - (dog.tileSize / 2), dog.tileSize, dog.tileSize);
  } else if (dog.direction === 'x' && dog.speed > 0) {
    ctx.drawImage (dogImageRight, dog.x - (dog.tileSize / 2), dog.y - (dog.tileSize / 2), dog.tileSize, dog.tileSize);
  } else if (dog.direction === 'y' && dog.speed < 0) {
    ctx.drawImage (dogImageUp, dog.x - (dog.tileSize / 2), dog.y - (dog.tileSize / 2), dog.tileSize, dog.tileSize);
  } else if (dog.direction === 'y' && dog.speed > 0) {
    ctx.drawImage (dogImageDown, dog.x - (dog.tileSize / 2), dog.y - (dog.tileSize / 2), dog.tileSize, dog.tileSize);
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
    dog.speed = 8;
  } else if (dog.currentTile === 254) {
    dog.direction = 'y';
    dog.speed = 8;
  } else if (dog.currentTile === 542) {
    dog.direction = 'x';
    dog.speed = -8;
  } else if (dog.currentTile === 538) {
    dog.direction = 'y';
    dog.speed = -8;
  }
  if (dog.direction === 'y') {
    dog.y += dog.speed;
  } else if (dog.direction === 'x') {
    dog.x += dog.speed;
  }
}
