/* Formas de trabalhar com funções */

// Sintaxe tradicional

function nomeDaFuncoes(){
   console.log('Função de sintaxe tradicional...');
};

// Sintaxe de função anônima

var outraFuncao = function(){
    console.log('Outra forma de declara função...');
};

// chamadas de função
nomeDaFuncoes();
outraFuncao();

console.log('---------------------------------------')

/* 1) Crie uma função que receba dois valores númericos, calcule a diferença entre eles e retorne o resultado para uma variável externa

   2) Mostre no console o resultado.*/



function valores(um, dois) {
//   let resultado = um - dois;
//   return resultado;

// Opção 1 (refatorada) 
  return um - dois;

// resultado = um - dois;
}
let resultado = valores(10,5);
console.log(resultado);
console.log('--------------------------------------------')

/* Arrow Function (função "seta/flecha")
Possibilita diversas sintaxes, e até simplificação.*/
const exemplo01 = () => 
{
    console.log('Uma arrow function qualquer...');
};
 exemplo01();
console.log('--------------------------------------------')

// const ola = nome => 
// { // Podemos omitir os parênteses no caso de um 1 param.
//    console.log('Olá' + nome);
// };
console.log('--------------------------------------------')

// Podemos omitir as {} no caso de uma única instrução. 
const ola = nome => console.log('Olá ' +nome);
ola('Lucas');
console.log('--------------------------------------------')

// const metade = (valor) => {
//     return valor / 2;
// }

// Arrow Function com retorno IMPLÍCITO
const metade = valor =>  valor / 2;
console.log( metade(100) );
console.log('--------------------------------------------')

// const multiplicaValores = (valor, fator) => 
// {
//     return valor * fator;
// };

// Parâmetro com valor padrão (fator = 2)
const multiplicaValores = (valor, fator = 2) => valor * fator;
console.log( multiplicaValores(10,3) );
console.log( multiplicaValores(50) );
console.log('--------------------------------------------')

/* Monte uma arrow function que receba um nome de uma pessoa e a converta para letras maiúsculas.

- Chame a função 3x (passando nome diferentes) e exibindo no console os resultados.*/

const nomeDeUmaPessoa = nome => nome.toUpperCase();

console.log(nomeDeUmaPessoa('Lucas '));
console.log(nomeDeUmaPessoa('Thiago '));
console.log(nomeDeUmaPessoa('Felipe '));
