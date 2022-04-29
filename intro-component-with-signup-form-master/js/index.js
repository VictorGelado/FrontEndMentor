const inputs = document.querySelectorAll('form input');
const error = document.querySelectorAll('.error-input');
const submmit = document.querySelector('.claim');

console.log(inputs)


submmit.addEventListener('click', verifyData);

function verifyData() {/* 
    let firstName = inputs[0].value;
    let lastName = input[1].value;
    let email = input[2].velue;
    let password = inputs[3].value; */


    /* Input First name */
    if (!inputs[0].value || inputs[0].value.replace(/ /g, "") == ""){
        error[0].style = `display: unset;`;
    } else {
        error[0].style = `display: none;`;
    }

    /* Input Last name */
    if (!inputs[1].value || inputs[1].value.replace(/ /g, "") == ""){
        error[1].style = `display: unset;`;
    } else {
        error[1].style = `display: none;`;
    }

    /* Input email */
    if (inputs[2].value.indexof('@') == -1) {
        console.log('gfjkjgfdsigiods', inputs[2].value.indexof('@'))
    }
 

}