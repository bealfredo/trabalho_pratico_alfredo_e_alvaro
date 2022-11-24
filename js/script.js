const header = document.querySelector("header")
const menuIcon = document.querySelector(".my-menu-icon")
const headerMenu = document.querySelector("header .menu")

menuIcon.addEventListener("click", function() {
    if (header.classList.contains("closed")) {
        header.classList.remove("closed")
        header.classList.add("open")
        // document.body.style.overflowY = "hidden";
        document.body.scroll = "no"
    } else {
        header.classList.remove("open")
        header.classList.add("closed")
        document.body.style.overflowY = "initial";
    }
})

window.onresize = function () {
    const width = Number(document.documentElement.clientWidth)
    if(width >= 950) {
        document.body.style.overflowY = "initial";

        if (header.classList.contains("open")) {
            header.classList.remove("open")
            header.classList.add("closed")
            document.body.style.overflowY = "initial";
        }

    }
}


// rolar até receita do link
const url = window.location.href.toString()
const idReceita = url.slice(-12, -1)

if(idReceita.includes("#receita-")) {
    
    setTimeout(function() {
        const receitaElement = document.querySelector(idReceita)
        const position = receitaElement.getBoundingClientRect().top
        window.scrollTo({top: position - 80, behavior: 'smooth'})
    
        receitaElement.classList.add("target")
        setTimeout(function() {
            receitaElement.classList.remove("target")
        }, 10000)
    }, 500)

}
 