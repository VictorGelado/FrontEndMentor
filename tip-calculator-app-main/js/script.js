const customAlign = document.querySelector("#custom");
const resetForm = document.querySelector("#reset-form");

const billInput = document.querySelector("#bill-input");
const percents = document.querySelectorAll(".percents-button");
const numberPeople = document.querySelector("#number-people")




billInput.addEventListener('change', amount);

percents.forEach((el) => {

    el.addEventListener('click', function (i) {

        removeClass();

        el.classList.toggle('active');

    });

});





function amount() {

    let bill = Number(billInput.value);

    console.log(bill)

    if (!bill) {
        window.alert('Please enter some value');
        billInput.focus();
    }

    //let indexActiveTip = indexPercent();
    //console.log(indexActiveTip)
    let tipPercent = Number(percents[2].value);
 
    let tip = tipPercent;
    let fees = bill * tip;
    let tipAmount = bill + fess; 
    

    console.log(tip, fees, tipAmount) 



    



    //console.log('bill', tipAmount)
    //console.log('percent',percent)


    ///document.querySelector("#result-amount").innerHTML = fees.toFixed(2);

}

function indexPercent() {

    for (let c = 0; c < percents.length; c++) {

        if (percents[c].classList.contains('active')) {
            return c;
        }

    }
}

function removeClass() {

    percents.forEach((el) => {

        el.classList.remove('active');

    });

}


resetForm.addEventListener('click', () => {
    customAlign.style.textAlign = "center";
});

customAlign.addEventListener('keyup', () => {

    if (customAlign.value.length > 0) {
        customAlign.style.textAlign = "end";
    } else {
        customAlign.style.textAlign = "center";
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
