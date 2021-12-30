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
function amount() {

    verifyPeoples();

    verifyBill();

    let bill = Number(billInput.value);
    let peoples = Number(numberPeople.value);
    var tipPercent = Number(indexPercent());
    /* let customTipValue = Number(customTip.value / 100); */

    if (customTip.value.length > 0) {
    
        removeClass();
        tipPercent = Number(customTip.value / 100);

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

    document.querySelector("#result-amount").innerHTML = `$${feesPerson.toFixed(2)}`;
    document.querySelector("#result-total").innerHTML = `$${tipAmount.toFixed(2)}`;

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


resetForm.addEventListener('click', () => {
    customTip.style.textAlign = "center";
    document.querySelector("#result-amount").innerHTML = `$0.00`;
    document.querySelector("#result-total").innerHTML = `$0.00`;
    removeClass();
});

customTip.addEventListener('input', () => {

    if (customTip.value.length > 0) {
        customTip.style.textAlign = "end";
    } else {
        customTip.style.textAlign = "center";
    }

});
























/* 
function indexPercent(index) {

    for (let c = 0; c < percents.length; c++) {

        if (index === percents[c]) {
            let percentIndex = Number(percents[c].textContent.slice(0, -1));
            return Number(percentIndex);
        }

    }
} */