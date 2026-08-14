let qtd = prompt('digite um número inteiro maior que zero: ');
let nome = prompt('digite seu nome: ');
let div = document.getElementById('nome');

for(let i = 0; i < qtd; i++) {
    let novoP = document.createElement('p');
    novoP.textContent = nome;
    div.appendChild(novoP);
}
