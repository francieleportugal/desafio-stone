const { execute } = require('../src/interface');


describe('execute', () => {
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
        expect(execute(shoppingList, emailList)).toStrictEqual(new Map([
            ['user1@gmail.com', 862794],
            ['user2@gmail.com', 862794],
            ['user3@gmail.com', 862794],
            ['user4@gmail.com', 862794],
            ['user5@gmail.com', 862794],
            ['user6@gmail.com', 862794],
            ['user7@gmail.com', 862793],
            ['user8@gmail.com', 862793],
            ['user9@gmail.com', 862793]
        ]));
    });
});
