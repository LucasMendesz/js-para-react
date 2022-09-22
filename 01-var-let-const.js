// Jeito antigo de usar variáveis
// var meuNome = 'Lucas';

// Jeito moderno de usar variáveis
// let meuNome = 'Lucas';

const meuNome = 'Lucas'; // const obriga a inicialização
console.log(meuNome);
console.log('-----------------------------------------');

let idade = 20;
let mensagem; // ESCOPO GLOBAL
if(idade >= 18) {
     mensagem = 'É maior de idade';
} else {
     mensagem = 'É menor de idade!';
}
console.log(mensagem);
// Let e Const: possui escopo de BLOCO quando declarados dentro de blocos (condicionais, loops), e escopo GLOBAL quando declarado fora dos blocos.
// Uma variável/constante em escopo de BLOCO só existe e é acessível DENTRO do bloco em que foi criada.