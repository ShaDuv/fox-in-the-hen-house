import $ from 'jquery';
import './styles.css';
import { keyDownHandler } from './player.js';
import { keyUpHandler } from './player.js';
import { loopityLoop } from './player.js';
import { drawTheMap } from './grid.js';



document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

window.requestAnimationFrame(loopityLoop);
drawTheMap();

$(document).ready(function () {
});
