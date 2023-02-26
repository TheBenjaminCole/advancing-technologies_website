// /****Countdown Timer ****/

// //Final Countdown Time//
// let countdownDateTime = new Date("July 9, 2023 00:00:00").getTime();

// //Check time every second to compare to countdown date//
// let timer = setInterval(function() {

// //Get today's date and time//
// var currentDateTime = new Date().getTime();

// //Find the distance between now and the countdown time//
// var remainingTime = countdownDateTime - currentDateTime;

// //Calculations for days, hours, minutes, seconds//
// var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

// //Target countdown ID on homepage//
// let countdown = document.getElementById("countdown");

// //Display result of countdown with id "countdown"//
// if (countdown && remainingTime > 0) {
//     countdown.innerHTML = "Time Remaining: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
// } else {
//     countdown.innerHTML = "Conference is either in progress or over.";
// }

// }, 1000)



    // Final Coundown Time and Date
    let coundownDateTime = new Date("October 11, 2023 00:00:00").getTime();

    // Check time every second to compare to coundown date
    setInterval(function() {

    // Get todays date and time
    var currentDateTime = new Date().getTime();

    // Find the distance between now and the count down date
    var remainingTime = coundownDateTime - currentDateTime;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Target coundown ID on homepage
    let countdown = document.getElementById("countdown");

    // Display the result in the element with id="countdown"
    if (countdown && remainingTime > 0) {
        countdown.innerHTML = "Time Remaining: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    } else {
        countdown.innerHTML = "Conference is either in progress or over."
    }

}, 1000)