const csv = require('csv-parser');
const fs = require('fs');
const { coreInterface } = require('./core');

/**
 * Lê arquivo que contém a lista de e-mails. 
 * @return {Promise<string[]>} Retorna uma promise resolvida com os resultados.  
 */
const getEmailList = () => new Promise(resolve => {
    let emailList = [];
    fs.createReadStream('data/email_list.csv')
        .pipe(csv(['email']))
        .on('data', (row) => emailList.push(row['email']))
        .on('end', () => resolve(emailList));
});

/**
 * Ler arquivo que contém a lista de compras. 
 * @return {Promise<Object[]>} a Retorna uma promise resolvida com os resultados com as chaves: name, price e amount.
 */
const getShoppingList = () => new Promise(resolve => {
    let shoppingList = [];
    fs.createReadStream('data/shopping_list.csv')
        .pipe(csv(['name', 'price', 'amount']))
        .on('data', (row) => shoppingList.push({
            name: row['name'],
            price: parseInt(row['price'], 10),
            amount: parseInt(row['amount'], 10)
        }))
        .on('end', () => resolve(shoppingList));
});

/**
 * Formata a saída dos dados.
 * @param {String[]} emailList - Lista de e-mails
 * @param {int[]} resultByPerson - Lista com o valor que cada pessoa deve pagar
 * @return {Map} Retorna um mapa, onde a chave é o e-mail e valor será quanto a pessoa deve pagar.
 */
const formatData = (emailList, resultByPerson) => {
    /**
     * Itera a lista de e-mails, onde a cada iteração é retornado um elemento do mapa com a chave (e-mail)
     * e o valor, que corresponde ao valor que preenche a mesma posição na lista de resultados por pessoa
     */
    return new Map(emailList.map((email, index) => (
        [email, resultByPerson[index]]
    )));
};

/**
 * Valida se há e-mails duplicados na lista.
 * @param {String[]} emailList - Lista de e-mails
 * @return {Boolean} Indica se há e-mails duplicados.
 */
const hasDuplicates = (emailList) => {
    return new Set(emailList).size !== emailList.length; 
};

/**
 * Valida dados de entrada.
 * @param {Object[]} shoppingList - Lista de compras
 * @param {string} shoppingList.name - Nome do item
 * @param {int} shoppingList.price - Preço do item em centavos
 * @param {int} shoppingList.amount - Quantidade comprada
 * @param {String[]} emailList - Lista de e-mails
 * @return {void}
 * @throws Será lançado um erro se qualquer lista estiver vazia.
 * @throws Será lançado um erro se houver e-mails duplicados.
 */
const validateInputData = (shoppingList, emailList) => {
    // Valida se as listas de entrada não estão vazias. Caso estejam é emitido um erro
    if (!shoppingList.length || !emailList.length) {
        throw new Error('Lists should not be empty');
    }

    // Valida se há e-mails duplicados
    if (hasDuplicates(emailList)) {
        throw new Error('There are duplicate emails');
    }
};

/**
 * Lê os arquivos CSV para obter os dados de entrada e executa a lógica do core.
 * Responsável pela comunicação entre o main e o core.  
 * @return {Promise<Map>} Retorna uma promise com o mapa dos resultados 
 * (valor que cada pessoa deve pagar).
 */
const executeWithDataInputByCsvFile = async () => {
    const shoppingList = await getShoppingList();
    const emailList = await getEmailList();

    validateInputData(shoppingList, emailList);
    const result = coreInterface(shoppingList, emailList.length);

    return formatData(emailList, result);
};

/**
 * Recebe os dados de entrada e executa a lógica do core.
 * Responsável pela comunicação entre o main e o core.
 * @param {String[]} emailList - Lista de e-mails
 * @param {Object[]} shoppingList - Lista de compras
 * @param {string} shoppingList.name - Nome do item
 * @param {int} shoppingList.price - Preço do item em centavos
 * @param {int} shoppingList.amount - Quantidade comprada   
 * @return {Map} Retorna um mapa dos resultados
 * (valor que cada pessoa deve pagar).
 */
const execute = (shoppingList, emailList) => {
    validateInputData(shoppingList, emailList);
    const result = coreInterface(shoppingList, emailList.length);

    return formatData(emailList, result);
};

module.exports = {
    formatData,
    executeWithDataInputByCsvFile,
    execute,
};
