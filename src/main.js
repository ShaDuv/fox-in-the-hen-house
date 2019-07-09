import $ from 'jquery';
import './styles.css';
import { Player } from './map.js';
import { keyDownHandler } from './movement.js';
import { keyUpHandler } from './movement.js';

let fox = new Player;

//sound related imports and variables-----------------------------------------

//import sounds
let eatChickenSound = require('./audio/Chicken-Fuss-in-Coop.mp3');
let backgroundSound = require('./audio/countryside-ambiance.wav');
let farmerYellSound = require('./audio/male-offended-hey-shout-full.mp3');
let foxGrowlSound = require ('./audio/foxGrowl.wav');

//define sounds in new Audio objects for value adjustments such as volume
let eatChicken = new Audio(eatChickenSound);
let backgroundMusic = new Audio(backgroundSound);
let farmerYell = new Audio(farmerYellSound);
let foxGrowl = new Audio(foxGrowlSound);

//volume adjustments for soundfiles
eatChicken.volume = .2;
backgroundMusic.volume = .1;
farmerYell.volume = .2;
foxGrowl.volume=.2;

//solution found on stack overflow that helps with a loop issue with some browsers
//the if statement helps make this solution adapt to other browser features as
//well as future updates, while solving the issue, now.

if (typeof backgroundMusic.loop == 'boolean')
{
    backgroundMusic.loop = true;
}
else {
  {
    backgroundMusic.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

$(document).ready(function () {
  var mapStuff = document.getElementById('map');
//solution to pause error found on stack overflow

backgroundMusic.pause();
setTimeout(function () {
  backgroundMusic.play();
}, 150);

});
