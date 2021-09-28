// EXISTE 7 TIPOS DE DADOS
// Todos são primitivos excetos ps objetos.
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
// Primitivos são dados imutáveis.

// VERIFICAR TIPO DE DADO
var nome = 'André';
console.log(typeof nome);
// retorna string


// STRING
// Você pode somar uma string e assim concatenar as palavras.
var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;


// Você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);


// ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido
// Não necessariamente precisamos atribuir valores a uma variável

// TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; 
console.log(frase2);// Utilizando Template String
// Você deve passar expressões / variáveis dentro de ${}


// EXERCÍCIO
// Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.

// Declare uma variável contendo uma string
var animal = "Sapo";
console.log(animal);

// Declare uma variável contendo um número dentro de uma string
var numeroDeAnimais = "5";
console.log(numeroDeAnimais);

// Declare uma variável com a sua idade
var idade = 20;
console.log(idade);

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var nome = "Gabriel";
var sobreNome = "Marques";
var nomeCompleto = `Meu é ${nome} ${sobreNome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
