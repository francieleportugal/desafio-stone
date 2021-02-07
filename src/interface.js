const csv = require('csv-parser');
const fs = require('fs');
const { coreInterface } = require('./core');

/**
 * Lê arquivo que contém a lista de e-mails. 
 * @return {Promise<string[]>} Retorna uma promise que resolve a lista de e-mails.  
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
 * @return {Promise<Object[]>} Retorna uma promise que resolve a lista de compras com as chaves: name, price e amount.
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
 * Lê os arquivos CSV para obter os dados de entrada e executa a lógica do core.
 * Responsável pela comunicação entre o main e o core.  
 * @return {Promise<Map>} Retorna uma promise com o mapa dos resultados 
 * (valor que cada pessoa deve pagar).
 */
const executeWithDataInputByCsvFile = async () => {
    const shoppingList = await getShoppingList();
    const emailList = await getEmailList();

    return coreInterface(shoppingList, emailList);
};

/**
 * Recebe os dados de entrada e executa a lógica do core.
 * Responsável pela comunicação entre o main e o core.
 * @param {String[]} emailList - Lista de e-mails
 * @param {int[]} resultByPerson - Lista com o valor que cada pessoa deve pagar
 * @return {Promise<Map>} Retorna uma promise com o mapa dos resultados 
 * (valor que cada pessoa deve pagar).
 */
const execute = (shoppingList, emailList) => coreInterface(shoppingList, emailList);

module.exports = {
    executeWithDataInputByCsvFile,
    execute,
};
