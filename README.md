# Desafio Stone

## Instalação

Instalar as dependências:
```
npm install
```

## Rodar projeto

### Método 1: Usando REPL

- Importe a função _execute_ do arquivo _src/interface.js_;
- Passe a lista de compras e a lista de e-mails respectivamente.

Observe o exemplo abaixo.

```
franciele@franciele-Inspiron-5566:~/Projects/desafio-stone$ node
Welcome to Node.js v14.4.0.
Type ".help" for more information.
> const shoppingList = [
...             {
...                 name: 'item 1',
...                 price: 25,
...                 amount: 2,
...             },
...             {
...                 name: 'item 2',
...                 price: 50,
...                 amount: 1,
...             },
...         ];
undefined
> const emailList = ['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com'];
undefined
> const { execute } = require('./src/interface');
undefined
> execute(shoppingList, emailList);
Map(3) {
  'user1@gmail.com' => 34,
  'user2@gmail.com' => 33,
  'user3@gmail.com' => 33
}
>
```

### Método 2: Inserindo os dados de entrada hardcoded

- Acesse _src/main.js_.
- Edite as listas shoppingList e emailList. Elas possuem um valor exemplo.
- Execute: 

```
node src/main.js
``` 
### Método 3: Inserindo os dados de entrada através de arquivos CSV

Na pasta _data_, existem dois arquivos csv com valores de exemplo.

- _data/email_list.csv_: Lista de e-mails.
- _data/shopping_list.csv_: Lista de compras. Cada linha possui o nome do item, preço e quantidade respectivamente.

Considerando as informações anteriores:

- Edite os arquivos _email_list.csv_ e _shopping_list.csv_. Não é necessário inserir header.
- Execute:

```
node src/mainWithDataInputByCsvFile.js
```

## Testes unitários

Cada arquivo de teste contém testes para uma função específica.

Rodar testes:
```
npm run test
```
Cobertura dos testes: 100%
```
npm run test-coverage
```

File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |                   
 core.js      |     100 |      100 |     100 |     100 |                   
 interface.js |     100 |      100 |     100 |     100 |                   


## Documentação do código

Gerar documentação:
```
npm run jsdoc
```
Para acessar a documentação web, abra _out/index.html_.

## Arquitetura

Arquitetura Clean, onde o projeto foi separado em duas camadas: "Core" e "Interface". A camada "Core" contém toda a lógica da aplicação e a camada "Interface" gerencia as formas de comunicação com a camada "Core".
