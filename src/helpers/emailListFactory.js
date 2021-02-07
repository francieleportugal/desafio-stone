const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const emailListFactory = (size = 100) => {
    const data = [];
    const csvWriter = createCsvWriter({
        path: 'data/email_list.csv',
        header: ['email'],
    });

    for (i = 0; i < size; i++) {
        data.push({ email: faker.internet.email() });
    }

    csvWriter
        .writeRecords(data)
        .then(()=> console.log('The CSV file was written successfully'));
};

emailListFactory();
