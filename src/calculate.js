const calculate = (shoppingList) => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + (currentValue.amount * currentValue.price);
    };

    return shoppingList.reduce(reducer, 0);
};

module.exports = calculate;
