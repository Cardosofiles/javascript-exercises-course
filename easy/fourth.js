/**
 * Calcula o fatorial de um número inteiro usando recursão.
 *
 * O fatorial de um número inteiro positivo `n` é definido como o produto de todos os
 * inteiros positivos de `1` até `n`. Para `n = 0`, o fatorial é definido como `1`.
 *
 * @param {number} num - Um número inteiro não negativo para o qual o fatorial será calculado.
 *
 * @returns {number} - O fatorial de `num`.
 *
 * @example
 * // Exemplo de uso da função factorial
 * const result = factorial(5);
 * console.log(result); // Saída: 120, pois 5! = 5 * 4 * 3 * 2 * 1
 *
 * @throws {RangeError} Se o número for negativo, pois o fatorial de números negativos não é definido.
 */
function factorial(num) {
  if (num < 0) throw new RangeError("O número deve ser não negativo.");
  if (num === 0) return 1; // Caso base: 0! é igual a 1
  else return num * factorial(num - 1); // Recursão: num * (num-1)!
}

/**
 * Calcula o fatorial de um número grande usando recursão com `BigInt`.
 *
 * Esta função utiliza `BigInt` para calcular o fatorial de números inteiros grandes, onde
 * os valores podem exceder o limite máximo de um número inteiro em JavaScript.
 *
 * @param {number|BigInt} num - Um número inteiro não negativo ou `BigInt` para o qual o fatorial será calculado.
 *
 * @returns {BigInt} - O fatorial de `num` como um valor `BigInt`.
 *
 * @example
 * // Exemplo de uso da função factorial para números grandes
 * const result = factorial(50);
 * console.log(result); // Saída: 30414093201713378043612608166064768844377641568960512000000000000n
 *
 * @throws {RangeError} Se o número for negativo, pois o fatorial de números negativos não é definido.
 */
function factorial(num) {
  const bigInt = BigInt(num); // Converte para BigInt para evitar estouro de limite

  if (bigInt < 0n) throw new RangeError("O número deve ser não negativo.");
  if (bigInt === 0n) return 1n; // Caso base: 0! é igual a 1
  else return bigInt * factorial(bigInt - 1n); // Recursão: bigInt * (bigInt-1n)!
}
