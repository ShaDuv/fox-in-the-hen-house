//This structure has been modified from walkthroughs and sourcecode of PothOnProgramming, a youtube channel. Many of his walkthroughs were very relevant to our current project's goals and objectives.

//Section of code for game logic, including grid system.

//this is the area of code for creating the world , including dimentions, space/tile size and level maps.
// farm: {
//


//the map of spaces using a one dimensional array
//0's represent movable spaces, and 1's will represent nonmovable spaces.


export function drawTheMap() {
  console.log('in draw the map');
  const map =
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,
    1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,
    1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,
    1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,
    1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    let xCoord = 0;
    let yCoord = 0;
    const columns = 32; //32 columns in the map array
    const rows = 18; //18 rows in the map array
    const tileSize = 20; //each tile will be 20 pixels square
    let ctx = document.getElementById('map').getContext('2d');
    for (let i = 0; i < map.length; i++) {
      if (i % columns !== 0 || i === 0) {
        if (i !== 0) {
        xCoord += tileSize;
      }
      } else {
        xCoord = 0;
        if (i !== 0){
          yCoord += tileSize;
        }
      }
      if (map[i] === 1) {
        console.log(xCoord + ', ' + yCoord);
        ctx.fillStyle = '#000';
        ctx.fillRect(xCoord, yCoord, tileSize, tileSize);
      } else if (map[i] === 2) {
        ctx.fillStyle = 'darksalmon';
        ctx.fillRect(xCoord, yCoord, tileSize, tileSize);
      }
    }
  }
