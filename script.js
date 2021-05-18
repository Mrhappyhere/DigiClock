function displayTime() {
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

    //for 12 hour format
    if (hrs == 0) {
        hrs = 12;
    }
    // //for AM PM
    if (hrs > 12) {
        //     //13=13-12
        hrs = hrs - 12;

    }
    if (hrs >= 12 && min >= 0) {

        session = "PM"
    }

    //for 2 digit format

    // if (hrs < 10) {
    //     hrs = "0" + hrs;
    // }
    // if (min < 10) {
    //     min = "0" + min;
    // }
    // if (sec < 10) {
    //     sec = "0" + sec;
    // }

    //ternary operator for 2 digit format
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    //output
    document.getElementById("digitalclock").innerHTML = hrs + " : " + min + " : " + sec + " " + session;
    setTimeout(displayTime, 1000);
}
displayTime();