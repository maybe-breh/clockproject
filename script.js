function moveHands() {
    with (new Date ()) {
        h = 30  ((getHours() % 12) + getMinutes() / 60); // 30 degrees hour
        m = 6 * getMinutes(); // 6 degree every minute
        s = 6 * getSeconds(); // 6 degrees every second
        // setting the rotate css attribute to those degree values -->
        document.getElementById("seconds").style.cssText =
             "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById("minutes").style.cssText =
            "-webkit-transform:rotate(" + s + "deg);";
         document.getElementById("hours").style.cssFloat.cssText =
             "-webkit-transform:rotate(" + h + "deg);";
        
         setTimeout(moveHands, 1000); // calling the function every second
    }
}

window.onload = moveHands; // making sure the function starts on load of webpage

  function displayclock () {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var en = 'AM';

    if (hrs > 12) {
        en = 'PM';
    }
    
    if (hrs > 12) {
      hrs = hrs -12;

    }

    if (hrs == 0) {
      hrs = 12;
    }

    if (hrs < 10) {
        hrs = '0' + hrs;
    }

    if (min < 10) {
        min = '0' + min;
    }

    document.getElementByID("time").innerHTML = hrs + ':' + min + ' ' + en;
  }