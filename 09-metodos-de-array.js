// 09-metodos-de-array.js

/* map (mapeia, transformar em outra coisa)
passa pelos elementos de um array e realiza operações neles
através de uma função (callback) gerando um novo array. */


const numeros = [20,22,40,46,50];

// const numerosDobrados = numeros.map( function(numero) 
// {
//     return numero * 2;
// });

// COM SINTAXE ARROW FUNCTION
// const numerosDobrados = numeros.map( numero => numero * 2 );

// Opção  3 criando uma função e chamando ela no map()
const numerosDobrados = numeros.map(dobra);
function dobra(valor){
    return valor * 2;
}
console.log(numeros); // original
console.log(numerosDobrados); // transformado/mapeado
console.log('=========================================================');


// Exercício 1
const nomes = ['Lucas', 'José', 'Francisco', 'Marivalda'];
const nomes2 = nomes.map( nome => nome.toUpperCase());
console.log(nomes);
console.log(nomes2);
console.log('=========================================================');


/*Filter (filtra/remove)
retorna um array de valores de acordo com o resultado do filtro aplicado. */
console.log('==========================FILTER===============================');
const vendas = [1500,2000,10_000, 1000,500];
const meta = 1000;
const vendasAcimaDaMeta = vendas.filter( venda => venda > meta);
console.log(vendas);
console.log(vendasAcimaDaMeta);

const alunos = ['Luisa', 'Fernanda', 'Josefina', 'Cleide', 'Francisca', 'Marivalda', 'Marcelo'];
const resultados = alunos.filter( aluno => {
    // if(aluno.charAt(0) === 'M'){
        if(aluno.startsWith('m')){
       return aluno;
    }
})

// Versão simplificada
const result = alunos.filter( aluno => aluno.startsWith('M') ?? aluno);
console.log(alunos);
console.log(resultados);
console.log(result);
console.log('=========================================================');

const cursos = [
    {id: 1, titulo: 'HTML e CSS3', categoria: 'Front-End', preco: 500},
    {id: 2, titulo: 'JS e React', categoria: 'Front-End', preco: 800},
    {id: 3, titulo: 'React Native', categoria: 'Mobile', preco: 1000},
    {id: 4, titulo: 'Photoshop', categoria: 'Design', preco: 400},
    {id: 5, titulo: 'PHP e MySQL', categoria: 'Back-End', preco: 600},
    {id: 6, titulo: 'Flutter', categoria: 'Mobile', preco: 900},
];
const cursosFront = cursos.filter(curso => curso.categoria === 'Mobile');
console.log(cursos);
console.log(cursosFront);
console.log('=========================================================');

// const titulo = cursos.map(curso => curso.titulo);
// console.log(titulo);

const titulosFront = cursos.filter( curso => curso.categoria === 'Front-End')
                           .map(curso => curso.titulo);
console.log(titulosFront);
console.log('=========================================================');


/* reduce (reduzir a um único valor/resultado) */
console.log('=========================REDUCE===============================');

const valores = [10,10,10,10,10];

const soma = valores.reduce( (acumulador, valor) => 
{
    return acumulador + valor;
}, 0); // 0 -> Ponto de partida para o reduce
console.log(valores);
console.log(soma);

console.log('=======================FILTER e REDUCE=================================');

const somaCursosMobile = cursos
                               .filter(curso => curso.categoria == 'Mobile')
                               .reduce( (acumulador, curso) => {
                                     return acumulador + curso.preco
                               }, 0) // 0 -> Ponto de partida para o reduce
console.log(somaCursosMobile);
