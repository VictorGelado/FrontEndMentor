const billInput = document.querySelector("#bill-input");
const percentsBill = document.querySelectorAll(".percents-button");
const customPercent = document.querySelector("#custom");
const peopleInput = document.querySelector("#number-people");

let billValue = 0;
let percentValue = 0;
let peopleValue = 0;
let amount = 0;
let fees = 0;


billInput.addEventListener('input', catchInput);

percentsBill.forEach((e) => {

    e.addEventListener('click', function (e) {

        removeClass();
        e.target.classList.add("active");
        percentValue = Number(e.target.value);

        customPercent.value = '';

        verifyValues(billValue, billInput, "#err-bill");
        verifyValues(peopleValue, peopleInput, "#err-people");

        changeValues();

    });

});

customPercent.addEventListener('input', catchPercent);

peopleInput.addEventListener('input', catchPeople);


function catchInput() {

    if (billInput.value.length > 0) {

        billValue = Number(billInput.value);

    }

    verifyValues(billValue, billInput, "#err-bill");

    changeValues();

}

function removeClass() {

    percentsBill.forEach((e) => {

        e.classList.remove("active");

    });

}

function catchPercent() {

    if (customPercent.value.length > 0) {

        removeClass();
        percentValue = Number(customPercent.value);

        customPercent.style.textAlign = 'end';

    } else {
        customPercent.style.textAlign = 'center';
    }

    changeValues();

}

function catchPeople() {

    if (peopleInput.value.length > 0) {

        peopleValue = Number.parseInt(peopleInput.value);

    }

    verifyValues(peopleValue, peopleInput, "#err-people");

    changeValues();

}

function verifyValues(value, elementVerify, elementVisibleHidden) {

    if (elementVerify.value.length == 0 || value == 0) {

        elementVerify.classList.add("error");
        document.querySelector(elementVisibleHidden).style.visibility = "visible";

    } else {
        elementVerify.classList.remove("error");
        document.querySelector(elementVisibleHidden).style.visibility = "hidden";
    }

}

function changeValues() {

    //let billValue = 0;
    //let percentValue = 0;
    //let peopleValue = 0;
    //let amount = 0;
    //let fees = 0;
    let feesValue = billValue * percentValue;
    amount = billValue + feesValue;
    let amountPerson = amount / peopleValue;

    let feesPerson = feesValue / 2;


   document.querySelector("#result-amount").innerHTML = `$${feesPerson.toFixed(2)}`;
    document.querySelector("#result-total").innerHTML = `$${amountPerson.toFixed(2)}`;
}