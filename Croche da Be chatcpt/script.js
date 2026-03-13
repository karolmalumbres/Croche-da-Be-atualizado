/* ================================= */
/* MENU MOBILE */
/* ================================= */

const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.nav')

if (menuToggle && nav) {

menuToggle.addEventListener('click', () => {

const expanded = menuToggle.getAttribute('aria-expanded') === 'true'
menuToggle.setAttribute('aria-expanded', String(!expanded))

nav.classList.toggle('is-open')

})

nav.querySelectorAll('a').forEach((link) => {

link.addEventListener('click', () => {

nav.classList.remove('is-open')
menuToggle.setAttribute('aria-expanded', 'false')

})

})

}


/* ================================= */
/* ANIMAÇÃO DE REVEAL AO ROLAR */
/* ================================= */

const revealItems = document.querySelectorAll('.reveal')

if(revealItems.length){

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {
entry.target.classList.add('visible')
}

})

},{ threshold:0.2 })

revealItems.forEach((item)=> observer.observe(item))

}


/* ================================= */
/* SISTEMA DE MÍDIA DO PRODUTO */
/* ================================= */

const areaMidia = document.getElementById("midiaPrincipal")
const thumbs = document.querySelectorAll(".thumbs [data-src]")

if(areaMidia && thumbs.length){

let indiceMidia = 0
const midias = []

/* montar array automaticamente */

thumbs.forEach((thumb,index)=>{

midias.push({
tipo: thumb.dataset.tipo,
src: thumb.dataset.src
})

thumb.addEventListener("click",()=>{

indiceMidia = index
trocarMidia()

})

thumb.addEventListener("mouseenter",()=>{

indiceMidia = index
trocarMidia()


})

})


/* trocar mídia */

function mostrarMidia(tipo,src){

areaMidia.classList.remove("fade")

setTimeout(()=>{

if(tipo === "img"){
areaMidia.innerHTML = `<img src="${src}">`
}

if(tipo === "video"){
areaMidia.innerHTML = `
<video controls autoplay>
<source src="${src}" type="video/mp4">
</video>`
}

areaMidia.classList.add("fade")

},50)

}


/* atualizar miniaturas */

function atualizarMiniatura(){

thumbs.forEach(t=> t.classList.remove("ativa"))
thumbs[indiceMidia].classList.add("ativa")

}


/* trocar midia completa */

function trocarMidia(){

atualizarMiniatura()

mostrarMidia(
midias[indiceMidia].tipo,
midias[indiceMidia].src
)

}


/* navegação */

function proxima(){

indiceMidia++

if(indiceMidia >= midias.length){
indiceMidia = 0
}

trocarMidia()

}

function anterior(){

indiceMidia--

if(indiceMidia < 0){
indiceMidia = midias.length - 1
}

trocarMidia()

}


/* swipe celular */

let startX = 0
let endX = 0

areaMidia.addEventListener("touchstart",(e)=>{
startX = e.touches[0].clientX
})

areaMidia.addEventListener("touchend",(e)=>{
endX = e.changedTouches[0].clientX
verificarSwipe()
})


/* swipe computador */

areaMidia.addEventListener("mousedown",(e)=>{
startX = e.clientX
})

areaMidia.addEventListener("mouseup",(e)=>{
endX = e.clientX
verificarSwipe()
})


/* verificar swipe */

function verificarSwipe(){

if(startX - endX > 50){
proxima()
}

if(endX - startX > 50){
anterior()
}

}

}

/* ============================= */
/* FULLSCREEN IMAGEM PRODUTO */
/* ============================= */

const areaMidiaZoom = document.getElementById("midiaPrincipal")
const fullscreen = document.getElementById("fullscreen")
const fullscreenImg = document.getElementById("fullscreenImg")

if(areaMidiaZoom && fullscreen && fullscreenImg){

areaMidiaZoom.addEventListener("click", ()=>{

const img = areaMidiaZoom.querySelector("img")

if(img){

fullscreen.style.display = "flex"
fullscreenImg.src = img.src

}

})

fullscreen.addEventListener("click", ()=>{
fullscreen.style.display = "none"
})

}