// Armazene os dados de usuário fictícios (isso deve ser substituído por um sistema de gerenciamento de usuários em um ambiente real)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

// Função para autenticar um usuário
function loginUser(username, password) {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}

// Função para registrar um novo usuário
function registerUser(newUsername, newPassword) {
    // Verifique se o nome de usuário já existe
    for (let user of users) {
        if (user.username === newUsername) {
            return false; // Nome de usuário já em uso
        }
    }

    // Adicione o novo usuário à lista de usuários
    users.push({ username: newUsername, password: newPassword });
    return true; // Registro bem-sucedido
}

// Adiciona um ouvinte de eventos para o formulário de login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio do formulário padrão

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (loginUser(username, password)) {
        alert('Login bem-sucedido!'); // Você pode redirecionar o usuário após o login
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});

// Adiciona um ouvinte de eventos para o formulário de registro
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio do formulário padrão

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (registerUser(newUsername, newPassword)) {
        alert('Registro bem-sucedido!'); // Você pode redirecionar o usuário após o registro
    } else {
        alert('Nome de usuário já em uso. Escolha outro.');
    }
});
