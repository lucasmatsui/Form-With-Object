const objTeste = {
  prop01: 42,
  prop02: 'Verde',
  func01: function() {
    return this.prop01;
  },
  func02: function() {
    return this.prop02;
  }
}

//console.log(objTeste.func02());

const objTesteArrow = {
  prop01: 42,
  prop02: 'Azul',
  func01: () => objTesteArrow.prop01,
  func02: () => objTesteArrow.prop02
}

//console.log(objTesteArrow.func02());

const objCalculo = {
  numero: 2,
  multiplicar: function(num) {
    return this.numero * num;
  },
  novoMultiplicar: (num) => objCalculo.numero * num,
  novoProduto(num) {
    return this.numero * num;
  }
}

console.log(objCalculo.numero);
console.log(objCalculo.multiplicar(10));
console.log(objCalculo.novoMultiplicar(10));
console.log(objCalculo.novoProduto(10));







