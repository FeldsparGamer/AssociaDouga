// imagens do dia (seria mais fácil eu fazer todas as imagens em png, mas preguiça lol)
const dailyImages = [
    "imagens do dia/Day1.webp",
    "imagens do dia/Day2.webp",
    "imagens do dia/Day3.webp",
    "imagens do dia/Day4.png",
    "imagens do dia/Day5.webp",
    "imagens do dia/Day6.png",
    "imagens do dia/Day7.png",
    "imagens do dia/Day8.png",
];

// nomes das imagens merda
const dailyNames = [
    "Gromit",
    "Tando",
    "Sperma",
    "The Rock",
    "Frango",
    "Luffinho",
    "Bruxinha",
    "Mina Misasa",
]

// nome de quem manda nessa porra, quer dizer as imagens
const dailyAuthor = [
    "AdrielCrafter",
    "Liam Quezada",
    "Sonnic1998",
    "Sonnic1998",
    "Miguelitopira",
    "Edamaku",
    "Mashed",
    "Bitzin",
]

// dizia Sócrates..
const dailyQuote = [
    "parece a dona ahhahahahhaha",
    "zop",
    "Rivaldo Reis de Souza",
    "pinto noturno customizado 🇧🇷",
    "Um pinto na mão é melhor que dois no rabo",
    "teu rabo",
    "Maldições são igual a violino, viro a cara e passo a vara",
    "boca fala doque o coração ta cheio :donkey_cock:",
    "Foi de Nagasaki",
    "eu me arrependo de ter falado PintoNET kkkkkkkkkkkkk",
    "Não reclame da pessoa antes de conhecê-lâ. Ou melhor, não julgue-a antes de saber quem ela é.",
]

// quem disse isso?
const dailyQuoteAuthors = [
    "Chaves",
    "Treco",
    "Dr. Eggman",
    "AdrielCrafter",
    "Wagoogus Jr.",
    "Mashed",
    "Okksttu Yuta",
    "JohnmakerX",
    "Alan",
    "Miguelitopira",
    "Bitzin"
]

function setDailyImage() {
    const date = new Date();
    const dayOfMonth = date.getDate() - 1;
    const imageIndex = dayOfMonth % dailyImages.length;
    const nameIndex = imageIndex;
    const authorIndex = imageIndex;
    const quoteIndex = imageIndex;
    const quoteauthorIndex = imageIndex;
    document.getElementById("daily-image").src = dailyImages[imageIndex];
    document.getElementById("image-name").textContent = dailyNames[nameIndex];
    document.getElementById("image-author").textContent = dailyAuthor[authorIndex];
    document.getElementById("quote").textContent = dailyQuote[quoteIndex];
    document.getElementById("author").textContent = dailyQuoteAuthors[quoteauthorIndex];
}

setDailyImage();
