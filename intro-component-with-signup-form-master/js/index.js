const inputs = document.querySelectorAll('form input');
const error = document.querySelectorAll('.error-input');
const submmit = document.querySelector('.claim');

submmit.addEventListener('click', verifyData);

function verifyData() {

    /* Input First name */
    if (!inputs[0].value || inputs[0].value.replace(/ /g, "") == ""){
        error[0].style = `display: unset;`;
        inputs[0].placeholder = ``;
        inputs[0].classList.add('error');
    } else {
        error[0].style = `display: none;`;
        inputs[0].placeholder = `First Name`;
        inputs[0].classList.remove('error');
    }

    /* Input Last name */
    if (!inputs[1].value || inputs[1].value.replace(/ /g, "") == ""){
        error[1].style = `display: unset;`;
        inputs[1].placeholder = ``;
        inputs[1].classList.add('error');
    } else {
        error[1].style = `display: none;`;
        inputs[1].placeholder = `Last Name`;
        inputs[1].classList.remove('error');
    }

    /* Input email */
    if (inputs[2].value.indexOf('@') === -1) {
        error[2].style = `display: unset;`;
        inputs[2].placeholder = `email@example/com`;
        inputs[2].classList.add('error');

        correct = false;
    } else {
        error[2].style = `display: none;`;
        inputs[2].placeholder = `Email Address`;
        inputs[2].classList.remove('error');
    }

    /* Input password */
    if (!inputs[3].value || inputs[2].value.replace(/ /g, "") == ""){
        error[3].style = `display: unset;`;
        inputs[3].placeholder = ``;
        inputs[3].classList.add('error');
    } else {
        error[3].style = `display: none;`;
        inputs[3].placeholder = `Password`;
        inputs[3].classList.remove('error');
    }

}