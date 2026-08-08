nome = prompt("digite seu nome completo");
idade = prompt("digite sua idade");
if (idade >= 18)
    alert(`${nome}, você já possui idade para tirar carteira`);
else
    alert(`${nome}, você ainda não possui idade para tirar carteira, ainda faltam ${18-idade} anos`);