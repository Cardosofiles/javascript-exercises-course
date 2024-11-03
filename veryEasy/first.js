/**
 * Método 1
 * Calcula a média de um array de números utilizando um loop `forEach`.
 *
 * @param {number[]} number - Um array de números cujos valores serão utilizados para calcular a média.
 * @returns {number} A média dos números fornecidos.
 *
 * @example
 * console.log(average([10, 9, 6, 8, 9, 1, 5, 7])); // Saída: 6.875
 * console.log(average([2, 5, 7, 1, -2]));          // Saída: 2.6
 */
function average(number) {
  let sum = 0;

  number.forEach((number) => {
    sum += number; // soma os números do array
  });

  const average = sum / number.length; // calcula a média

  return average; // retorna a média
}

/**
 * Método 2
 * Calcula a média de um array de números utilizando o método `reduce`.
 *
 * @param {number[]} numbers - Um array de números cujos valores serão utilizados para calcular a média.
 * @returns {number} A média dos números fornecidos.
 *
 * @example
 * console.log(average([10, 9, 6, 8, 9, 1, 5, 7])); // Saída: 6.875
 * console.log(average([2, 5, 7, 1, -2]));          // Saída: 2.6
 */
function average(numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0); // soma os números usando reduce
  const avg = sum / numbers.length; // calcula a média
  return avg; // retorna a média
}

/**
 * Método 3
 * Calcula a média de um conjunto de números fornecidos como argumentos individuais.
 *
 * @param {...number} numbers - Um número variável de argumentos numéricos a serem utilizados para calcular a média.
 * @returns {number} A média dos números fornecidos.
 *
 * @example
 * console.log(average(10, 9, 6, 8, 9, 1, 5, 7)); // Saída: 6.875
 * console.log(average(2, 5, 7, 1, -2));          // Saída: 2.6
 */
function average(...numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0); // soma os números usando reduce
  const avg = sum / numbers.length; // calcula a média
  return avg; // retorna a média
}

/**
 * Método 4
 * Calcula a média de um conjunto de números fornecidos como argumentos individuais,
 * usando uma única linha para calcular a soma e a média.
 *
 * @param {...number} numbers - Um número variável de argumentos numéricos a serem utilizados para calcular a média.
 * @returns {number} A média dos números fornecidos.
 *
 * @example
 * console.log(average(10, 9, 6, 8, 9, 1, 5, 7)); // Saída: 6.875
 * console.log(average(2, 5, 7, 1, -2));          // Saída: 2.6
 */
function average(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length; // calcula e retorna a média
}

// Análise
// Consistência: Todos os métodos apresentados têm o mesmo objetivo de calcular a média, mas utilizam diferentes abordagens.
// Os dois primeiros métodos trabalham com arrays, enquanto os últimos dois utilizam o conceito de "rest parameters" para aceitar um número variável de argumentos.

// Legibilidade: O primeiro método é mais detalhado e pode ser mais fácil de entender para iniciantes, enquanto os últimos dois métodos são mais concisos.

// Desempenho: Todos os métodos têm complexidade de tempo O(n) devido à iteração sobre os números, mas a abordagem usando reduce em um único passo (métodos 2, 3 e 4) pode ser considerada mais elegante e moderna em JavaScript.

// Essas abordagens oferecem flexibilidade na forma como os dados são passados para a função, permitindo que os desenvolvedores escolham a mais adequada para suas necessidades.
