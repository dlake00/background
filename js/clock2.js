/* Initialise variables */
var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;

/* count-up timer */
function countTimer() {
  /* increment seconds */
  ++totalSeconds;

  /* calculate hours and minutes from seconds */
  var hour = Math.floor(totalSeconds /3600);
  var minute = Math.floor((totalSeconds - hour*3600)/60);
  var seconds = totalSeconds - (hour*3600 + minute*60);

  /* append 0 before time elements if less than 10 */
  if(hour < 10) {
    hour = "0" + hour;
  }
  if(minute < 10) {
    minute = "0" + minute;
  }
  if(seconds < 10) {
    seconds = "0" + seconds;
  }

  /* add time to clock2 div */
  document.getElementById("clock2").innerText = hour + ":" + minute + ":" + seconds;
}
