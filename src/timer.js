export function timer() {
var mins = 2;
var secs = mins * 60;

		//countdown function to start on click "Start Game"
		function countdown() {
			setTimeout('Decrement()', 60);
		}

		//Decrement function decrement the value.
		function Decrement() {
			if (document.getElementById) {
				minutes = document.getElementById("minutes");
				seconds = document.getElementById("seconds");

				//if less than a minute remaining
				//Display only seconds value.
				if (seconds < 59) {
					seconds.value = secs;
				}

				//Display both minutes and seconds
				else {
					minutes.value = getminutes();
					seconds.value = getseconds();
				}
				//when less than a minute remaining color changes to red
				if (mins < 1) {
					minutes.style.color = "red";
					seconds.style.color = "red";
				}
				//if seconds becomes zero,
				//then page alert time up
				if (mins < 0) {
					alert('Lost: You ran out of time.');
					minutes.value = 0;
					seconds.value = 0;
				}
				//if seconds > 0 then seconds is decremented
				else {
					secs--;
					setTimeout('Decrement()', 1000);
				}
			}
		}

		function getminutes() {
			//minutes is seconds divided by 60, rounded down
			mins = Math.floor(secs / 60);
			return mins;
		}

		function getseconds() {
			//take minutes remaining (as seconds) away
			//from total seconds remaining
			return secs - Math.round(mins * 60);
		}
};
