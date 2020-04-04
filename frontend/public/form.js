const form = document.querySelector('form#cadastro');
const btn = document.querySelector('button#form');
const nome = document.querySelector('input#nome');
const email = document.querySelector('input#email');
const cidade = document.querySelector('input#cidade');
const estado = document.querySelector('input#estado');
const telefone = document.querySelector('input#telefone');

btn.onclick = function handle(){
    const nomeUser = nome.value.trim();
    const emailUser = email.value.trim();
    const cidadeUser = cidade.value.trim();
    const estadoUser = estado.value.trim();
    const telefoneUser =  telefone.value.trim();

};
    