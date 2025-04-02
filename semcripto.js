window.gerarSenha = function() {
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

    // Função para gerar letras (maiúsculas e minúsculas)
    const gerarsenha = () => {
        const escolher = Math.random();
        let letras;

        if (escolher < 0.5) {  
            letras = String.fromCharCode(random(65, 90));  // Letras maiúsculas (A-Z)
        } else { 
            letras = String.fromCharCode(random(97, 122)); // Letras minúsculas (a-z)
        }

        return letras;  // Retorna o caractere diretamente
    };

    // Função para gerar números
    const gerarsenha2 = () => {
        return String.fromCharCode(random(48, 57));  // Números (0-9)
    };

    // Função para gerar caracteres especiais
    const gerarsenha3 = () => {
        return String.fromCharCode(random(33, 47));  // Caracteres especiais
    };

    let numeros = '';
    let letras = '';
    let caracteres = '';

    // Garantir 8 letras
    for (let i = 0; i < 8; i++) {
        letras += gerarsenha();
    }

    // Garantir pelo menos 2 números
    for (let i = 0; i < 2; i++) {
        numeros += gerarsenha2();
    }

    // Garantir pelo menos 2 caracteres especiais
    for (let i = 0; i < 2; i++) {
        caracteres += gerarsenha3();
    }

    // Misturar os caracteres antes de exibir
    const senha = (letras + numeros + caracteres).split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById("senhaGerada").value = senha;
  // Exibe a senha gerada sem criptografia hexadecimal
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton1").addEventListener("click", window.gerarSenha);
});
