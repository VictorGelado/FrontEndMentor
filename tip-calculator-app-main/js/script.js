const customAlign = document.querySelector("#custom");
const resetForm = document.querySelector("#reset-form");

const billInput = document.querySelector("#bill-input");
const percents = document.querySelectorAll(".percents-button");
const numberPeople = document.querySelector("#number-people");


billInput.addEventListener('input', amount);

percents.forEach((el) => {

    el.addEventListener('click', function(i) {

        removeClass();

        el.classList.toggle('active');

        amount();

    });

});

numberPeople.addEventListener('input', amount);



function amount() {

    let bill = Number(billInput.value);

    if (!bill) {
        window.alert('Please enter some value');
        billInput.focus();
    }

    
    let peoples = Number(numberPeople.value); 

    if (isNaN(peoples) || peoples == 0) { 

        document.querySelector("#err-people").style.visibility = "visible";
        peoples = 1;
    
    }

    let tipPercent = Number(indexPercent());
    
    isNaN(tipPercent) ? tipPercent = 0: tipPercent = tipPercent; 
    
    let fees = (bill * tipPercent);
    let tipAmount = (bill + fees) / peoples; 

    
    document.querySelector("#result-amount").innerHTML = `$${(fees/ 2).toFixed(2) }`;
    document.querySelector("#result-total").innerHTML = `$${tipAmount.toFixed(2)}`;



    console.log('tip'+tipPercent, 'fess'+fees, 'amount'+tipAmount) 





    //console.log('bill', tipAmount)
    //console.log('percent',percent)



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


resetForm.addEventListener('click', () => {
    customAlign.style.textAlign = "center";
    removeClass();
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
