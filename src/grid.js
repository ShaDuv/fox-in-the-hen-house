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
          ctx.fillStyle = '#000';
          ctx.fillRect(xCoord, yCoord, this.tileSize, this.tileSize);
        } else if (this.map[i] === 2) {
          ctx.fillStyle = 'darksalmon';
          ctx.fillRect(xCoord, yCoord, this.tileSize, this.tileSize);
        }
      }
    }
  }
