const customAlign = document.querySelector("#custom");
const resetForm = document.querySelector("#reset-form");

const billInput = document.querySelector("#bill-input");
const percents = document.querySelectorAll(".percents-button");
const numberPeople = document.querySelector("#number-people")




billInput.addEventListener('change', amount);

percents.forEach((el) => {

    el.addEventListener('click', function (i) {

        indexPercent(i.target);

    });

});


function amount(percent) {

    var bill = Number(billInput.value);

    if (!bill) {
        window.alert('Please enter some value');
        billInput.focus();
    } else {
        let tip = percent;
        let fees = bill * tip;
        let tipAmount = bill + fess;
    }


    /* console.log(tip) */



    console.log(bill, fees, tip)



    console.log('bill', tipAmount)
    //console.log('percent',percent)


    document.querySelector("#result-amount").innerHTML = fees.toFixed(2);

}

function indexPercent(index) {

    for (let c = 0; c < percents.length; c++) {

        if (index === percents[c]) {
            let percentIndex = Number(percents[c].textContent.slice(0, -1));
            amount(percentIndex / 100);
        }

    }


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