/* 08-desestrutucao.js
Desestruturação (Destructuring)
Extrair dados facilmente de um array ou objeto 
e armazená-los em variáveis/constantes.*/

// Usando destruturação em array
const [a, b] = ['Lucas', 'Matheus'];
console.log(a);
console.log(b);
console.log('=========================================================');

const alunos = ['Adriel', 'Palloma', 'Antônio'];
const [adriel, palloma, antonio] = alunos;
console.log(adriel);
console.log(palloma);
console.log(antonio);
console.log('=========================================================');

const unidades = ['Penha', 'Tatuapé', 'Itaquera', 'São Miguel Paulista'];
const [penha, tatuape, , smp] = unidades; // Pulando Itaquera
console.log(penha);
console.log(tatuape);
console.log(smp);
console.log('=========================================================');

// Usando destruturação em objetos

const { nome, cidade } = {nome: 'José', idade: 20, cidade: 'São Paulo'};
console.log(nome);
console.log(cidade);
console.log('=========================================================');

const dados = {
    nome: 'Francisco',
    curso: 'JavaScript',
    nascimento: '12/12/1950'
}
/* Definindo um alias (apelido) para nome */
const { nome: aluno, curso} = dados;
console.log(aluno);
console.log(curso);