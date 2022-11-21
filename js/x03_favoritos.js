// pega favoritos e clona para a página de receitas
const arrLocalStorate = localStorage.getItem("confeitinsFavoritesArr").split("&")
const myFavorites = arrLocalStorate.filter(element => element)
const receitasSection = document.getElementById("receitas")
const receitasDatabase = document.querySelectorAll("div.receita")
const semFavoritos = document.querySelector(".banner-sem-favoritos")

{
    const l = myFavorites.length
    if (l == 0) { // mostra banner-sem-favoritos
        semFavoritos.style.display = "block";
    }
    for(let i = l-1; i >= 0; i--) {
        const receita = document.getElementById(myFavorites[i])

        // const favorite_btn = receitasDatabase[i].querySelector('.receita-actions button.favorite')
        // const favorite_btn_icon = receitasDatabase[i].querySelector('.receita-actions button.favorite span.material-symbols-outlined')
        // const favorite_btn_p = receitasDatabase[i].querySelector('.receita-actions button.favorite p')

        // favorite_btn.classList.add("favorited")
        // favorite_btn_p.innerHTML = "favoritado";
        // favorite_btn_icon.classList.add("font-effect-fire-animation")

        receitas.appendChild(receita)
    }
}



{
    const l = receitasDatabase.length
    for(let i = 0; i < l; i++) {
        // ação de remover dos favoritos
        const favorite_btn = receitasDatabase[i].querySelector('.receita-actions button.favorite')
        const favorite_btn_icon = receitasDatabase[i].querySelector('.receita-actions button.favorite span.material-symbols-outlined')
        const favorite_btn_p = receitasDatabase[i].querySelector('.receita-actions button.favorite p')
        const show_button = receitasDatabase[i].querySelector('.receita-show-moreless')
        const show_button_span = receitasDatabase[i].querySelector('.receita-show-moreless span')

        favorite_btn.addEventListener('click', function() {
            const favoritesArr = localStorage.getItem("confeitinsFavoritesArr").split("&")
            const id = receitasDatabase[i].getAttribute("id")

            const index = favoritesArr.indexOf(id)
            favoritesArr[index] = "";
            const cleanedArr = favoritesArr.filter(element => element)
            localStorage.setItem("confeitinsFavoritesArr", cleanedArr.join("&"))
             
            receitasDatabase[i].classList.add("removed")
            setTimeout(function() {
                receitasDatabase[i].remove()
                if (cleanedArr.length == 0) { // mostra banner-sem-favoritos
                    semFavoritos.style.display = "block";
                }
            }, 300)
        })

        // ação mostrar mais
        show_button.addEventListener('click', function() {
            if(show_button.classList.contains('more')) {
                show_button_span.innerHTML = 'mostrar menos'
                show_button.classList.remove('more')
                show_button.classList.add('less')
                receitasDatabase[i].classList.remove('closed')
            } else {
                show_button_span.innerHTML = 'mostrar mais'
                show_button.classList.remove('less')
                show_button.classList.add('more')
                receitasDatabase[i].classList.add('closed')
            }
        })
    }
}