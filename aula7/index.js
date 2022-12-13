/*
Luis Henrique tem 24 anos, pesa 60 kg, tem 1.7 de altura e seu IMC é de...?
*/


const nome = 'Luis';
const sobrenome = 'Henrique';
const idade = 24;
const peso = 60;
const altura = 1.70;

let imc = peso / (altura * altura);

console.log(nome + sobrenome + "tem " + idade + " anos, pesa " + peso + "kg, tem" + altura + "de altura e seu IMC é de " + imc);