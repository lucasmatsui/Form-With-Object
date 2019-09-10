class Pessoa {

  constructor() {
    this.nome = "";
    this.sobrenome = "";
    this.anos = 0;
  }
  
  get getNome() {
    return this.nome;
  }


  set setNome(novoNome) {
    this.nome = novoNome;
  }

}

let pessoa = new Pessoa();
pessoa.setNome = "Moraes";
console.log(pessoa.getNome);


