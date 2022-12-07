const inputs = document.querySelectorAll("form input")

// adicionar dica visual aos imputs quando estiver invalido
for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function() {
        inputs[i].classList.add("clicked")
    })
}



/* validações */
// telefone
const inputTelefone = document.getElementById("ftelefone")
let telefoneNumbers = []
var lastValue;

function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

inputTelefone.addEventListener('input', function() {
    let value = inputTelefone.value;
    let last = value.slice(-1)

    if(last == ")") {value = value.slice(0, 2)}
    if(value+ "-" == lastValue ) {value = value.slice(0, 9)}

    telefoneNumbers = apenasNumeros(value).toString().split("")
    if(telefoneNumbers.join("") == "NaN") telefoneNumbers = []
    if(telefoneNumbers.length > 11) {
        telefoneNumbers = telefoneNumbers.slice(0,11)
    }
    
    if(telefoneNumbers.length > 6) {
        inputTelefone.value = "(" + telefoneNumbers.slice(0,2).join("") + ") " +
        telefoneNumbers.slice(2,7).join("") + "-" + telefoneNumbers.slice(7).join("");
    } else if(telefoneNumbers.length > 2) {
        inputTelefone.value = "(" + telefoneNumbers.slice(0,2).join("") + ") " + telefoneNumbers.slice(2).join("");
    } else if(telefoneNumbers.length == 2) {
        inputTelefone.value = "(" + telefoneNumbers.join("") + ") "
    } else if(telefoneNumbers.length == 1) {
        inputTelefone.value = "(" + telefoneNumbers.join("");
    } else {
        inputTelefone.value = "";
    }
    
    lastValue = inputTelefone.value;
})


// estado - cidade
const go = ['Anápolis', 'Aparecida de Goiânia', 'Goiânia', 'Rio Verde', 'Trindade', 'Outra']
const mg = ['Betim', 'Contagem', 'Juiz de Fora', 'Montes Claros', 'Uberlândia', 'Outra']
const rj = ['Itaperuna', 'Macaé', 'Resende', 'Rio de Janeiro', 'Valença', 'Outra']
const sp = ['Campinas', 'Guarulhos', 'Osasco', 'Santos', 'São Paulo', 'Outra']
const to = ['Araguaína', 'Guaraí', 'Gurupi', 'Palmas', 'Porto Nacional', 'Outra']
const estados = [go, mg, rj, sp, to]

const estadoInput = document.getElementById("festado")
const cidadeInput = document.getElementById("fcidade")

function setOptionsCidade(arr) {
    cidadeInput.innerHTML = `<option value="Outro" style="display: none;" selected></option>`;
    for(let i = 0; i < arr.length; i++) {
        const element = document.createElement("option");
        element.value = arr[i]
        element.innerHTML = arr[i]
        cidadeInput.appendChild(element);
    }
}

estadoInput.addEventListener('change', function() {
    const newValue = estadoInput.value
    cidadeInput.removeAttribute('disabled',"")

    if(newValue == "GO") setOptionsCidade(go)
    else if(newValue == "MG") setOptionsCidade(mg)
    else if(newValue == "RJ") setOptionsCidade(rj)
    else if(newValue == "SP") setOptionsCidade(sp)
    else if(newValue == "TO") setOptionsCidade(to)
    else {
        cidadeInput.setAttribute('disabled',"")
        setOptionsCidade([])
    }
})



// textarea
const textarea = document.getElementById("fmsg")
const contadorElement = document.getElementById("fmsg-counter")
const maxlength = textarea.getAttribute("maxlength")

textarea.addEventListener("input", function() {
    const restante = Number(maxlength) - textarea.value.length
    contadorElement.textContent = restante + "/" + maxlength
})

contadorElement.textContent = maxlength + "/" + maxlength



/* footer absolute ou relative - para ficar sempre no bottom */
const body = document.querySelector('body')
const footer = document.querySelector('footer')
const sectionCentro = document.querySelector("section.centro")

function positionFooter() {
    if(Number(body.clientHeight) < Number(sectionCentro.clientHeight) + 20 + 20 + 70)
        footer.style.position = 'relative'
    else
        footer.style.position = 'absolute'
}
positionFooter()

setInterval(positionFooter, 0)