/*
Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
for (let numero of numbers) { 
    console.log(numero) 
}

Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0
for (let numero of numbers) {
    soma+= numero
}
console.log(soma)

Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0
for (let numero of numbers) {
    soma+= numero
}
console.log(soma / numbers.length)

Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0
for (let numero of numbers) {
    soma+= numero
}
if (soma > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual a 20')
}


Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for (let i = 1; i <= numbers.length; i++) {
    if(numbers[i - 1] > numbers[i]) {
        numbers[i] = numbers[i - 1]
    }
}
console.log(numbers[numbers.length - 1])


Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let odd = 0
for (let numero of numbers) {
    if(numero % 2 === 1) {
        odd++
    }
}
if (odd > 0) {
    console.log(odd)
} else {
    console.log('nenhum valor ímpar encontrado!')
}

Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i - 1] < numbers[i]) {
        numbers[i] = numbers[i - 1]
    }
}
console.log(numbers[numbers.length - 1])


Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let newArray = []
for (let i = 1; i <= 25; i++) {
    newArray.push(i)
}
console.log(newArray)

*/
/*

Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i] / 2)
}
*/

