import $ from 'jquery';
import './styles.css';
import { Player } from './map.js';
import { keyDownHandler } from './movement.js';
import { keyUpHandler } from './movement.js';

let fox = new Player;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

$(document).ready(function () {
  var mapStuff = document.getElementById('map');
  

});
