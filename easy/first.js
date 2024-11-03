/**
 * Achata um array de arrays e ordena os elementos resultantes em ordem crescente.
 *
 * Esta função recebe um array que contém outros arrays, combina todos os elementos
 * em um único array e, em seguida, classifica os elementos em ordem numérica crescente.
 *
 * @param {Array<Array<number>>} arr - Um array de arrays de números que será achatado e ordenado.
 *
 * @returns {Array<number>} - Um novo array que contém todos os números do array de entrada,
 *    achatados e ordenados em ordem crescente.
 *
 * @example
 * // Exemplo de uso da função flatAndSort
 * const input = [[3, 1, 2], [5, 4], [6]];
 * const result = flatAndSort(input);
 * console.log(result); // Saída: [1, 2, 3, 4, 5, 6]
 */
function flatAndSort(arr) {
  const newArray = []; // Inicializa um array vazio para armazenar os números achatados.

  // Itera sobre cada sub-array em arr e adiciona seus elementos ao newArray.
  arr.forEach((numbers) => {
    newArray.push(...numbers); // Usa o operador spread para adicionar os elementos do sub-array.
  });

  // Ordena o novo array em ordem crescente e o retorna.
  return newArray.sort((a, b) => a - b);
}
