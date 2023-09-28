// Adiciona um ouvinte de eventos para o botão "Começar"
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', function () {
    // Redireciona para a tela de sorteio de letra (substitua 'sorteio.html' pelo nome do seu arquivo)
    window.location.href = 'sorteio.html';
});
function regras(){
    window.location.href = 'regras.html';

    setTimeout(function() {
        document.getElementById('Redireciona').click();
    }, 3000);
}
function login(){
    window.location.href = 'login.html';

    setTimeout(function() {
        document.getElementById('Redireciona').click();
    }, 3000);
}