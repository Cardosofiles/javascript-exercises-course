/**
 * Gera todas as combinações de pares (x, y) onde x varia de 0 a um valor especificado
 * e y varia de 0 a outro valor especificado.
 *
 * @param {[number, number]} pair - Um array contendo dois números, onde:
 *    - pair[0] (x): O valor máximo para a primeira coordenada dos pares.
 *    - pair[1] (y): O valor máximo para a segunda coordenada dos pares.
 *
 * @returns {Array<Array<number>>} - Um array de arrays, onde cada sub-array representa
 *    um par de números [i, j], com i variando de 0 a x e j variando de 0 a y.
 *
 * @example
 * // Exemplo de uso da função smallerPairs
 * const result = smallerPairs([2, 3]);
 * console.log(result);
 * // Saída: [
 * //   [0, 0], [0, 1], [0, 2], [0, 3],
 * //   [1, 0], [1, 1], [1, 2], [1, 3],
 * //   [2, 0], [2, 1], [2, 2], [2, 3]
 * // ]
 */
function smallerPairs([x, y]) {
  const pairs = []; // Inicializa um array vazio para armazenar os pares.

  // Loop para gerar todos os pares (i, j) com 0 <= i <= x e 0 <= j <= y
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      pairs.push([i, j]); // Adiciona o par [i, j] ao array de pares.
    }
  }

  return pairs; // Retorna o array de pares gerados.
}
