const { coreInterface } = require('../src/core');


describe('coreInterface', () => {
    it('send shopping list and emails list, returns values', () => {
        const shoppingList = [
            {
                name: 'item 1',
                price: 1079430,
                amount: 3,
            },
            {
                name: 'item 2',
                price: 1508951,
                amount: 3,
            },
        ];

        expect(coreInterface(shoppingList, 9))
            .toStrictEqual([
                862794, 862794, 862794, 862794,
                862794, 862794, 862793, 862793, 862793,
            ]);
    });
});
