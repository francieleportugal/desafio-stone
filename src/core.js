/**
 * Multiplica o preço de cada item pela sua quantidade e soma todos os valores.
 * @param {Object[]} shoppingList - Lista de compras
 * @param {string} shoppingList.name - Nome do item
 * @param {int} shoppingList.price - Preço do item em centavos
 * @param {int} shoppingList.amount - Quantidade comprada   
 * @return {int} Retorna o valor em centavos.  
 */
const extractedAccumulatedValue = (shoppingList) => {
    // Define a função reducer para cada elemento do array que resulta em um único valor
    const reducer = (accumulator, currentValue) => {
        return accumulator + (currentValue.amount * currentValue.price);
    };
    
    // Executa a função reducer para a lista de compras e retorna o valor
    return shoppingList.reduce(reducer, 0);
};

/**
 * Divide o valor entre a quantidade de pessoas de forma igual.
 * @param {int} total - Valor em centavos
 * @param {int} amountPeople - Quantidade de pessoas
 * @return {int[]} Retorna um array onde cada elemento é o valor em centavos que cada pessoa deve pagar.
 */
const divideMoneyEqually = (total, amountPeople) => {
    // Divide o valor total pela quantidade de pessoas e trunca o resultado pegando somente a parte inteira
    const individualValue = Math.trunc(total / amountPeople);

    // Cria e preenche um array com tamanho igual a amountPeople e preenche cada posição com a parte inteira do valor individual
     const resultByPerson = Array(amountPeople).fill(individualValue);

    // Obtém o valor restante da divisão entre o valor total e a quantidade de pessoas
    let remainingValue = total % amountPeople;

    // Caso o valor restante seja diferente de zero, os centavos restantes são distribuidos um a um por pessoa
    for(i = 0; remainingValue != 0; i++) {
        resultByPerson[i] += 1;
        remainingValue -= 1;
    }

    return resultByPerson;
};

/**
 * Interface entra a camada de entrada e a camada core, que abstrai a lógica de calcular o valor em centavos que cada pessoa deve pagar.
 * @param {Object[]} shoppingList - Lista de compras
 * @param {string} shoppingList.name - Nome do item
 * @param {int} shoppingList.price - Preço do item em centavos
 * @param {int} shoppingList.amount - Quantidade comprada
 * @param {int} amountPeople - Quantidade de pessoas
 * @return {int[]} Retorna um array onde cada elemento é o valor em centavos que cada pessoa deve pagar.
 */
const coreInterface = (shoppingList, amountPeople) => {
    // Calcula valor que cada pessoa deve pagar
    const accumulatedVAlue = extractedAccumulatedValue(shoppingList);
    const resultByPerson = divideMoneyEqually(accumulatedVAlue, amountPeople);

    return resultByPerson;
};

module.exports = {
    extractedAccumulatedValue,
    divideMoneyEqually,
    coreInterface,
};