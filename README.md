# desafio-stone

TO DO

- bigint
- outras validações?
- eslint
- lidar com erro de leitura de arquivo
- cobertura de teste jest
- adicionar scripts para rodar mains

## Instalação

Instalar as dependências:
```
npm install
```

## Rodar projeto

### Para rodar o projeto inserindo os dados de entrada hard coded:
- Acesse _src/main.js_.
- Edite as listas shoppingList e emailList. Elas possuem um valor exemplo.
- Execute: 

```
node src/main.js
```

### Para rodar o projeto inserindo os dados de entrada através de arquivos CSV:

Na pasta _data_, existem dois arquivos csv com valores de exemplo.

- _data/email_list.csv_: Lista de e-mails.
- _data/shopping_list.csv_: Lista de compras. Cada linha possui o nome do item, preço e quantidade respectivamente.

Considerando as informações anteriores:

- Edite os arquivos _email_list.csv_ e _shopping_list.csv_. Não é necessário inserir header.
- Execute:

```
node src/mainWithDataInputByCsvFile.js
```

## Testes

Rodar testes:
```
npm run test
```

## Documentação do código

Gerar documentação:
```
npm run jsdoc
```
Para acessar a documentação web, abra _out/index.html_.

## Arquitetura

Arquitetura Clean.

## Estrutura de pastas

```
desafio-stone
│   README.md
│   package.json    
│   package-lock.json    
│   jsdoc.json    
│   .gitignore    
│
└───data
|
└───src
|   │   core.js
|   │   interface.js
|   │   interface.js
|   │   main.js
|   │   mainWithDataInputByCsvFile.js
|
└───tests
```
