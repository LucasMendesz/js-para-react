// Usando o ... como operador spread(espalhar)
// Na prática, copiamos o conteúdo de um array (bandas) para dentro de outro (maisBandas).
// IMUTABILIDADE (não muda)

const bandas = ['Rush', 'Dream Theater', 'Slayer', 'Black Sabbath'];
const maisBandas = [...bandas,'Van Halen', 'Deep Purple'];
console.log(maisBandas);
console.log('======================================================')

// Spread com objeto

const dados = {
    nome: 'Palloma',
    idade: 21
};

const novoDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP',
    idade: 30 // sobrescrevendo o valor somente da propriedade idade
};
console.log(novoDados); // novo objeto contendo os dados do anterior também
console.log('idade atualizada: ' + novoDados.idade);