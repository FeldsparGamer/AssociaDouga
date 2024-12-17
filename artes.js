const arts = [
    { title: "Team Delta", artist: "JohnmakerX", img: "artes/Arte1.png" },
    { title: "Eniac", artist: "Liam Quezada", img: "artes/Arte2.png" },
    { title: "Max", artist: "Liam Quezada", img: "artes/Arte21.png" },
    { title: "Beta", artist: "Liam Quezada", img: "artes/Arte5.png" },
    { title: "Alpha", artist: "Liam Quezada", img: "artes/Arte24.png" },
    { title: "Mech", artist: "Liam Quezada", img: "artes/Arte25.png" },
    { title: "Trem", artist: "AdrielCrafter", img: "artes/Arte3.png" },
    { title: "Aniversário do Fupi", artist: "Sonnic1998", img: "artes/Arte4.png"},
    { title: "Marionic", artist: "Miguelitopira", img: "artes/Arte9.png"},
    { title: "Hollow Knight", artist: "Liam Quezada", img: "artes/Arte22.png" },
    { title: "Trem 2", artist: "AdrielCrafter", img: "artes/Arte15.png"},
    { title: "Prova Díficil", artist: "JohnmakerX", img: "artes/Arte6.png" },
    { title: "Arte dos Animadores", artist: "Liam Quezada", img: "artes/Arte28.png" },
    { title: "EVA 01 e Shinji", artist: "Liam Quezada", img: "artes/Arte7.png" },
    { title: "Super Sonic RPG", artist: "JohnmakerX", img: "artes/Arte10.png" },
    { title: "Trem 3", artist: "AdrielCrafter", img: "artes/Arte13.png" },
    { title: "Heady Flamejante", artist: "Map the PC", img: "artes/Arte14.png" },
    { title: "John e amigos", artist: "JohnmakerX", img: "artes/Arte11.png" },
    { title: "Freddy Fazbear", artist: "Liam Quezada", img: "artes/Arte19.png" },
    { title: "Família Românica", artist: "JohnmakerX", img: "artes/Arte17.png" },
    { title: "Arte de Halloween 2024", artist: "Liam Quezada", img: "artes/Arte20.png" },
    { title: "John e seus ídolos", artist: "JohnmakerX", img: "artes/Arte12.png" },
    { title: "Halloween de Bot Planet", artist: "Liam Quezada", img: "artes/Arte26.png" },
    { title: "Estação Mogi das Cruzes", artist: "AdrielCrafter", img: "artes/Arte16.png" },
    { title: "Liam Quezada", artist: "Liam Quezada", img: "artes/Arte23.png" },
    { title: "Fogo Amigo", artist: "Sonnic1998", img: "artes/Arte18.png" },
    { title: "Liam Vampiro", artist: "Liam Quezada", img: "artes/Arte27.png" },
    { title: "Miguel the Lombax", artist: "Bitzin", img: "artes/Arte29.png" },
    { title: "Vale Montanhoso", artist: "Liam Quezada", img: "artes/Arte30.png" },
    
  ];
  
  let currentIndex = 0;
  
  const leftArt = document.getElementById("left-art");
  const centerArt = document.getElementById("center-art");
  const rightArt = document.getElementById("right-art");
  
  function updateCarousel() {
    const leftIndex = (currentIndex - 1 + arts.length) % arts.length;
    const rightIndex = (currentIndex + 1) % arts.length;
  
    updateArt(leftArt, arts[leftIndex]);
    updateArt(centerArt, arts[currentIndex], true);
    updateArt(rightArt, arts[rightIndex]);
  }
  
  /**
   * 
   * @param {HTMLElement} element 
   * @param {Object} art )
   * @param {boolean} isCenter 
   */
  function updateArt(element, art, isCenter = false) {
    element.innerHTML = `
      <img src="${art.img}" alt="${art.title}">
      <h2>${art.title}</h2>
      <p>Criada por ${art.artist}</p>
    `;
    element.classList.toggle("large", isCenter);
    element.classList.toggle("small", !isCenter);
  }
  
 
  function moveLeft() {
    currentIndex = (currentIndex - 1 + arts.length) % arts.length;
    updateCarousel();
  }
  
  function moveRight() {
    currentIndex = (currentIndex + 1) % arts.length;
    updateCarousel();
  }
  
  document.getElementById("prev").addEventListener("click", moveLeft);
  document.getElementById("next").addEventListener("click", moveRight);
  
  updateCarousel();
  
