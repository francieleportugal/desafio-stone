const { executeWithDataInputByCsvFile } = require('../src/interface');


describe('executeWithDataInputByCsvFile', () => {
    it('reads data in csv, returns values', async() => {
        expect(await executeWithDataInputByCsvFile()).toBeDefined();
    });
});
