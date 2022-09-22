// Concatenação

const nome = 'Lucas';
const sobreNome = 'Mendes';
let idade = 20;
let cidade = 'São Paulo';
let estado = 'SP';

// Meu nome é Lucas Mendes, tenho 20 anos e moro atualmente na cidade de São Paulo - SP

let mensagem = 'Meu nome é '+nome+' '+sobreNome+ ', tenho ' +idade+  ' anos e moro atualmente na cidade de ' +cidade+ '-' +estado+'.'; 
// console.log(mensagem);
console.log('-----------------------------')

// Método template literal/strig

let mensagem2 = `Meu nome é <b class="teste"> ${nome} ${sobreNome} </b>, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}.`;
console.log(mensagem2);