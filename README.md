# Desafio de Programação - Gerador de Senhas com Buffer

Este repositório contém um projeto de programação desenvolvido por **Kyoshy** e **Ygor**, como parte de um **desafio de programação** para explorar a classe global **Buffer** e outras funcionalidades do JavaScript.

## Sobre o Desafio

O objetivo do desafio é criar um **gerador de códigos aleatórios** (palavras cifradas) utilizando a classe **Buffer**. Em vez de uma pessoa criar uma senha, o sistema gera uma **string aleatória** e a protege, exibindo-a no formato **hexadecimal**.

### Requisitos do Desafio

1. Gerar uma senha de **10 caracteres MAIÚSCULOS**.
2. A senha deve conter **no mínimo 2 caracteres numéricos** e **2 caracteres especiais**.
3. Utilizar as seguintes ferramentas:
   - **Tabela ASCII**: [https://www.ascii-code.com/pt](https://www.ascii-code.com/pt)
   - **Math.random()** para gerar caracteres aleatórios.
   - **array.map(), String.fromCharCode()** para manipular os caracteres.
   - **Buffer.from() e toString('hex')** para cifrar a senha.

## Estrutura do Projeto

O projeto é composto por dois scripts distintos para gerar senhas:

- **semcripto.js**: Gera uma senha simples, sem criptografia.
- **criptografado.js**: Gera uma senha cifrada e exibe no formato hexadecimal.
- **index.html**: Interface web que permite gerar e visualizar as senhas.
- **styles.css**: Estilização da página web.

## Como Funciona

A página HTML possui dois botões:

- **"Gerar Senha Simples"**: Executa `semcripto.js` e exibe a senha gerada sem criptografia.
- **"Gerar Senha Criptografada"**: Executa `criptografado.js` e exibe a senha no formato hexadecimal.

### Tecnologias Utilizadas
- **HTML, CSS, JavaScript**
- **Classe Buffer (Node.js)**
- **Math.random() para gerar caracteres aleatórios**
- **Manipulação de Arrays e Strings**

## Como Executar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-repositorio.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Clique nos botões para gerar as senhas.

## Exemplo de Senha Gerada

- **Senha Simples:** `A1B2C3D4E5!@`
- **Senha Criptografada (hex):** `41624334453233232140`

## Autores

- **Kyoshy**
- **Ygor**

