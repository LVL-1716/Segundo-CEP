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

  // Ao carregar a página
window.onload = function() {
  const dadosSalvos = localStorage.getItem('salvarDados');
  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);
    document.getElementById('cep').value = dados.cep || '';
    document.getElementById('rua').value = dados.rua || '';
    document.getElementById('bairro').value = dados.bairro || '';
    document.getElementById('cidade').value = dados.cidade || '';
    document.getElementById('uf').value = dados.uf || '';
  }
};