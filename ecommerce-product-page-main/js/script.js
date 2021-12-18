//container cart click.
const cart = document.querySelector(".img-car");
const carContainer = document.querySelector(".car-container");
//Button to add product.
const btnInc = document.querySelector("#btn-increase");
const btnDec = document.querySelector("#btn-decrease");
const addButton = document.querySelector("#add-button");
let sum = 1;
// Add cart.
const addCart = document.querySelector("#added-cart");
const productTitle = document.querySelector("#product-title").textContent;
const priceProductCart = document.querySelector("#price-products-added");
const priceProduct = Number(document.querySelector("#price-product-final").textContent);
const numberProducts = document.querySelector(".number-products-cart");
//Delete cart.
const deleteCart = document.querySelector("#delete");
// Images thumb.
const containerThumb = document.querySelectorAll(".thumb");
var src;
// Carousel images.
var srcNav;
const carousel = document.querySelector(".carousel-images");
const closeCarousel = document.querySelector("#close-carousel");
const imagePreview = document.querySelector(".image-preview");

const thumbCarousel = document.querySelectorAll(".carousel-thumb");
const backImage = document.querySelector("#back-image");
const nextImage = document.querySelector("#next-image");
// Menu hamburger.
const menu = document.querySelector(".menu-hamburger");
const nav = document.querySelector(".nav-menu");
// Preview image mobile.
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");


//Add and remove class.
function removeClass(name, nameClass) {
    name.classList.remove(nameClass);
}

function addClass(name, nameClass, toggle) {
    if (toggle) {
        name.classList.toggle(nameClass);
    } else {
        name.classList.add(nameClass);
    }
}


//container cart click.
cart.addEventListener('click', () => {

    addClass(carContainer, "active", true);
    
});

// Add product.
btnInc.addEventListener('click', () => {

    sum += 1;
    sum > 100? sum = 100: sum = sum;
    addButton.innerHTML = sum;

});
btnDec.addEventListener('click', () => {

    sum -= 1;
    sum >= 1 ? addButton.innerHTML = sum : sum = 1;

});

//Add cart.
addCart.addEventListener('click', () => {
    
    if (sum > 0) {

        sum > 100? sum = 100: sum = sum;

        document.querySelector("#car-empty").style.display = "none";
        document.querySelector(".products-car-added").style.display = "block";
        document.querySelector("#added-title").innerHTML = productTitle;
        priceProductCart.innerHTML = `$${priceProduct.toFixed(2)} x ${sum} <span>$${(priceProduct*sum).toFixed(2)}</span>`;;
        numberProducts.style.opacity = "1";
        numberProducts.children[0].innerHTML = sum;


    } else {
        window.alert("Choose the quantity to buy before adding to cart!!");
    }

});

/* Delete products */
deleteCart.addEventListener('click', () => {

    sum = 1;
    addButton.innerHTML = sum;
    document.querySelector("#car-empty").style.display = "block";
    document.querySelector(".products-car-added").style.display = "none";
    numberProducts.style.opacity = "0";
    carContainer.classList.remove("active");

});

// Images thumb.
for (var c = 0; c < containerThumb.length; c++) {
    
    containerThumb[c].addEventListener('click', function() {

        [].forEach.call(containerThumb, function(i) {
            i.classList.remove("active");
        }); 
        this.classList.add("active");
               
        indexThumb(this);        
        document.querySelector("#image").setAttribute("src", `./images/image-product-${src}.jpg`);

    });

}

function indexThumb(index) {

    for (let c = 0; c < containerThumb.length; c++) {

        if (index === containerThumb[c]) {
            src = c + 1;
        } 
        src > containerThumb.length ? src = 4: src = src;

    }

}

// Close and open carousel.    
window.addEventListener('resize', () => {
    
    if (window.screen.width <= 320) {
        imagePreview.removeEventListener('click');
    }

});

