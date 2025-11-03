async function carregarCatalogo() {
  try {
    const resposta = await fetch('data/products.json');
    const produtos = await resposta.json();

    const catalogo = document.querySelector('.catalogo');
    catalogo.innerHTML = '';

    produtos.forEach(produto => {
      const item = document.createElement('div');
      item.classList.add('produto');
      item.innerHTML = `
        <img src="images/${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <p><strong>R$ ${produto.preco}</strong></p>
      `;
      catalogo.appendChild(item);
    });
  } catch (erro) {
    console.error('Erro ao carregar produtos:', erro);
  }
}

carregarCatalogo();
