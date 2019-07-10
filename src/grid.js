//This structure has been modified from walkthroughs and sourcecode of PothOnProgramming, a youtube channel. Many of his walkthroughs were very relevant to our current project's goals and objectives.

//Section of code for game logic, including grid system.

//this is the area of code for creating the world , including dimentions, space/tile size and level maps.
// farm: {
//


//the map of spaces using a one dimensional array
//0's represent movable spaces, and 1's will represent nonmovable spaces.
export class Level {
  constructor() {
    this.map = [];
    this.columns = 0;
    this.rows = 0;
    this.tileSize = 40;
  }
  drawTheMap() {
    console.log('in draw the map');
    let roofCenterSideways = document.getElementById("roof-center-sideways");
    let roofEdgeUp = document.getElementById("roof-edge-up");
    let roofEdgeDown = document.getElementById("roof-edge-down");
    let treeLine = document.getElementById("treeline");
    let roofLeft = document.getElementById("roof-left");
    let roofCenter = document.getElementById("roof-center");
    let roofRight = document.getElementById("roof-right");
    let pinkTree = document.getElementById("pink-tree");
    let bush = document.getElementById("bush");
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
      } else if (this.map[i] === 'v') {
        ctx.fillStyle = 'rgba(255, 255, 153, 0.1)';
        ctx.fillRect(xCoord, yCoord, this.tileSize, this.tileSize);
      }
    }
  }
}
