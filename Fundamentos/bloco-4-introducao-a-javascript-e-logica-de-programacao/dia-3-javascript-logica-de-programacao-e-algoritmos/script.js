/* Exercícios lógica de programação e algoritmos. JavaScript dia 4.3.

1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

function square (n) {
    let output = ''
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            output+= '*'
        }
        console.log(output)
        output = ''
    }
}

2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

function triangle (n) {
    let output = ''
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            output+= '*'
        }
        console.log(output)
        output = ''
    }
}

*/

function triangle (n) {
    let output = ''
    for (let i = 0; i < n; i++) {
        output+= '_'
    }
    for (let i = 0; i < n; i++) {
        
    }
    console.log(output)
}