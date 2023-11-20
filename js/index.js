(() => {
    console.log('Inside index.js');

    // Globals

    const body = document.querySelector('body');
    const pageWrapper = document.querySelector('.page-wrapper');
    const signupForm = document.querySelector('form');
    const formInput = document.querySelector('form input');
    const invalidText = document.querySelector('form p');
    const modal = document.querySelector('.modal');
    const modalCard = document.querySelector('.modal-card');
    const modalBtn = document.querySelector('.modal button');
    const emailSpan = document.querySelector('.email-span');

    // Functions

    const emailValidated = () => {
        const matchArray = String(formInput.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        return matchArray !== null;
    };
    const invalidEmail = () => {
        invalidText.style.display = 'block';
        formInput.style.color = 'var(--tomato)';
        formInput.style.border = '1px solid var(--tomato)';
        formInput.style.backgroundColor = 'var(--tomato-light)';
    };
    const validEmail = () => {
        invalidText.style.display = 'none';
        formInput.style.color = 'black';
        formInput.style.border = '1px solid var(--grey)';
        formInput.style.backgroundColor = '';
    };
    const handleSignupFormSubmit = e => {
        console.log('Form submitted');
        e.preventDefault();
        if(emailValidated()) {
            validEmail();
            emailSpan.innerText = formInput.value;
            modal.style.display = 'flex';
            pageWrapper.style.filter = 'blur(5px)';
        } else {
            invalidEmail();
        }
    };
    const handleCloseModal = e => {
        if((e.target !== modalCard && !modalCard.contains(e.target)) || e.target === modalBtn) {
            console.log('clicked outside of modal card');
            modal.style.display = 'none';
            pageWrapper.style.filter = 'blur(0)';
        } else {
            console.log('clicked inside modal card');
        }
    };

    // Events

    signupForm.addEventListener('submit', handleSignupFormSubmit);
    body.addEventListener('click', handleCloseModal);

    // On Load

})();