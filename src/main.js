import $ from 'jquery';
import './styles.css';
import { keyDownHandler } from './player.js';
import { keyUpHandler } from './player.js';
import { loopityLoop } from './player.js';
import { drawTheMap } from './grid.js';
import { Level } from './grid.js';
import { callDrawFarmer } from './farmer.js';
import { fox } from './player.js';
import { drawChicken } from './chicken.js'

export const levelOne = new Level;
levelOne.map =
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,9,9,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,9,0,0,0,0,0,5,5,5,5,5,0,0,0,0,0,0,0,8,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,0,0,9,0,0,0,0,1,
  1,0,0,0,2,3,4,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,2,3,4,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,9,2,3,4,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,8,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,2,3,4,0,0,0,0,9,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,2,3,4,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,0,2,3,4,0,0,0,9,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,2,3,4,0,0,0,8,0,0,0,2,3,4,0,1,
  1,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,2,3,4,0,1,
  1,0,9,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,0,1,
  1,0,9,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  //Map Key:
  //1 - fence
  //2 - roof left.png
  //3 - roof center.png
  //4 - roof right.png
  //5 - roof edge up.png
  //6 - roof center sideways.png
  //7 - roof edge down.png
  //8 - tree 3.png
  //9 - bush 4.png

  levelOne.columns = 32; //32 columns in the map array
  levelOne.rows = 18; //18 rows in the map array


  //sound related imports and variables-----------------------------------------

  //import sounds
  const eatChickenSound = require('./audio/Chicken-Fuss-in-Coop.mp3');
  const backgroundSound = require('./audio/countryside-ambiance.wav');
  const farmerYellSound = require('./audio/male-shout.wav');
  const foxGrowlSound = require ('./audio/foxGrowl.wav');

  //define sounds in new Audio objects for value adjustments such as volume
  const eatChicken = new Audio(eatChickenSound);
  const backgroundMusic = new Audio(backgroundSound);
  const farmerYell = new Audio(farmerYellSound);
  const foxGrowl = new Audio(foxGrowlSound);

  //volume adjustments for soundfiles
  eatChicken.volume = .8;
  backgroundMusic.volume = .3;
  farmerYell.volume = .8;
  foxGrowl.volume=1;

  //solution found on stack overflow that helps with a loop issue with some browsers
  //the if statement helps make this solution adapt to other browser features as
  //well as future updates, while solving the issue, now.
  $(document).ready( function () {
    $('#start-screen').click(function () {
      $('#start-screen').hide();
      $('#game').show();
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

      drawChicken();
      window.requestAnimationFrame(loopityLoop);
      levelOne.drawTheMap();

      //code from PothOnProgramming for loading the png into our program



      backgroundMusic.pause();
      setTimeout(function () {
        backgroundMusic.play();
      }, 150);
    })
});
  // });

  export function isFoxCaught() {
    if (!(levelOne.map[fox.tileY * levelOne.columns + fox.tileX] === 'v') && !(levelOne.map[fox.tileY * levelOne.columns + fox.tileX] === 'd')) {
      return true;
    } else {
      console.log('The fox has been caught.');
        if (levelOne.map[fox.tileY * levelOne.columns + fox.tileX] === 'v') {
          farmerYell.play();
        } else {
          foxGrowl.play();
        }
      $('#lose').show();
      $("#game").hide();
      return false;
      }
    }




  export function isChickenBeingEaten() {
    if (!(levelOne.map[fox.tileY * levelOne.columns + fox.tileX] === 'c')) {
      return true;
    } else {
      console.log('The chicken is dead.');
      eatChicken.play();
      $('#win').show();
      $("#game").hide();
      return false;

    }
}
