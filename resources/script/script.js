// Revisão 
// String
var nome = "Kauã"
var cidade = "Rio branco"
var instituicao = "SENAI"
// Number

let idade = 21
let altura = 1.81
let dinheiro = 9.99

// Booleanos (verdadeiro e falso)
let condicao = true 
let maiorDeIdade = false

// Comando de saída de dados 
console.log("hello world!")

// Aritimética 

// Soma +, Subtração - , divisão / , multiplicação *

let a = 5;
let b = 27;
let resultado = 0;
let number  = a + b
console.log()
// Soma de 2 números inteiros positivos
let n1 = 10;
let n2 = 5;
console.log(n1 + n2);

// Divisão de 2 números inteiros positivos
console.log(n1 / n2);

// Subtração de 2 números reais positivos
let n3 = 10.5;
let n4 = 5.5;
console.log(n3 - n4);

// Multiplicação de 2 números inteiros negativos
let n5 = -2;
let n6 = -3;
console.log(n5 * n6);


// Média das notas

// Roberto
let r1 = 10;
let r2 = 7;
let r3 = 3;
let r4 = 4;
let mediaRoberto = (r1 + r2 + r3 + r4) / 4;
console.log("Roberto:", mediaRoberto);


// Ana
let a1 = 5;
let a2 = 8;
let a3 = 9;
let a4 = 10;
let mediaAna = (a1 + a2 + a3 + a4) / 4;
console.log("Ana:", mediaAna);

// João
let j1 = 7;
let j2 = 7;
let j3 = 7;
let j4 = 8;
let mediaJoao = (j1 + j2 + j3 + j4) / 4;
console.log("João:", mediaJoao);

// Neymar
let ne1 = 8;
let ne2 = 5;
let ne3 = 8;
let ne4 = 10;
let mediaNeymar = (ne1 + ne2 + ne3 + ne4) / 4;
console.log("Neymar:", mediaNeymar);

// Realize os seguintes cálculos

// A
console.log(5 * 10 / (4 + 5));

// B
console.log(10 - 10 * 7 - 2 / (43 - 17));

// operadores lógicos 

// = significa recebe
// == igual 
//=== estritamente igual (valor e tipo)
let num1 = 10
let num2 = "10"

let comparacao = num1 == num2
console.log(comparacao)

let num3 = 5
let num4 = 5

let comparacao2 = num1 === num2
console.log(comparacao2)

let conjunto = false && false

let idadeAluno = 18

if (idadeAluno >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}