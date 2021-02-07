const { validateInputData } = require('../src/core');


describe('validateInputData', () => {
    it('send empty shopping list, returns error', () => {
        const shoppingList = [];
        const emailList = ['user1@gmail.com', 'user2@gmail.com'];

        expect(() => validateInputData(shoppingList, emailList))
            .toThrow('Lists should not be empty');
    });
    it('send empty e-mail list, returns error', () => {
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
        const emailList = [];

        expect(() => validateInputData(shoppingList, emailList))
            .toThrow('Lists should not be empty');
    });
    it('send duplicate e-mails, returns error', () => {        
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
        const emailList = ['user1@gmail.com', 'user1@gmail.com'];

        expect(() => validateInputData(shoppingList, emailList))
            .toThrow('There are duplicate e-mails');
    });
    it('send shopping list and emails list, no throw error', () => {
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
        const emailList = [
            'user1@gmail.com',
            'user2@gmail.com',
        ];

        expect(validateInputData(shoppingList, emailList)).toBe();
    });
});
