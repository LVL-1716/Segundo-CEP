// Função para salvar os dados no localStorage
  function salvarDados() {
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;

    // Cria um objeto com os dados dos campos
  const dados = {
    cep: cep,
    rua: rua,
    bairro: bairro,
    cidade: cidade,
    uf: uf
  };
    
    localStorage.setItem('salvarDados', JSON.stringify(dados));
    alert('Dados salvos com sucesso!');
  }