;(function () {
    const BIRTHDAY_DATE = new Date('09/12/1997');

    function calculateBirthdayNumber (birthdayDate) {
        const ageDifMs = Date.now() - birthdayDate;
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function dertmineSuperscriptAbbreviation (birthdayValue) {
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

    const modal = document.querySelector('.modal-bg');
    function toggleModal () {
        const formBody = document.querySelector('.form-body');
        if (modal && modal.style.display === 'none') {
            modal.style.display = 'block';
            formBody.classList.add('blur-body');
        } else {
            modal.style.display = 'none';
            formBody.classList.remove('blur-body');
        }
    }

    function submitForm (event) {
        event.preventDefault();
    
        const favoriteMemoryComment = event.currentTarget['fav-mem'].value;
        console.log('favorite memory comment: ', favoriteMemoryComment);
    
        //TODO: do something with the favorite memory comment
    }

    const birthdayNumber = document.querySelector('.birthday-number');
    birthdayNumberValue = calculateBirthdayNumber(BIRTHDAY_DATE);
    birthdayNumber.textContent = birthdayNumberValue;

    const birthdayNumberSuperscript = document.querySelector('.birthday-number-superscript');
    birthdayNumberSuperscript.textContent = dertmineSuperscriptAbbreviation(birthdayNumberValue);

    const form = document.querySelector('.form');
    form.addEventListener('submit', submitForm);

    const hiddenButton = document.querySelector('.hidden-button');
    const randomHeight = (Math.floor(Math.random() * window.screen.height)-150).toString().concat('px');
    const randomWidth = (Math.floor(Math.random() * window.screen.width)-200).toString().concat('px');
    hiddenButton.style.top = randomHeight;
    hiddenButton.style.left = randomWidth;
    hiddenButton.addEventListener('click', toggleModal);
    modal.addEventListener('click', toggleModal);

    const closeModalButton = document.querySelector('.modal-close-button');
    closeModalButton.addEventListener('click', toggleModal);
})();
