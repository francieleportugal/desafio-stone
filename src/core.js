const extractedAccumulatedValue = (shoppingList) => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + (currentValue.amount * currentValue.price);
    };

    return shoppingList.reduce(reducer, 0);
};

const divideMoneyEqually = (total, amountPeople) => {
    const individualValue = Math.trunc(total / amountPeople);
    const resultByPerson = Array(amountPeople).fill(individualValue);

    let remainingValue = total % amountPeople;

    for(i = 0; remainingValue != 0; i++) {
        resultByPerson[i] += 1;
        remainingValue -= 1;
    }

    return resultByPerson;
};

const formatData = (emailList, resultByPerson) => {
    return new Map(emailList.map((email, index) => (
        [email, resultByPerson[index]]
    )));
};

module.exports = {
    extractedAccumulatedValue,
    divideMoneyEqually,
    formatData,
};