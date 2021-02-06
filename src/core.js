/**
 * Multiplica o preço de cada item pela sua quantidade e soma todos os valores.
 * @param {Object[]} shoppingList - Lista de compras
 * @param {string} shoppingList.name - Nome do item
 * @param {int} shoppingList.price - Preço do item em centavos
 * @param {int} shoppingList.amount - Quantidade comprada   
 * @return {int} Retorna o valor em centavos.  
 */
const extractedAccumulatedValue = (shoppingList) => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + (currentValue.amount * currentValue.price);
    };
    
    return shoppingList.reduce(reducer, 0);
};

/**
 * Divide o valor entre a quantidade de pessoas de forma igual.
 * @param {int} total - Valor em centavos
 * @param {int} amountPeople - Quantidade de pessoas
 * @return {int[]} Retorna um array onde cada elemento é o valor em centavos que cada pessoa deve pagar.
 */
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

/**
 * Formata a saída dos dados.
 * @param {String[]} emailList - Lista de e-mails
 * @param {int[]} resultByPerson - Lista com o valor que cada pessoa deve pagar
 * @return {Map} Retorna um mapa, onde a chave é o e-mail e valor será quanto a pessoa deve pagar.
 */
const formatData = (emailList, resultByPerson) => {
    return new Map(emailList.map((email, index) => (
        [email, resultByPerson[index]]
    )));
};


/**
 * Interface entra a camada de entrada e a camada core, que abstrai a lógica de calcular o valor em centavos que cada pessoa deve pagar.
 * @param {String[]} emailList - Lista de e-mails
 * @param {int[]} resultByPerson - Lista com o valor que cada pessoa deve pagar
 * @return {Map} Retorna um mapa, onde a chave é o e-mail e valor será quanto a pessoa deve pagar.
 */
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