const { divideMoneyEqually } = require('../src/core');

describe('divideMoneyEqually', () => {
    it('divide 100 by 3, returns map', () => {
        const emailList = ['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com'];

        expect(divideMoneyEqually(100, emailList)).toStrictEqual(new Map([
            ['user1@gmail.com', 34],
            ['user2@gmail.com', 33],
            ['user3@gmail.com', 33]
        ]));
    });
    it('divide 100 by 7, returns map', () => {
        const emailList = [
            'user1@gmail.com',
            'user2@gmail.com',
            'user3@gmail.com',
            'user4@gmail.com',
            'user5@gmail.com',
            'user6@gmail.com',
            'user7@gmail.com'
        ];
        expect(divideMoneyEqually(100, emailList)).toStrictEqual(new Map([
            ['user1@gmail.com', 15],
            ['user2@gmail.com', 15],
            ['user3@gmail.com', 14],
            ['user4@gmail.com', 14],
            ['user5@gmail.com', 14],
            ['user6@gmail.com', 14],
            ['user7@gmail.com', 14]
        ]));
    });
    it('divide 100 by 13, returns map', () => {
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
            'user10@gmail.com',
            'user11@gmail.com',
            'user12@gmail.com',
            'user13@gmail.com',
        ];
        expect(divideMoneyEqually(100, emailList)).toStrictEqual(new Map([
            ['user1@gmail.com', 8],
            ['user2@gmail.com', 8],
            ['user3@gmail.com', 8],
            ['user4@gmail.com', 8],
            ['user5@gmail.com', 8],
            ['user6@gmail.com', 8],
            ['user7@gmail.com', 8],
            ['user8@gmail.com', 8],
            ['user9@gmail.com', 8],
            ['user10@gmail.com', 7],
            ['user11@gmail.com', 7],
            ['user12@gmail.com', 7],
            ['user13@gmail.com', 7]
        ]));
    });
});
