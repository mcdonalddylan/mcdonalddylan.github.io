;(function () {
    const BIRTHDAY_DATE = new Date('09/12/1997');

    function calculateBirthdayNumber (birthdayDate) {
        const ageDifMs = Date.now() - birthdayDate;
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function dertmineSuperscriptAbbreviation (birthdayValue) {
        console.log(birthdayValue);
        console.log(birthdayValue % 10);
        if (birthdayValue % 10 === 1) {
            return 'st';
        }
        else if (birthdayValue % 10 === 2) {
            return 'nd';
        }
        else if (birthdayValue % 10 === 3) {
            return 'rd';
        }
        else {
            return 'th';
        }
    }

    const birthdayNumber = document.querySelector('.birthday-number');
    birthdayNumberValue = calculateBirthdayNumber(BIRTHDAY_DATE);
    birthdayNumber.textContent = birthdayNumberValue;

    const birthdayNumberSuperscript = document.querySelector('.birthday-number-superscript');
    birthdayNumberSuperscript.textContent = dertmineSuperscriptAbbreviation(birthdayNumberValue);

    const hiddenButton = document.querySelector('.hidden-button');
    hiddenButton.addEventListener('click', function () {
        //TODO: show modal with loving message :D
        alert('Love youuuuu <3');
    });
})();

function submitForm (event) {
    event.preventDefault();

    const favoriteMemoryComment = event.currentTarget['fav-mem'].value;
    console.log('favorite memory comment: ', favoriteMemoryComment);

    //TODO: do something with the favorite memory comment
}