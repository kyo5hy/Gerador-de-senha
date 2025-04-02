window.gerarSenhaCritpo = function() {
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const gerarsenha = () => {
        const escolher = Math.random();
        let letras;
        if (escolher < 0.5) {  
            letras = String.fromCharCode(random(65, 90));  
        } else { 
            letras = String.fromCharCode(random(97, 122)); 
        }
        return letras.charCodeAt(0).toString(16);
    };

    const gerarsenha2 = () => {
        const numero = String.fromCharCode(random(48, 57));
        return numero.charCodeAt(0).toString(16);
    };

    const gerarsenha3 = () => {
        const caractere = String.fromCharCode(random(33, 47));
        return caractere.charCodeAt(0).toString(16);
    };

    let numeros = '';
    let letras = '';
    let caracteres = '';

    for (let i = 0; i < 8; i++) {
        letras += gerarsenha();
    }

    for (let i = 0; i < 2; i++) {
        numeros += gerarsenha2();
    }

    for (let i = 0; i < 2; i++) {
        caracteres += gerarsenha3();
    }

    const senha = (letras + numeros + caracteres).split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById("senhaGerada").value = senha;
};
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", window.gerarSenhaCritpo);
});
