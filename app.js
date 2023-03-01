/*****Easter Egg Modal********/
if (document.getElementById("easter-egg")) {
//Target Easter Egg Components
let easterEgg = document.getElementById('easter-egg');
let easterEggModal = document.getElementById('easter-egg-modal');
let easterEggInput = document.getElementById('easter-egg-input');
let easterEggModalClose = document.getElementsByClassName('close')[0];

//Toggle Modal
easterEgg.onclick = function() {
    debugger;
    if (easterEggModal.className === 'modal-hidden') {
        easterEggModal.className = 'modal-shown';
    } else {
       easterEggModal.className = 'modal-hidden';
    }
}

//Hide Modal on x Click
easterEggModalClose.onclick = function() {
    easterEggModal.className = 'modal-hidden';
}

//Check for user input and alert if winner or loser
easterEggInput.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    if (e.target.value == 39887) {
        alert("You're the winner. Report to Tim at the front desk to receive your prize!");
    }else if (e.target.value != 39887 && e.target.value.length >=5) {
            alert ("Sorry, your code is invalid")
            easterEggInput.value = '';
        }

})
}

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