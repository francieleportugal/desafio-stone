const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const shoppingListFactory = (size = 100) => {
    const data = [];
    const csvWriter = createCsvWriter({
        path: 'data/shopping_list.csv',
        header: ['name', 'price', 'amount'],
    });

    for (i = 0; i < size; i++) {
        data.push({
            name: faker.commerce.productName(),
            price: faker.random.number(),
            amount: faker.random.number(),
        })
    }

    csvWriter
        .writeRecords(data)
        .then(()=> console.log('The CSV file was written successfully'));
};

shoppingListFactory();
