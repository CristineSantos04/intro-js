/* Exemplo de função com retorno e validação de dados */
function multiplicar(a, b) {

    // Verifica se o valor do parâmetro A foi informado
    if (a === undefined) {
        document.body.innerHTML = "Por favor, digite o valor do número A";
        return;
    }

    // Verifica se o valor do parâmetro B foi informado
    if (b === undefined) {
        document.body.innerHTML = "Por favor, digite o valor do número B";
        return;
    }

    // Verifica se os valores são do tipo número
    if (typeof a !== "number") {
        document.body.innerHTML = "O valor de A precisa ser um número";
        return;
    }

    if (typeof b !== "number") {
        document.body.innerHTML = "O valor de B precisa ser um número";
        return;
    }

    // Verifica se os números são inválidos (NaN)
    if (Number.isNaN(a)) {
        document.body.innerHTML = "Número inválido";
        return;
    }

    if (Number.isNaN(b)) {
        document.body.innerHTML = "Número inválido";
        return;
    }

    // Exibe o resultado da multiplicação
    document.body.innerHTML = `O resultado da multiplicação entre ${a} e ${b} é igual a ${a * b}`;
}

// Chamando a função
multiplicar(8, 7);

