const form = document.querySelector("#calculator");
const resetForm = document.querySelector("#reset-form");

const billInput = document.querySelector("#bill-input");
const percents = document.querySelectorAll(".percents-button");
const numberPeople = document.querySelector("#number-people");
const customTip = document.querySelector("#custom");


/* Events */
billInput.addEventListener('input', amount);

percents.forEach((el) => {

    el.addEventListener('click', function (i) {

        removeClass();

        el.classList.toggle('active');

        clearCustom();

        amount();

    });

});

numberPeople.addEventListener('input', amount);

customTip.addEventListener('input', amount);



/* Functions */
function amount(reset) {

    verifyPeoples();

    verifyBill();

    let bill = Number(billInput.value);
    
    if (numberPeople.value.includes(',') || numberPeople.value.includes('.')) {
        window.alert('Integer numbers only');

        if (numberPeople.value.includes(',')) {
            numberPeople.value = numberPeople.value.replace(',', '');
        } else {
            numberPeople.value = numberPeople.value.replace('.', '');
        }
    }

    let peoples = Number.parseInt(numberPeople.value);
    var tipPercent = Number(indexPercent());
    let customTipValue = Number(customTip.value / 100); 

    if (customTip.value.length > 0) {

        removeClass();
        tipPercent = customTipValue;

    } 

    if (!tipPercent) {

        numberPeople.classList.remove("error");
        billInput.classList.remove("error");

        document.querySelector("#err-people").style.visibility = "hidden";
        document.querySelector("#err-bill").style.visibility = "hidden";

    }

    isNaN(tipPercent) ? tipPercent = 0 : tipPercent = tipPercent;

    let fees = (bill * tipPercent);

    if (isNaN(peoples) || peoples == 0) {
        fees = 0;
        peoples = 1;
    }


    let feesPerson = fees / peoples;

    let tipAmount = (bill + fees) / peoples;

    if (reset) {
        bill = 0;
        fees = 0;
        tipAmount = 0;
        peoples = 0;
        customTipValue = 0;
        feesPerson = 0;
    }

    document.querySelector("#result-amount").innerHTML = `$${feesPerson.toFixed(2)}`;
    document.querySelector("#result-total").innerHTML = `$${tipAmount.toFixed(2)}`;

    if (verifyValuesReset()) {
        resetForm.classList.add("active");
        resetForm.removeAttribute("disabled");
    } else {
        resetForm.classList.remove("active");
        resetForm.setAttribute("disabled", "disabled");
    }


}

function indexPercent() {

    for (let c = 0; c < percents.length; c++) {

        if (percents[c].classList.contains('active')) {
            return percents[c].value;
        }

    }
}

function removeClass() {

    percents.forEach((el) => {

        el.classList.remove('active');

    });

}

function verifyPeoples() {

    let peopleVerify = Number(numberPeople.value);

    if (isNaN(peopleVerify) || peopleVerify == 0) {

        document.querySelector("#err-people").style.visibility = "visible";
        numberPeople.classList.add("error");

    } else {
        document.querySelector("#err-people").style.visibility = "hidden";
        numberPeople.classList.remove("error");
    }

}

function verifyBill() {

    let billVerify = Number(billInput.value);

    if (isNaN(billVerify) || billVerify == 0) {

        document.querySelector("#err-bill").style.visibility = "visible";
        billInput.classList.add("error");
        billInput.focus();

    } else {
        document.querySelector("#err-bill").style.visibility = "hidden";
        billInput.classList.remove("error");
    }

}

function clearCustom() {

    customTip.value = '';
    customTip.style.textAlign = ""

}

function verifyValuesReset() {

    let childrenForm = document.querySelectorAll("#calculator input");
    let childrenInputs = 0;
    let valuesInputs = false;

    for (let c = 0; c < childrenForm.length; c++) {

        if (childrenForm[c].value.length != 0) {
            childrenInputs += 1;
        }

    }

    percents.forEach((el) => {

        if (el.classList.contains("active")) {
            childrenInputs += 1;
        }

    });

    if (childrenInputs > 0) {
        valuesInputs = true;
    }

    return valuesInputs;

}

resetForm.addEventListener('click', () => {

    customTip.style.textAlign = "center";
    document.querySelector("#result-amount").innerHTML = `$0.00`;
    document.querySelector("#result-total").innerHTML = `$0.00`;
    removeClass();
    amount(true); 
    
});

customTip.addEventListener('input', () => {

    if (customTip.value.length > 0) {
        customTip.style.textAlign = "end";
    } else {
        customTip.style.textAlign = "center";
    }

});