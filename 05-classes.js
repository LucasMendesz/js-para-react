class Pessoa {
    // Propriedades
    nome = 'sem nome';
    genero = 'não informado';
    idade;

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }

    mostraNome(){
        console.log( this.nome );
    }

    mostraIdade(){

        if(this.idade >= 18){
         return 'Maior';
        } else {
          return 'Menor';
        }  
    } 
      // if/else ternário
        // return this.idade >= 18 ? 'É maior' : 'É menor';
}

class Aluno extends Pessoa {
    // Propriedades
    matricula;
    curso;

    // Métodos
    mostradados(){
        console.log(this.matricula);
        console.log(this.curso);
        //console.log(this.idade);
    

        // Métodos da super classe
        this.mostraNome;
        this.mostraGenero;
        //this.mostraIdade;
    }
};

/* Criando objetos/instâncias */
// let umaPessoa = new Pessoa;
// umaPessoa.nome = 'Tiago';
// umaPessoa.genero = 'masculino';
// console.log(umaPessoa);

// let outraPessoa = new Pessoa;
// outraPessoa.nome = 'Lucas';
// console.log(outraPessoa);

// Objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Palloma';
aluno.genero = 'Feminino';
aluno.matricula = '1213232';
aluno.curso = 'Gastronomia';
aluno.idade = 18;
console.log(aluno);
console.log(aluno.mostraIdade());
aluno.mostraIdade();
// console.log(aluno);





