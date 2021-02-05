const { divide } = require('../src/core');

describe('divide', () => {
    it('divide 100 by 3, returns array by person with different values', () => {
        expect(divide(100, 3)).toStrictEqual([34, 33, 33]);
    });
    it('divide 100 by 7, returns array by person with different values', () => {
        expect(divide(100, 7)).toStrictEqual([15, 15, 14, 14, 14, 14, 14]);
    });
    it('divide 100 by 13, returns array by person with different values', () => {
        expect(divide(100, 13)).toStrictEqual([8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7]);
    });
});
