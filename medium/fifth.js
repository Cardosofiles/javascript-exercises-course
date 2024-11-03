/**
 * Calcula a persistência multiplicativa de um número.
 *
 * A persistência multiplicativa é o número de vezes que os dígitos
 * de um número precisam ser multiplicados entre si até que o resultado
 * seja um único dígito. Por exemplo, para o número 39:
 * 3 * 9 = 27 → 2 * 7 = 14 → 1 * 4 = 4 (3 passos)
 *
 * @param {number} num - O número para o qual a persistência multiplicativa será calculada.
 * @returns {number} - O número de passos necessários para reduzir o número a um único dígito.
 *                     Retorna 0 se o número for menor que 10.
 */
function multiplicativePersistance(num) {
  // Se o número é menor que 10, não há necessidade de multiplicação, então retorna 0.
  if (num < 10) {
    return 0;
  }

  // Converte o número em uma string, separa os dígitos e os armazena em um array.
  const digits = num.toString().split("");

  // Calcula o produto dos dígitos utilizando a função reduce.
  const product = digits.reduce((accum, current) => accum * current, 1);

  // Chama recursivamente a função para calcular a persistência multiplicativa do produto.
  return 1 + multiplicativePersistance(product);
}

// Análise Detalhada
// Descrição Geral:

// A função multiplicativePersistence calcula quantas vezes é necessário multiplicar os dígitos de um número até que o resultado seja um único dígito. Se o número fornecido já é um único dígito (menor que 10), a função retorna 0.
// Parâmetro:

// @param {number} num: O número cuja persistência multiplicativa será calculada.
// Retorno:

// @returns {number}: O número de passos necessários para que o número se torne um único dígito. Se o número fornecido for menor que 10, a função retorna 0.
// Verificação de Número Único Dígito:

// if (num < 10): A função verifica se o número é menor que 10. Se for, isso indica que não há dígitos a serem multiplicados, então a função retorna 0.
// Conversão de Dígitos:

// const digits = num.toString().split("");: O número é convertido em uma string e, em seguida, dividido em um array de seus dígitos. Cada dígito é representado como uma string.
// Cálculo do Produto dos Dígitos:

// const product = digits.reduce((accum, current) => accum * current, 1);: A função reduce é utilizada para calcular o produto dos dígitos. O acumulador (accum) é inicializado como 1, e cada dígito (current) é multiplicado ao acumulador.
// Chamada Recursiva:

// return 1 + multiplicativePersistance(product);: A função chama a si mesma recursivamente com o produto dos dígitos. O resultado é incrementado em 1 para contar a multiplicação realizada nesta chamada.
// Exemplo de Uso:
// console.log(multiplicativePersistance(39)); // Saída: 3
// console.log(multiplicativePersistance(999)); // Saída: 4
// console.log(multiplicativePersistance(4));   // Saída: 0
// console.log(multiplicativePersistance(25));  // Saída: 2
/*
Resumo
A função multiplicativePersistence é uma implementação recursiva que permite calcular
de forma eficiente o número de multiplicações necessárias para reduzir um número a um único dígito. 
Essa função é útil em situações que envolvem a manipulação de dígitos e a compreensão de como operações
aritméticas podem transformar números em seus valores fundamentais.
*/
