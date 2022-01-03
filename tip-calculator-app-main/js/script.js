const billInput = document.querySelector("#bill-input");
const percentsBill = document.querySelectorAll(".percents-button");
const customPercent = document.querySelector("#custom");
const peopleInput = document.querySelector("#number-people");
const resetButton = document.querySelector("#reset-form");

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

resetButton.addEventListener('click', resetCalculator);


function catchInput() {

    billValue = Number(billInput.value);

    verifyValues(billValue, billInput, "#err-bill");

    changeValues();

}

function removeClass() {

    percentsBill.forEach((e) => {

        e.classList.remove("active");

    });

}

function catchPercent() {

    removeClass();
    verifyValues(billValue, billInput, "#err-bill");
    verifyValues(peopleValue, peopleInput, "#err-people");

    percentValue = Number(customPercent.value) / 100;

    customPercent.style.textAlign = 'end';

    if (customPercent.value) {
        customPercent.style.textAlign = 'center';
    }

    changeValues();

}

function catchPeople() {

    peopleValue = Number.parseInt(peopleInput.value);

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

    if (isNaN(peopleValue) || peopleValue == 0) {
        peopleValue = 1;
    }

    let feesValue = billValue * percentValue;
    amount = billValue + feesValue;
    let amountPerson = amount / peopleValue;
    let feesPerson = feesValue / peopleValue;

    document.querySelector("#result-amount").innerHTML = `$${feesPerson.toFixed(2)}`;
    document.querySelector("#result-total").innerHTML = `$${amountPerson.toFixed(2)}`;
}

function resetCalculator() {

    billValue = 0;
    percentValue = 0;
    peopleValue = 0;
    amount = 0;
    fees = 0;

    billInput.classList.remove("error");
    peopleInput.classList.remove("error");
    document.querySelector("#err-bill").style.visibility = "hidden";
    document.querySelector("#err-people").style.visibility = "hidden";

    removeClass();

    changeValues();

}