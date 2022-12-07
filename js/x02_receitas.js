// receitas
const receitas = document.querySelectorAll("div.receita")

const l = receitas.length
for(let i = 0; i < l; i++) {
    const favorite_btn = receitas[i].querySelector('.receita-actions button.favorite')
    const favorite_btn_icon = receitas[i].querySelector('.receita-actions button.favorite span.material-symbols-outlined')
    const favorite_btn_p = receitas[i].querySelector('.receita-actions button.favorite p')
    const show_button = receitas[i].querySelector('.receita-show-moreless')
    const show_button_span = receitas[i].querySelector('.receita-show-moreless span')

    favorite_btn.addEventListener('click', function() {
        const favoritesArr = localStorage.getItem("confeitinsFavoritesArr").split("&")
        const id = receitas[i].getAttribute("id")

        if(favorite_btn.classList.contains("favorited")) {
            favorite_btn.classList.remove("favorited")
            favorite_btn_p.innerHTML = "favoritar";
            favorite_btn_icon.classList.remove("font-effect-fire-animation")

            const index = favoritesArr.indexOf(id)
            favoritesArr[index] = "";
            const cleanedArr = favoritesArr.filter(element => element)
            localStorage.setItem("confeitinsFavoritesArr", cleanedArr.join("&"))
        } else {
            favorite_btn.classList.add("favorited")
            favorite_btn_p.innerHTML = "favoritado";
            favorite_btn_icon.classList.add("font-effect-fire-animation")

            const str = localStorage.getItem("confeitinsFavoritesArr") + "&" + id
            localStorage.setItem("confeitinsFavoritesArr",  str)
        }
    })

    show_button.addEventListener('click', function() {
        if(show_button.classList.contains('more')) {
            show_button_span.innerHTML = 'mostrar menos'
            show_button.classList.remove('more')
            show_button.classList.add('less')
            receitas[i].classList.remove('closed')
        } else {
            show_button_span.innerHTML = 'mostrar mais'
            show_button.classList.remove('less')
            show_button.classList.add('more')
            receitas[i].classList.add('closed')
        }
    })
}

// atualizar favoritos
if(!localStorage) {
    window.alert("O seu navegador não dá suporta para localStorare." + 
        "\n\nDevido à isso a funcionalizade de adicionar uma receita aos seus favoritos não funcionará :(" +
        "\n\nAtenciosamente, Confeitins.")
} else {
    if (!localStorage.getItem("confeitinsFavorites")) {
        localStorage.setItem("confeitinsFavorites", "created")
        const l = receitas.length;
        localStorage.setItem("confeitinsFavoritesArr" ,"")
    } else {
        const favoritesArr = localStorage.getItem("confeitinsFavoritesArr").split("&")
        const l = receitas.length;
        for(let i = 0; i < l; i++) {
            const id = receitas[i].getAttribute("id")
            const favorite_btn = receitas[i].querySelector('.receita-actions button.favorite')
            const favorite_btn_icon = receitas[i].querySelector('.receita-actions button.favorite span.material-symbols-outlined')
            const favorite_btn_p = receitas[i].querySelector('.receita-actions button.favorite p')

            if(favoritesArr.includes(id)) {
                favorite_btn.classList.add("favorited")
                favorite_btn_p.innerHTML = "favoritado";
                favorite_btn_icon.classList.add("font-effect-fire-animation")
            } 
        }
    }
}
// ! todo

// baner-natalino
const snoflake = document.getElementById("snowflakeModel")
const bannerNatalino = document.querySelector(".banner-natalino")
const myRandom = function(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
}

for(let i = 0; i < 60; i++) {
    let copy = snoflake.cloneNode(true)
    copy.removeAttribute('id')
    copy.style.width = myRandom(4, 20) + "rem"
    copy.style.left = myRandom(0, 95) + "%"
    copy.style.top = myRandom(-20, 95) + "%"

    // opacidade
    const opacity = "0." +  myRandom(7, 99)
    copy.style.setProperty('--opacity', opacity);
    bannerNatalino.appendChild(copy)

    // delay
    const delay = myRandom(0, 3) + "." + myRandom(0, 2) + "s"
    copy.style.setProperty('--delay', delay);
    bannerNatalino.appendChild(copy)
}

// flocos background
function flocosNoBackground() {
    let copy = snoflake.cloneNode(true)
    copy.removeAttribute('id')
    copy.style.width = myRandom(4, 20) + "rem"
    copy.style.left = myRandom(0, 95) + "%"
    
    document.body.appendChild(copy)

    // destruição manual
    copy.addEventListener("click", function() {
        this.classList.add("destroyed")
    })

    // destruição automática
    setTimeout(function() {
        copy.remove();
    }, 30000)
}
flocosNoBackground()

setInterval(flocosNoBackground, 2000)


