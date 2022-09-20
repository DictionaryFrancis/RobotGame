const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (element) => {
    element.addEventListener("click",(event) => {
        manipulaDados(event.target.textContent,event.target.parentNode)
    })
})
function manipulaDados(operacao) {

    const peca = document.querySelector(".controle-contador")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}