const { execute } = require('./interface');

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

const result = execute(shoppingList, emailList);

console.warn('result: ', result);

return result;
