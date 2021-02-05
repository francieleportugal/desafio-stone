const { extractedAccumulatedValue } = require('../src/core');

describe('extractedAccumulatedValue', () => {
    it('sum all items, returns value', () => {
        const shoppingList = [
            {
                name: 'item 1',
                price: 100,
                amount: 3,
            },
            {
                name: 'item 2',
                price: 150,
                amount: 3,
            },
        ];
        expect(extractedAccumulatedValue(shoppingList)).toBe(750);
    });

    it('long shopping list with high subtotal, returns value', () => {
        let shoppingList = [];
        const data = [
            {
                name: 'item 1',
                price: 100,
                amount: 3,
            },
            {
                name: 'item 2',
                price: 150,
                amount: 5,
            },
            {
                name: 'item 3',
                price: 2295,
                amount: 3,
            },
            {
                name: 'item 4',
                price: 5710,
                amount: 10,
            },
            {
                name: 'item 5',
                price: 7101,
                amount: 2,
            },
            {
                name: 'item 6',
                price: 28930,
                amount: 9,
            },
            {
                name: 'item 7',
                price: 126000,
                amount: 2,
            },
            {
                name: 'item 8',
                price: 14789200,
                amount: 4,
            },
            {
                name: 'item 9',
                price: 954312500,
                amount: 7,
            },
            {
                name: 'item 10',
                price: 50,
                amount: 12,
            },
        ];

        for(i = 0; i < 100; i++) {
            shoppingList = shoppingList.concat(data);
        }

        expect(extractedAccumulatedValue(shoppingList)).toBe(673993650700);
    });    
});
