const calculo = function(valor) {
  return valor * 3;
}

const calc = (valor) => {
  return valor * 3;
}

console.log(calc(2));

const oldWay = function(nome, apelido) {
  return `Meu nome é ${apelido}, ${nome}`;
}

console.log(oldWay('James Bond', 'Bond'));

const newWay = (nome, apelido) => `Meu nome é ${apelido}, ${nome}`;

console.log(newWay('Lucas Kenzo', 'Kenzo'));

