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
        const emailList = [
            'user1@gmail.com',
            'user2@gmail.com',
            'user3@gmail.com',
            'user4@gmail.com',
            'user5@gmail.com',
            'user6@gmail.com',
            'user7@gmail.com',
            'user8@gmail.com',
            'user9@gmail.com',
        ];

        expect(coreInterface(shoppingList, emailList))
            .toStrictEqual([
                862794, 862794, 862794, 862794,
                862794, 862794, 862793, 862793, 862793,
            ]);
    });
    it('send empty shopping list and emails list, returns values', () => {
        const shoppingList = [];
        const emailList = ['user1@gmail.com', 'user2@gmail.com'];

        expect(() => coreInterface(shoppingList, emailList))
            .toThrow('Lists should not be empty');
    });
    it('send empty shopping list and emails list, returns values', () => {        
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

        expect(() => coreInterface(shoppingList, emailList))
            .toThrow('There are duplicate emails');
    });
});