imagePreview.addEventListener('click', () => {

    if (window.screen.width > 320) {
        addClass(carousel, "active", false);
        window.scrollTo(0, 0);
    
        let srcOpen = document.querySelector("#image").getAttribute("src");
        document.querySelector("#image-carousel").setAttribute("src", srcOpen);
    
        let src = srcOpen.substring(23,24);
        
        addClass(thumbCarousel[src-1], "active", false);
    } else {
        imagePreview.removeEventListener('click');
    }

});

closeCarousel.addEventListener('click', () => {

    removeClass(carousel, "active");

    [].forEach.call(thumbCarousel, function(iT) {
        removeClass(iT, "active");             
    });

});

// Carousel click thumb.
for (let c = 0; c < thumbCarousel.length; c++) {

    thumbCarousel[c].addEventListener('click', function() {

        [].forEach.call(thumbCarousel, function(iT) {
            removeClass(iT, "active");             
        }); 
        addClass(this, "active", false);      
               
        carouselThumb(this);        
        document.querySelector("#image-carousel").setAttribute("src", `./images/image-product-${src}.jpg`);

    });

}

function carouselThumb(indexCarousel) {

    for (let c = 0; c < thumbCarousel.length; c++) {

        if (indexCarousel === thumbCarousel[c]) {
            src = c + 1;
        } 
        src > containerThumb.length ? src = 4: src = src;

    }

}

backImage.addEventListener('click', imageBack);
nextImage.addEventListener('click', imageNext);

function imageBack() {

    [].forEach.call(thumbCarousel, function(i) {
        removeClass(i, "active");             
    }); 

    let preview = document.querySelector("#image-carousel").getAttribute("src");
    src = Number(preview.substring(23,24));

    src -= 1;
    if (src < 1) {
        src = 4;
    }    

    document.querySelector("#image-carousel").setAttribute("src", `./images/image-product-${src}.jpg`);
    thumbCarousel[src-1].classList.add("active");

}

function imageNext() {

    [].forEach.call(thumbCarousel, function(i) {
        removeClass(i, "active");             
    }); 

    let preview = document.querySelector("#image-carousel").getAttribute("src");
    src = Number(preview.substring(23,24));

    src += 1;
    if (src > thumbCarousel.length) {
        src = 1;
    } 
     
    document.querySelector("#image-carousel").setAttribute("src", `./images/image-product-${src}.jpg`);
    thumbCarousel[src-1].classList.add("active");

}

// Menu.
menu.addEventListener('click', () => {
    addClass(nav, "active", true);
    window.scrollTo(0, 0);

    if (nav.classList.contains("active")) {
        menu.setAttribute("src", "./images/icon-close.svg");
        document.body.style.overflow = "hidden";
        document.querySelector(".wrapper").classList.add("active");
    } 
    if (!nav.classList.contains("active")) {
        menu.setAttribute("src", "./images/icon-menu.svg");
        document.body.style.overflow = "scroll";
        document.querySelector(".wrapper").classList.remove("active");
    }
});

window.addEventListener('resize', () => {
    if (window.screen.width > 880) {
        document.querySelector(".wrapper").classList.remove("active");
        removeClass(nav, "active");
        menu.setAttribute("src", "./images/icon-menu.svg");
    }
});


// Image preview mobile.

previous.addEventListener('click', previousImageMobile);
next.addEventListener('click', nextImageMobile);

function previousImageMobile() {



}




/* window.addEventListener('blur', () => {
    console.log("saiu");
});
window.addEventListener('pagehide', () => {
    console.log("saiu 2")
}); */
//personal note:

//this.children[0].getAttribute("src");
/* function smudgeThumb(i) {

    window.alert("yes");

     containerThumb.forEach(element => {
        containerThumb[element].classList.remove("active");
    }); 
    containerThumb[i].classList.add("active"); 

}

containerThumb[0].addEventListener('click', smudgeThumb(0)); 
containerThumb[1].addEventListener('click', smudgeThumb(1)); 
containerThumb[2].addEventListener('click', smudgeThumb(2)); 
containerThumb[3].addEventListener('click', smudgeThumb(3));  */