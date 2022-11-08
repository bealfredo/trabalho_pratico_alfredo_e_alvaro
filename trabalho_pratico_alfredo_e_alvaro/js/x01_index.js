const spansCarrosel = document.querySelectorAll("#carrossel .controls span")
const divSlides = document.querySelector("#carrossel .slides")

function passSlide(slideNumber) {
    let l = spansCarrosel.length
    for(let i=0; i<l; i++) {
        spansCarrosel[i].classList.remove("selected")
    }

    divSlides.style.marginLeft = "-" + (slideNumber * 100) + "%";
    spansCarrosel[slideNumber].classList.add("selected")
}

function selectSlide(number) {
    passSlide(number)
    slideNumber = number 
}


let slideNumber = 0;


setInterval(function () {
    passSlide(slideNumber)

    slideNumber = slideNumber + 1

    if(slideNumber == 5) {
        slideNumber = 0;
    }
}, 3000);