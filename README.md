# Desafio-conecta
Criação de landing page ficticia, representada através da ferramenta de layout Figma

## Deploy
Site foi deployado no github pages, para facilitar a visualização.
([Link](https://taiaiaii.github.io/desafio-conecta/)) 


## Como Rodar

execute os passos abaixo:

```
git clone git@github.com:Taiaiaii/desafio-conecta.git
```
```
cd desafio-conecta
```
acesse o arquivo index.html pelo brownser para teste em ambiente local

## Detalhamento do projeto

As imagens e cores do layout foram baixadas e copiadas do figma.
Quanto as fontes, não encontrei a mesma do modelo (Artigo), utilizei uma aproximada (Suez One - serifada) tirada do [Google-Fonts](https://fonts.google.com/)

O projeto foi criado no intuito de ser o mais responsívo possível. Confirgurado para versões: mobile, tablet e web; e em alguns pontos para telas maiores que 1440px. Utilizado o conceito de mobile-first.

Os arquivos de JS estão modularizados com o intuito de deixar a página mais performática. É carregado apenas um script (app.js) no HTML utilizando o atributo 'type=module', e no app.js são importados os demais scripts 


### Header
- Plano de fundo - imagem carregada através de css

- botão com comportamento de animar a imagem principal criado com JS + CSS

### Seção 1: produtos

Os botões dos produtos tem comportamento expandir a caixa das imagens, simulando uma apresentação de maiores informações do produto. Comportamento criado com js e css


### Seção 2: demonstrativos

Aqui temos 3 caixas que em versão mobile ficam uma em cima da outra, porém em telas maiores tem uma disposição específica. Para essa disposição utilizei o recurso CSS-grid em telas a partir de 768px.

Duas caixas contém imagens e outra simula depoimentos de clientes. Para alternar diversos depoimentos criei um carrossel propio através de js.

### Seção 3: experimentar

Aqui o modelo do figma contem:

- versão mobile: uma caixa contendo uma img, um título e um botão
- telas maiores: uma caixa com imagens  dispostas de diferentes maneiras, um título e um botão no centro.
 Nesse caso precisei configurar primeiro as telas maiores, e na versão mobile utilizei o "display: none" para desaparecer com as duas imagens sobressalentes. Para posicionar as imagens utilizei grid e position absolute. 
Foi preciso também utilizar o z-index , pois no modelo uma parte das imagens fica coberta em relação ao footer. 

### Footer:

Plano de fundo criado com img carregada através do css.
Composto por um título com icones de redes sociais, um formulário de contato, copyright e informe de projeto.

- na versão mobile e tablet ficam dispostos em sequencia
- em telas maiores, o título com os icones fica ao lado do formulário e as demais informações em baixo, dispostos separadamente. Para criar esse efeito utilizei o css-grid em telas a partir de 1024px
- validação de formulário - comportamento criado com JS: campos obrigatórios, quando não preenchidos dispara mensagens e destaca os campos. Botão enviar dispara mensagem de sucesso quando os todos os campos estão preenchidos.













