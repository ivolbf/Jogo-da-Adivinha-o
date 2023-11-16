
let numberPensado = document.querySelector("#numberInput")
let screenOne = document.querySelector(".screenOne")
let screentwo = document.querySelector(".screenTwo")
let buttonTentar = document.querySelector("#tentar")
let btnJogarNovamente = document.querySelector(".jogarNovamente")
let errouTentativa = document.querySelector("#errouTentativa")

let randomNumber = Math.round(Math.random() * 10)
let tentativas = 1
function checarNumero (event){
  event.preventDefault()
  if (Number(numberPensado.value) == randomNumber && numberPensado!== "") {
    trocaTela()
    screentwo.querySelector("h1").innerText = `Você Acertou em ${tentativas} 
    tentativas!`
  } 
  else{
    errouTentativa.innerText = "Você errou tente Novamente"
  }
 
  numberPensado.value = ""
  tentativas++
}  

function jogarNovamente (){
  errouTentativa.innerText = ""
  tentativas = 1
  randomNumber = Math.round(Math.random() * 10)
  trocaTela()
}
function trocaTela(){
  screenOne.classList.toggle('hide')
  screentwo.classList.toggle('hide')
}
buttonTentar.addEventListener("click" , checarNumero )
btnJogarNovamente.addEventListener("click" , jogarNovamente)
