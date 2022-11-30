const spansCarrosel = document.querySelectorAll("#carrossel .controls button")
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
}, 8000);

// localStorage.setItem("receitas","bolo de chocolate")


// animação nos corações da sessão favoritos
const hearts = document.querySelectorAll("#new-favorites span span")
const myRandom = function(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
}
const setHearts = function() {
    for(let i = 0; i < 10; i++) {
        const heart = hearts[myRandom(0, l-1)]
        heart.classList.add("font-effect-fire-animation")
        
        setTimeout(function() {
            heart.classList.remove("font-effect-fire-animation")
        }, 10000)

    }
}
const l = hearts.length;

setHearts();

setInterval(() => {
    setHearts();
}, 9000);
