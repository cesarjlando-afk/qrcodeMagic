function getParametro(nome){

const params = new URLSearchParams(window.location.search)

return params.get(nome)

}

const codigoCliente = getParametro("c")

const mensagemElemento = document.getElementById("mensagem")

const video = document.getElementById("video")
const videoSource = document.getElementById("videoSource")

if(codigoCliente && clientes[codigoCliente]){

mensagemElemento.textContent =
clientes[codigoCliente].mensagem

videoSource.src =
clientes[codigoCliente].video

video.load()

}else{

mensagemElemento.textContent =
"🎉 Bem-vindo ao convite especial!"

}

/* balões animados */

function criarBalao(){

let balao = document.createElement("div")

balao.classList.add("balao")

balao.style.left = Math.random()*100 + "vw"

balao.style.background =
`hsl(${Math.random()*360},70%,60%)`

balao.style.animationDuration =
(Math.random()*5+5)+"s"

document.body.appendChild(balao)

setTimeout(()=>{
balao.remove()
},10000)

}

setInterval(criarBalao,600)