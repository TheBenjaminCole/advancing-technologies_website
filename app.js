let easterEgg = document.getElementById('easter-egg');
let easterEggModal = document.getElementById('easter-egg-modal');
let easterEggInput = document.getElementById('easter-egg-input');
let easterEggModalClose = document.getElementsByClassName('close')[0];

easterEgg.onclick = function() {
    if (easterEggModal.className === 'modal-hidden') {
        easterEggModal.className = 'modal-shown';
    } else {
       easterEggModal.className = 'modal-hidden';
    }
}

easterEggModalClose.onclick = function() {
    easterEggModal.className = 'modal-hidden';
}

easterEggInput.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    if (e.target.value == 39887) {
        alert("You're the winner. Report to Tim at the front desk to receive your prize!");
    }else if (e.target.value != 39887 && e.target.value.length >=5) {
            alert ("Sorry, your code is invalid")
            easterEggInput.value = '';
        }

})