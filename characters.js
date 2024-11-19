const carousel = document.getElementById('carousel');
const infoTitle = document.getElementById('info-title');
const infoText = document.getElementById('info-text');
const infoImage = document.getElementById('info-image');

function slideCarousel(direction) {
    const scrollAmount = 120; 
    carousel.scrollBy({
        top: 0,
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

function updateInfo(nome, descricao, imagem) {
    document.getElementById("info-title").textContent = nome;
    document.getElementById("info-text").textContent = descricao;
    document.getElementById("info-image").src = imagem;
}