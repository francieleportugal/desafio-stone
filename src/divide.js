const divide = (total, amountPeople) => {
    const individualValue = Math.trunc(total / amountPeople);
    const resultByPerson = Array(amountPeople).fill(individualValue);

    let remainingValue = total - (individualValue * amountPeople);

    if (remainingValue) {
        for (i = amountPeople - 1; remainingValue > 0; i--) {
            resultByPerson[i] += 1;
            remainingValue -= 1;
        }
    }

    return resultByPerson;
};

module.exports = divide;
