// Função para sortear uma letra aleatória
function sortearLetra() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letraSorteada = letras[Math.floor(Math.random() * letras.length)];
    return letraSorteada;
}

// Atualiza a letra sorteada na página
function atualizarLetraSorteada() {
    const letterElement = document.getElementById('letter');
    const letraSorteada = sortearLetra();

    // Adiciona a classe "rotating" para ativar a animação
    letterElement.classList.add('rotating');

    setTimeout(() => {
        // Remove a classe "rotating" após 2 segundos (duração da animação)
        letterElement.classList.remove('rotating');
        letterElement.textContent = letraSorteada;
        sessionStorage.setItem("letraSorteada", letraSorteada);
    }, 2000); // 2000ms = 2 segundos
}

// Adiciona um ouvinte de eventos para o botão
const drawButton = document.getElementById('draw-button');
drawButton.addEventListener('click', atualizarLetraSorteada);