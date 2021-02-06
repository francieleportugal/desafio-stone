const csv = require('csv-parser');
const fs = require('fs');
const { coreInterface } = require('./core');

const getEmailList = () => new Promise(resolve => {
    let emailList = [];
    fs.createReadStream('data/email_list.csv')
        .pipe(csv(['email']))
        .on('data', (row) => emailList.push(row['email']))
        .on('end', () => resolve(emailList));
});

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

const executeWithDataInputByCsvFile = async () => {
    const emailList = await getEmailList();
    const shoppingList = await getShoppingList();

    return coreInterface(shoppingList, emailList);
};

const execute = (shoppingList, emailList) => coreInterface(shoppingList, emailList);

module.exports = {
    executeWithDataInputByCsvFile,
    execute,
};
