function displayTime() {
  var date = new Date();
  var hrs = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var session = '';

  hrs >= 12 ? (session = 'PM') : (session = 'AM');

  //for 12 hour format
  if (hrs == 0) {
    hrs = 12;
  }
  //for AM PM
  if (hrs > 12) {
    //eg; 13=13-12
    hrs = hrs - 12;
  }

  //ternary operator for 2 digit format
  hrs = hrs < 10 ? '0' + hrs : hrs;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  //output
  document.getElementById('digitalclock').innerHTML =
    hrs + ' : ' + min + ' : ' + sec + ' ' + session;
  setTimeout(displayTime, 1000);
}

displayTime();
