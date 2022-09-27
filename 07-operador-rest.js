/* 07-operador-rest.js

Usando o ... como operador rest ()
Na prática, usamos para mesclar uma lista de argumentos/parâmetros
para uma função.*/

//function ordernar(...parametros) // rest
const ordernar = (...parametros) => parametros.sort(); //sort(); é uma função que serve para classificar em ordem alfabética

console.log(ordernar('Rush', 'Pink Floyd', 'Dream Theater', 'Slayer', 'Night'));
console.log('=========================================================');

// ARRAY
const cursos = ['HTML', 'CSS', 'JS', 'PHP']; 
console.log(ordernar('Lucas', 'Felipe', 'Antônio'));
console.log( ordernar(...cursos) ) // spread
console.log('=========================================================');


// function soma(...valores) // rest
const soma  = (...valores) => 
{
    let total = 0;

    for(let valor of valores){
        total += valor;
    }
    return total;
};
console.log(soma(10,10));
console.log(soma(10,10,50,50,50,50,50,50,50,50,50,50,50,50,50,50));

                  