> Atualizando os produtos <

Para adicionar ou modificar produtos do catálogo:

1. Editar o arquivo "products.json":

- Vá para a pasta "public/data/"
- Abra o arquivo "products.json" em um editor de texto ou VSCode
- Adicione ou modifique os produtos seguindo o formato JSON existente

Exemplo de um produto:

"{
  "id": 1,
  "name": "Nome do Produto",
  "price": 29.90,
  "image": "images/produto1.jpg",
  "description": "Descrição do produto"
}"

2. Adicionar a imagem do produto:

- Salve a imagem na pasta "public/images/"
- No JSON, no campo "image", coloque o nome do arquivo (ex.: "images/nome-da-imagem.jpg")

3. Testar localmente:

- Execute o servidor local para conferir as alterações:

"npx http-server public -p 8080"

Abra no navegador:

"http://localhost:8080"

4. Salvar alterações no Git:

Adicione os arquivos modificados e faça commit:

"git add public/data/products.json public/images/nova-imagem.jpg"
git commit -m "Atualizando produtos"

-Envie para o repositório remoto:

"git push"
