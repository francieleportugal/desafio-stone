const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const emailListFactory = (size = 100) => {
    const data = [];
    const csvWriter = createCsvWriter({
        path: 'data/email_list.csv',
        header: ['email'],
    });

    for (i = 0; i < size; i++) {
        data.push({ email: faker.unique(faker.internet.email) });
    }

    csvWriter
        .writeRecords(data)
        .then(()=> console.log('The CSV file was written successfully'));
};

const { size } = argv;

if (size && !Number.isInteger(size)) {
    throw new Error('Argument size is not integer.');
}

emailListFactory(size);
