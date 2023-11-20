(() => {
    console.log('Inside index.js');

    // Globals

    const body = document.querySelector('body');
    const pageWrapper = document.querySelector('.page-wrapper');
    const signupForm = document.querySelector('form');
    const formInput = document.querySelector('form input');
    const modal = document.querySelector('.modal');
    const modalCard = document.querySelector('.modal-card');
    const modalBtn = document.querySelector('.modal button');
    const emailSpan = document.querySelector('.email-span');

    // Functions

    const handleSignupFormSubmit = e => {
        console.log('Form submitted');
        e.preventDefault();
        emailSpan.innerText = formInput.value;
        modal.style.display = 'flex';
        pageWrapper.style.filter = 'blur(5px)';
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