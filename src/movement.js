// export class Movement {
//   constructor() {
//     this.up = false;
//     this.left = false;
//     this.down = false;
//     this.right = false;
//   }



export function keyDownHandler(event) {
  if (event.keyCode === 87 || event.keyCode === 38) {
    // if w
    this.up = true;
    console.log('Up.');
  } else if (event.keyCode === 65 || event.keyCode === 37) {
    // if a
    this.left = true;
    console.log('Left');
  } else if (event.keyCode === 83 || event.keyCode === 40) {
    // if s
    this.down = true;
    console.log('Down');
  } else if (event.keyCode === 68 || event.keyCode === 39) {
    // if d
    this.right = true;
    console.log('Right');
  }

}

export function keyUpHandler(event) {
  if (event.keyCode === 87 || event.keyCode === 38) {
    // if w
    this.up = false;
    console.log('Up is not being pressed anymore.');
  } else if (event.keyCode === 65 || event.keyCode === 37) {
    // if a
    this.left = false;
    console.log('Left is not being pressed anymore.');
  } else if (event.keyCode === 83 || event.keyCode === 40) {
    // if s
    this.down = false;
    console.log('Down is not being pressed anymore.');
  } else if (event.keyCode === 68 || event.keyCode === 39) {
    // if d
    this.right = false;
    console.log('Right is not being pressed anymore.');
  }
}

// }
