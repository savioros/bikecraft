/* Links ativados */
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
    const url = location.href
    const href = link.href

    if(url.includes(href)){
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

/* Ativar itens do orçamento */
const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)

    if(elemento){
        elemento.checked = true
    }

}

parametros.forEach(ativarProduto)

/* Expandir Perguntas */
const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event){
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-control')
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPergunta(pergunta){
    pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPergunta)

/* Galeria de imagens */
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')
console.log(galeria)

function trocarImagem(event){
    const img = event.currentTarget
    const media = matchMedia('(min-width: 1000px)').matches

    if(media){
        galeriaContainer.prepend(img) 
    }

}

function eventosGaleria(imgGaleria){
    imgGaleria.addEventListener("click", trocarImagem)
}

galeria.forEach(eventosGaleria)