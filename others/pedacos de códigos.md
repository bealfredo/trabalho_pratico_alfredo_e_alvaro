<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confeitins - Confeitaria da UNITINS</title>

  <link rel="stylesheet" href="../css/fortacoes.css">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="./css/style.css">

</head>
<body>


  <script src="../js/script.js"></script>
  <script src="./js/script.js"></script>
  
</body>
</html>




favorite_btn.addEventListener('click', function() {
        if(favorite_btn.classList.contains("favorited")) {
            favorite_btn.classList.remove("favorited")
            favorite_btn_p.innerHTML = "favoritar";
            favorite_btn_icon.classList.remove("font-effect-fire-animation")
            localStorage.setItem("confeitinsFavoritesReceita" + (i+1).toString().padStart(2,"0"), "false") 
        } else {
            favorite_btn.classList.add("favorited")
            favorite_btn_p.innerHTML = "favoritado";
            favorite_btn_icon.classList.add("font-effect-fire-animation")
            localStorage.setItem("confeitinsFavoritesReceita" + (i+1).toString().padStart(2,"0"), "true") 
        }
    })



// atualizar favoritos
if(!localStorage) {
    window.alert("O seu navegador não dá suporta para localStorare." + 
        "\n\nDevido à isso a funcionalizade de adicionar uma receita aos seus favoritos não funcionará :(" +
        "\n\nAtenciosamente, Confeitins.")
} else {
    if (!localStorage.getItem("confeitinsFavorites")) {
        localStorage.setItem("confeitinsFavorites", "created")
        const l = receitas.length;
        for(let i = 1; i <= l; i++) {
            localStorage.setItem("confeitinsFavoritesReceita" + i.toString().padStart(2,"0"),"false")
        }
    } else {
        const l = receitas.length;
        for(let i = 0; i < l; i++) {
            const favorite_btn = receitas[i].querySelector('.receita-actions button.favorite')
            const favorite_btn_icon = receitas[i].querySelector('.receita-actions button.favorite span.material-symbols-outlined')
            const favorite_btn_p = receitas[i].querySelector('.receita-actions button.favorite p')

            if(localStorage.getItem("confeitinsFavoritesReceita" + (i+1).toString().padStart(2,"0")) == "true") {
                // favorite_btn.classList.remove("favorited")
                favorite_btn.classList.add("favorited")
                favorite_btn_p.innerHTML = "favoritado";
                favorite_btn_icon.classList.add("font-effect-fire-animation")
            } 
        }
    }
}