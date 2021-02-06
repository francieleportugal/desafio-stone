const { executeWithDataInputByCsvFile } = require('./interface');

executeWithDataInputByCsvFile()
    .then(result => {
        console.warn('result: ', result);
        return result;
    });

