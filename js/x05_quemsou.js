/* footer absolute ou relative - para ficar sempre no bottom */
const body = document.querySelector('body')
const footer = document.querySelector('footer')
const desenvolvedores = document.getElementById("desenvolvedores")

function positionFooter() {
    if(Number(body.clientHeight) < Number(desenvolvedores.clientHeight + 175)){
        footer.style.position = 'relative'
    }
    else
        footer.style.position = 'absolute'
}
positionFooter()

setInterval(positionFooter, 0)