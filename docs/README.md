# Look Book

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

O aplicativo foi desenvolvido com o intuito de proporcionar uma experiência personalizada aos clientes, oferecendo duas páginas distintas: "/criar-look" e "/quero-look/{param}". A primeira página, "/criar-look", permite aos usuários criar conjuntos de looks de acordo com suas preferências individuais, proporcionando uma abordagem única e adaptada ao estilo de cada cliente. Já a segunda página, "/quero-look/{param}", oferece aos clientes a oportunidade de visualizar e adquirir os kits previamente selecionados, apresentando-os de forma atrativa e acessível na plataforma VTEX da loja.

Ao acessar a página "/criar-look", os clientes podem explorar uma variedade de opções e combinações, desde roupas até acessórios, criando conjuntos que reflitam sua personalidade e estilo pessoal. Essa funcionalidade permite uma interação dinâmica e envolvente, promovendo um maior engajamento e satisfação dos usuários com a plataforma.

Por meio da página "/quero-look/{param}", os clientes têm acesso direto aos kits previamente montados, simplificando o processo de compra e proporcionando uma experiência de compra mais eficiente e conveniente. Essa abordagem facilita a navegação dos usuários e incentiva a conversão, tornando a jornada do cliente mais fluida e satisfatória.

Com essas duas páginas integradas ao ambiente da loja VTEX, o aplicativo oferece uma solução abrangente para a criação e apresentação de looks personalizados, elevando o nível de personalização e interatividade oferecido aos clientes e contribuindo para o sucesso e diferenciação da loja no mercado.

## Configurações 

1. Crie uma tabela no master data com o Acrônimo `IO` e nome Quantidade dos Produtos, além disso criar os campos listados na tabela abaixo.
2. Adicionando o aplicativo como uma dependência de tema no arquivo manifest.json.
3. Criar a tabela no master data seguindo os elementos logo abaixo.

### Campos da tabela

| Camp         | Type            | Description                                                                                                             | Display Name    |
| ------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------- | 
| `active`     | `boolean`       | Ativar o parâmetro na url quero-look.                                                                       | `Ativar?`     |
| `description`   | `Varchar 750`   | Descrição do Kit Look.     | `Descrição`       |
| `file_desktop`  | `File`   | Imagem Desktop do quero look.                                                                      | `Imagem Desktop`    |
| `file_mobile`  | `File`   | Imagem Desktop do quero look.                                                                      | `Imagem Mobile`    |
| `params_user`  | `Varchar75`   | Parâmetro da url.                                                                      | `Parâmetro do Usuário`    |
| `product_list`  | `Varchar750`   | Lista dos Produtos selecionados.                                                                      | `Lista de Produtos`    |
| `recordID`  | `Varchar750`   | ID para acessar as imagens                                                                      | `Record ID parm`    |


## Customização

**Página Criar Look**

| CSS  |  description |
| ----------- |  ----------- | 
| `search-section-block` | Componente que modela e divide todas as informações da página. |
| `list-result` | Container que apresenta a listagem dos resutados da pesquisa. |
| `input-container` | Container do input. |
| `bottom-content` | Container dos botões e inputs. |
| `n1-search-section` | Corpo principal. |
| `vtex-search-section--search-area` | Seção utilizado para divider a estrutura entre o input e o botão de pesquisa. |
| `vtex-search-section--search-input` | Input utilizado para pesquisa. |
| `vtex-search-section--search-btn` | Botão para pesquisa. |
| `vtex-search-section--search-form` | Form utilizado para enviar os dados ao master data. |
| `vtex-search-section--search-list` | Lista que contêm os produtos gerados da pequisa. |
| `vtex-element-list--product-element` | Elemento do que renderiza os dados do produto. |
| `vtex-element-list--product-element--label` | Label que contêm o input e nome do produto para selecionar. |
| `vtex-element-list--product-element--input` | Input para selecionar o produto. |
| `vtex-element-list--product-element--name` | Span que contêm o nome do produto. |
| `vtex-element-list--product-element--link` | Tag A que redireciona para a PDP do produto. |
| `vtex-element-list--product-element--remove` | Botão para remover o produto da lista. |
| `look-section-body` | Seção que organiza e separa as informações da página. |
| `banner-section` | Container do Banner da página. |
| `banner-hero` | Banner da imagem. |

**Página Quero Look**

| CSS  |  description |
| ----------- |  ----------- | 
| `vtex-add-to-cart-all--btn` | Botão para comprar todos os produtos listados. |
| `vtex-look-banner--container` | Container das imagem, botão de comprar o kit e descrição do kit look. |
| `vtex-look-banner--look-banner` | Banner que vem do master data. |
| `vtex-look-banner--container-description` | Container da descrição. |
| `vtex-look-banner--title-description` | Título da Descrição. |
| `vtex-look-banner--description` | Descrição. |
| `vtex-look-section--products` | Seção que contêm todos os produtos listado pelo cliente. |
| `vtex-look-banner--product-image-container` | Container da imagem do produto. |
| `image-look-book` | Imagem do produto. |
| `vtex-look-banner--product-data-container` | Container das informações dos dados. |
| `name-look-book` | Nome do produto. |
| `price-look-book` | Preço do produto. |
| `sku-look-book` | SKU do produto. |
| `sku-look-book` | SKU do produto. |
| `vtex-look-banner--product-data-container-children` | Classe genêrica para as divs filhos. |
| `n1-look-section` | Corpo principal da página. |
| `look-section-body` | Seção que organiza e separa as informações da página. |
| `banner-section` | Container do Banner da página. |
| `banner-hero` | Banner da imagem. |

*Observação: na pasta styles existe exemplo de como manipular o css*