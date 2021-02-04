const divide = require('../src/divide');

describe('divide', () => {
    it('divide 100 by 3, returns array by person with different values', () => {
        expect(divide(100, 3)).toStrictEqual([33, 33, 34]);
    });
    it('divide 100 by 7, returns array by person with different values', () => {
        expect(divide(100, 7)).toStrictEqual([14, 14, 14, 14, 14, 15, 15]);
    });
    it('divide 100 by 13, returns array by person with different values', () => {
        expect(divide(100, 13)).toStrictEqual([7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8]);
    });
});
