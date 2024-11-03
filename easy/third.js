/**
 * Verifica se uma string é "balanceada", ou seja, se cada caractere ocorre o mesmo número de vezes na string.
 *
 * A função `isBalancedString` conta o número de ocorrências de cada caractere na string fornecida.
 * Em seguida, ela verifica se todos os caracteres ocorrem o mesmo número de vezes.
 * Se cada caractere tem a mesma contagem, a string é considerada balanceada.
 *
 * @param {string} str - A string que será verificada.
 *
 * @returns {boolean} - Retorna `true` se a string é balanceada (todos os caracteres ocorrem igualmente);
 *                      caso contrário, retorna `false`.
 *
 * @example
 * // Exemplo de uso da função isBalancedString
 * isBalancedString("aabbcc"); // true (cada caractere ocorre 2 vezes)
 * isBalancedString("aabbc");  // false (caracteres têm contagens diferentes)
 * isBalancedString("abcd");   // true (cada caractere ocorre 1 vez)
 *
 * @throws {TypeError} Se `str` não for uma string.
 */
function isBalancedString(str) {
  if (typeof str !== "string") {
    throw new TypeError("O parâmetro str deve ser uma string.");
  }

  // Objeto para contar as ocorrências de cada caractere na string
  const charCount = {};

  // Itera sobre cada caractere na string e atualiza a contagem em charCount
  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1;
  }

  // Verifica se todas as contagens de caracteres são iguais
  return Object.values(charCount).every((count, index, array) =>
    index !== 0 ? count === array[index - 1] : true
  );
}

// Explicação Detalhada
// Função isBalancedString:

// A função verifica se uma string é balanceada, ou seja, se todos os caracteres ocorrem o mesmo número de vezes na string fornecida.
// Parâmetro:

// str: Uma string a ser verificada quanto ao equilíbrio de caracteres.
// Processo de Verificação:

// Passo 1: Conta as ocorrências de cada caractere usando o objeto charCount, onde cada chave representa um caractere e o valor associado representa a contagem de ocorrências.
// Passo 2: Usa Object.values(charCount) para obter um array com as contagens dos caracteres e, em seguida, every para verificar se todas as contagens são iguais.
// A função de callback passada para every compara cada contagem com a anterior, assegurando que todas as contagens sejam idênticas.
// Retorno:

// Retorna true se todas as contagens de caracteres são iguais, indicando uma string balanceada.
// Retorna false caso contrário.
// Exemplo de Uso:

// isBalancedString("aabbcc") retorna true, pois todos os caracteres ocorrem exatamente 2 vezes.
// isBalancedString("aabbc") retorna false, pois as contagens não são iguais.
// isBalancedString("abcd") retorna true, pois cada caractere ocorre 1 vez.
// Tratamento de Erros:

// Lança um TypeError se str não for uma string, garantindo que o argumento fornecido seja válido.
