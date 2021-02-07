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
 * @param {String[]} emailList - Lista de e-mails
 * @return {Map} Retorna um mapa, onde a chave é o e-mail e valor será quanto a pessoa deve pagar.
 */
const divideMoneyEqually = (total, emailList) => {
    const map = new Map();
    const amountPeople = emailList.length;

    // Divide o valor total pela quantidade de pessoas e trunca o resultado pegando somente a parte inteira
    const individualValue = Math.trunc(total / amountPeople);

    // Preenche mapa com a parte inteira do valor individual
    emailList.forEach(email => map.set(email, individualValue));

    // Obtém o valor restante da divisão entre o valor total e a quantidade de pessoas
    let remainingValue = total % amountPeople;

    // Caso o valor restante seja diferente de zero, os centavos restantes são distribuidos um a um por pessoa
    for(i = 0; remainingValue != 0; i++) {
        map.set(emailList[i], map.get(emailList[i]) + 1);
        remainingValue -= 1;
    }

    return map;
};

/**
 * Valida se há e-mails duplicados na lista.
 * @param {String[]} emailList - Lista de e-mails
 * @return {Boolean} Indica se há e-mails duplicados.
 */
const hasDuplicates = (emailList) => {
    return new Set(emailList).size !== emailList.length; 
};

/**
 * Valida dados de entrada.
 * @param {Object[]} shoppingList - Lista de compras
 * @param {string} shoppingList.name - Nome do item
 * @param {int} shoppingList.price - Preço do item em centavos
 * @param {int} shoppingList.amount - Quantidade comprada
 * @param {String[]} emailList - Lista de e-mails
 * @return {void}
 * @throws Será lançado um erro se qualquer lista estiver vazia.
 * @throws Será lançado um erro se houver e-mails duplicados.
 */
const validateInputData = (shoppingList, emailList) => {
    // Valida se as listas de entrada não estão vazias. Caso estejam é emitido um erro
    if (!shoppingList.length || !emailList.length) {
        throw new Error('Lists should not be empty');
    }

    // Valida se há e-mails duplicados
    if (hasDuplicates(emailList)) {
        throw new Error('There are duplicate e-mails');
    }
};

/**
 * Interface entra a camada de entrada e a camada core, que abstrai a lógica de calcular o valor em centavos que cada pessoa deve pagar.
 * @param {Object[]} shoppingList - Lista de compras
 * @param {string} shoppingList.name - Nome do item
 * @param {int} shoppingList.price - Preço do item em centavos
 * @param {int} shoppingList.amount - Quantidade comprada
 * @param {int} amountPeople - Quantidade de pessoas
 * @param {String[]} emailList - Lista de e-mails
 * @return {Map} Retorna um mapa, onde a chave é o e-mail e valor será quanto a pessoa deve pagar.
 */
const coreInterface = (shoppingList, emailList) => {
    validateInputData(shoppingList, emailList);

    // Calcula valor que cada pessoa deve pagar
    const accumulatedVAlue = extractedAccumulatedValue(shoppingList);
    return divideMoneyEqually(accumulatedVAlue, emailList);
};

module.exports = {
    validateInputData,
    extractedAccumulatedValue,
    divideMoneyEqually,
    coreInterface,
};