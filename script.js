const Pessoa = {
  nome: "",
  sobrenome: "",
  ano: 0,
  criar(e) {
    e.preventDefault();
    if(form.nome.value !== "" && form.sobrenome.value !== "" && 
    form.ano.value !== "") {

      this.nome = form.nome.value;
      this.sobrenome = form.sobrenome.value;
      this.ano = form.ano.value;

      document.getElementById('msg').innerHTML = "Criado com sucesso";

      setTimeout(() => {
        document.getElementById('msg').innerHTML = "";
      }, 2000);

      form.nome.value = "";
      form.sobrenome.value = "";
      form.ano.value = "";
    
    } else {
      document.getElementById('msg').innerHTML = "Algum campo está vázio !";
    }
  },
  exibir(e) {
    e.preventDefault();
    
    const ul= `
      <li>${this.nome}</li>
      <li>${this.sobrenome}</li>
      <li>${this.ano}</li>
    `;

    document.getElementById('msg').innerHTML = "";
    document.getElementById('result').innerHTML = ul;
  }
}

