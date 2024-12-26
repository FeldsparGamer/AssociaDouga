// script.js

// Função para criar flocos de neve
function createSnowflakes() {
    const snowContainer = document.getElementById('snow');
    const snowflake = document.createElement('div');
    const size = Math.random() * 10 + 5; // Tamanho entre 5px e 15px
  
    snowflake.classList.add('snowflake');
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`; // Posição aleatória
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração entre 2s e 5s
    snowflake.style.animationDelay = `${Math.random() * 5}s`; // Atraso aleatório
  
    snowContainer.appendChild(snowflake);
  
    // Remover floco de neve após a animação
    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }
  
  // Ativar neve apenas em dezembro
  const currentMonth = new Date().getMonth(); // Janeiro = 0, Dezembro = 11
  if (currentMonth === 11) {
    setInterval(createSnowflakes, 200); // Cria flocos a cada 200ms
  }
  
