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











<header class="closed">
        <div class="logo confeitins">
            <a href="#" style="pointer-events: none;">
                <img src="./images/logo confeitins 3.png" alt="">
            </a>
        </div>

        <span>
            
        </span>

        <div class="my-menu-icon closed">
            <span  class="row-1"></span>
            <div class="wrapper-rows">
                <span class="row-2"></span>
                <span class="row-3"></span>
            </div>
            <span class="row-4"></span>
        </div>

        <nav id="menu">
            <a href="#">Página inicial</a>
            <a href="./pages/x02_receitas.html">Receitas</a>
            <a href="./pages/x03_favoritos.html">Favoritos</a>
            <a href="./pages/x04_contato.html">Contato</a>
            <a href="./pages/x05_quemsou.html">Sobre nós</a>
        </nav>

        <div class="logo unitins">
            <a href="https://www.unitins.br/nPortal/" target="_blank">
                <img src="./images/logo unitins.png" alt="logo unitins">
            </a>
        </div>
    </header>







<section id="carrossel">
        <div class="custom-shape-divider-top-1669505174">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
            </svg>
        </div>
        <div class="slides">
            <div class="slide s1 selected">
                <img src="./images/hero-donuts.jpg" alt="">
            </div>
            <div class="slide s2">
                <img src="./images/receitas/receita03_img1.jpg" alt="">
            </div>
            <div class="slide s3">
                <img src="" alt="">
            </div>
            <div class="slide s4">
                <img src="" alt="">
            </div>
            <div class="slide s5">
                <img src="" alt="">
            </div>
        </div>
        <div class="controls">
            <button onclick="selectSlide(0)" class="selected"></button>
            <button onclick="selectSlide(1)"></button>
            <button onclick="selectSlide(2)"></button>
            <button onclick="selectSlide(3)"></button>
            <button onclick="selectSlide(4)"></button>
        </div>
        <div class="custom-shape-divider-bottom-1669505293">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
            </svg>
        </div>
    </section>