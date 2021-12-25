const customAlign = document.querySelector(".custom");







customAlign.addEventListener('change', () => {

    if (customAlign.value.length > 0) {
        console.log('cu');
        customAlign.style.textAlign = "end";
    }

});