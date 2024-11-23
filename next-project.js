const carousel = document.getElementById('carousel');
const infoTitle = document.getElementById('info-title');
const infoText = document.getElementById('info-text');
const infoImage = document.getElementById('info-image');

const jogosImagensBanner = [
    "Projetos-Imagens/SSBBX-Imagem.png", 
    "Projetos-Imagens/Revolution-Imagem.png",
    "Projetos-Imagens/Gehenna-Imagem.png",
    "Projetos-Imagens/bannertemplate.png",
    "Projetos-Imagens/Resistance-Imagem.png",
    "Projetos-Imagens/bannertemplate.png",
    "Projetos-Imagens/MTG-Imagem.png",
    "Projetos-Imagens/bannertemplate.png",
    "Projetos-Imagens/bannertemplate.png"
];

const jogosImagensInfo = [
    "Projetos-Logos/SSBBX.png", 
    "Projetos-Logos/PLACEHOLDER.png",
    "Projetos-Logos/PLACEHOLDER.png",
    "Projetos-Logos/PWRlogo.png",
    "Projetos-Logos/ResistanceLogo.png",
    "Projetos-Logos/Heady_Logo.png",
    "Projetos-Logos/MTGLogo.png",
    "Projetos-Logos/PLACEHOLDER.png",
    "Projetos-Logos/Bot_Planet_Logo_Letras.png"
];

function slideCarousel(direction) {
    const scrollAmount = 120; 
    carousel.scrollBy({
        top: 0,
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

function updateInfo(nome, descricao, bannerIndex, infoIndex) {
    document.getElementById("info-title").textContent = nome;
    document.getElementById("info-text").textContent = descricao;

    const infoImage = document.getElementById("info-image");
    infoImage.src = jogosImagensInfo[infoIndex];

    const bannerImage = document.getElementById("banner-image");
    bannerImage.src = jogosImagensBanner[bannerIndex];
}
