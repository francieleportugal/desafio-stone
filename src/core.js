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

const coreInterface = (shoppingList, emailList) => {
    if (!shoppingList.length || !emailList.length) {
        throw new Error('Lists should not be empty');
    }

    const accumulatedVAlue = extractedAccumulatedValue(shoppingList);
    const resultByPerson = divideMoneyEqually(accumulatedVAlue, emailList.length);
    const data = formatData(emailList, resultByPerson);

    return data;
};

module.exports = {
    extractedAccumulatedValue,
    divideMoneyEqually,
    formatData,
    coreInterface,
};