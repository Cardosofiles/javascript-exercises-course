/**
 * Insere uma string em posições específicas de outra string.
 * A função recebe uma string original, a string a ser inserida e um array de índices
 * onde a string deve ser inserida. Para cada índice, a string a ser inserida é adicionada
 * à string original na posição especificada.
 *
 * @param {string} str - A string original onde a nova string será inserida.
 * @param {string} toInsert - A string que será inserida na string original.
 * @param {number[]} indexes - Um array de índices que especifica onde a nova string deve ser inserida.
 *
 * @returns {string} A nova string resultante após a inserção das strings.
 *
 * @example
 * // Caso de uso: inserindo "abc" nas posições 1 e 3 da string "defgh"
 * const result = insertIntoString("defgh", "abc", [1, 3]);
 * console.log(result);
 * // Saída: "dabcefgabc"
 *
 * @example
 * // Caso de uso: inserindo "!" nas posições 0 e 5 da string "hello"
 * const result = insertIntoString("hello", "!", [0, 5]);
 * console.log(result);
 * // Saída: "!hello!"
 */
function insertIntoString(str, toInsert, indexes) {
  // Divide a string original em um array de caracteres.
  const charsArray = str.split("");
  let insertCount = 0; // Contador para rastrear o número de inserções.

  // Itera sobre os índices da string original.
  for (let i = 0; i <= str.length; i++) {
    // Verifica se o índice atual está na lista de índices fornecidos.
    if (indexes.includes(i)) {
      // Insere a string a ser adicionada na posição correta, considerando as inserções anteriores.
      charsArray.splice(i + insertCount, 0, toInsert);
      insertCount++; // Incrementa o contador de inserções.
    }
  }

  // Retorna a nova string após a inserção das strings.
  return charsArray.join("");
}

// Explicação da Documentação
// Descrição Geral: A documentação começa com uma descrição clara da função insertIntoString, explicando seu propósito e o que faz.
// Parâmetros: Cada parâmetro (str, toInsert e indexes) é descrito, incluindo seus tipos e o que representam na função.
// Retorno: A documentação informa que a função retorna uma nova string resultante das inserções.
// Exemplos de Uso: Exemplos práticos são fornecidos para ilustrar como usar a função e qual será a saída esperada.
// Comentários no Código: O código inclui comentários para explicar partes essenciais da lógica, como a divisão da string em um array de caracteres e a iteração sobre os índices.
// Essa abordagem de documentação ajuda os desenvolvedores a entenderem rapidamente como a função opera e como ela pode ser aplicada em diferentes contextos.
