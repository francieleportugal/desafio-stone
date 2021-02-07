const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

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

const { size } = argv;

if (size && !Number.isInteger(size)) {
    throw new Error('Argument size is not integer.');
}

shoppingListFactory(size);
