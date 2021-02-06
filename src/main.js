const csv = require('csv-parser');
const fs = require('fs');
const { coreInterface } = require('./core');

const emailList = [];
const shoppingList = [];

((callback) => {
    fs.createReadStream('data/email_list.csv')
        .pipe(csv(['email']))
        .on('data', (row) => emailList.push(row['email']))
        .on('end', () => {
            fs.createReadStream('data/shopping_list.csv')
                .pipe(csv(['name', 'price', 'amount']))
                .on('data', (row) => shoppingList.push({
                    name: row['name'],
                    price: parseInt(row['price'], 10),
                    amount: parseInt(row['amount'], 10)
                }))
                .on('end', () => {
                    const result = coreInterface(shoppingList, emailList);
                    callback(result);
                });
        });
})((result) => {
    console.warn('result: ', result);
})

