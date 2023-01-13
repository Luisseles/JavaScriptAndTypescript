const numero = Number (prompt ('Digite um número: '));
const numeroTitle = document.getElementById('numero-title');
const texto = document.getElementById('texto');

numeroTitle.innerHTML = numero;
texto.innerHTML = `<p>Seu número - 2 é : ${numero - 2}</p>`;