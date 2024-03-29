//This structure has been modified from walkthroughs and sourcecode of PothOnProgramming, a youtube channel. Many of his walkthroughs were very relevant to our current project's goals and objectives.

//Section of code for game logic, including grid system.

//this is the area of code for creating the world , including dimentions, space/tile size and level maps.
// farm: {
//


//the map of spaces using a one dimensional array
//0's represent movable spaces, and 1's will represent nonmovable spaces.
const roofCenterSideways = document.getElementById("roof-center-sideways");
const roofEdgeUp = document.getElementById("roof-edge-up");
const roofEdgeDown = document.getElementById("roof-edge-down");
const treeLine = document.getElementById("treeline");
const roofLeft = document.getElementById("roof-left");
const roofCenter = document.getElementById("roof-center");
const roofRight = document.getElementById("roof-right");
const pinkTree = document.getElementById("pink-tree");
const bush = document.getElementById("bush");
const chicken_down = document.getElementById("chicken-down");
export class Level {
  constructor() {
    this.map = [];
    this.columns = 0;
    this.rows = 0;
    this.tileSize = 40;
  }
  drawTheMap() {

    let xCoord = 0;
    let yCoord = 0;
    let ctx = document.getElementById('map').getContext('2d');
    for (let i = 0; i < this.map.length; i++) {
      if (i !== 0) {
        if (i % this.columns !== 0) {
          xCoord += this.tileSize;
        } else {
          xCoord = 0;
          yCoord += this.tileSize;
        }
      }
      if (this.map[i] === 1) {
        ctx.drawImage (treeLine, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 2) {
        ctx.drawImage (roofLeft, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 3) {
        ctx.drawImage (roofCenter, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 4) {
        ctx.drawImage (roofRight, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 5) {
        ctx.drawImage (roofEdgeUp, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 6) {
        ctx.drawImage (roofCenterSideways, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 7) {
        ctx.drawImage (roofEdgeDown, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 8) {
        ctx.drawImage (pinkTree, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 9) {
        ctx.drawImage (bush, xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 0) {
        ctx.clearRect(xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 'v' || this.map[i] === 'd') {
        ctx.fillStyle = 'rgba(255, 255, 153, 0.1)';
        ctx.fillRect(xCoord, yCoord, this.tileSize, this.tileSize);
      } else if (this.map[i] === 'c') {
        ctx.drawImage (chicken_down, xCoord, yCoord, this.tileSize, this.tileSize);
      }

    }
  }
}
