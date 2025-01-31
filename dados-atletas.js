class Atleta {
    constructor(nome, idade, peso, altura, notas){
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }

    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
          return "Intanfil";
        }else if(this.idade >= 12 && this.idade <= 13){
          return "Juvenil";
        }else if(this.idade >= 14 && this.idade <= 15){
          return "Intermediário";
        } else if(this.idade >= 16 && this.idade <= 30){
          return "Adulto"
        }
        return "Sem categoria"
    }
    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura)
        return imc;
    }
    calculaMediaValida(){
        let soma = 0;
        this.notas = this.notas.sort((a, b) => b - a);
        let notasValidas = this.notas.slice(1,4);
            
        notasValidas.forEach(function(nota){
            soma += nota;
        });
        return (soma / notasValidas.length).toFixed(5);
    }
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemNotasAtleta(){
        return this.notas.join(", ");
    }
    obtemCategoria(){
        return this.calculaCategoria();
    }
    obtemIMC(){
        return this.calculaIMC();
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }

    retornoDados(){
        let mensagem = `
        Nome: ${this.obtemNomeAtleta()}
        Idade: ${this.obtemIdadeAtleta()}
        Peso: ${this.obtemPesoAtleta()}
        Altura: ${this.altura}
        Notas: ${this.obtemNotasAtleta()}
        Categoria: ${this.obtemCategoria()}
        IMC: ${this.obtemIMC()}
        Média válida: ${this.obtemMediaValida()}`;
        console.log(mensagem);
        return mensagem;
    }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    atleta.retornoDados();

