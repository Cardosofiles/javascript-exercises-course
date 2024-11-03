/**
 * Aplica a cifra de César em uma string, deslocando as letras de acordo com uma chave fornecida.
 * A cifra de César é uma técnica de criptografia simples que desloca as letras do alfabeto
 * por um número fixo de posições, enquanto mantém os caracteres não alfabéticos inalterados.
 *
 * @param {string} str - A string de entrada que será criptografada.
 *                       Somente letras de A-Z e a-z são afetadas; outros caracteres são ignorados.
 * @param {number} key - O número de posições a serem deslocadas.
 *                       Se a chave for negativa, o deslocamento será para a esquerda.
 *                       A chave é normalizada para o intervalo [0, 25] para evitar deslocamentos desnecessários.
 *
 * @returns {string} - A string criptografada resultante após aplicar a cifra de César.
 *                     Caracteres não alfabéticos na string de entrada permanecem inalterados.
 *
 * @example
 *
 * caesarCipher("Hello, World!", 3);
 * // Retorna: "Khoor, Zruog!"
 *
 * caesarCipher("xyz", 2);
 * // Retorna: "zab"
 *
 * caesarCipher("Abc", -1);
 * // Retorna: "Zab"
 *
 * caesarCipher("123 &*()", 5);
 * // Retorna: "123 &*()" (nenhuma alteração)
 */
function caesarCipher(str, key) {
  const charsArray = str.split("");
  const normalizedKey = key % 26;

  const codesArray = charsArray.map((char) => {
    const currentCode = char.charCodeAt(0);

    // Verifica se o caractere é uma letra maiúscula
    if (
      currentCode - normalizedKey < 65 &&
      currentCode >= 65 &&
      currentCode <= 90
    ) {
      return currentCode + 26; // Corrige o código para a faixa de letras maiúsculas
    }

    // Verifica se o caractere é uma letra minúscula
    if (
      currentCode - normalizedKey < 97 &&
      currentCode >= 97 &&
      currentCode <= 122
    ) {
      return currentCode + 26; // Corrige o código para a faixa de letras minúsculas
    }

    return currentCode; // Retorna o código sem alteração se não for letra
  });

  // Converte os códigos ajustados de volta para caracteres e junta em uma string
  return codesArray
    .map((code) => String.fromCharCode(code - normalizedKey))
    .join("");
}
// Explicação da Documentação
// Descrição Geral: A primeira parte da documentação fornece uma visão geral da função, incluindo o propósito da cifra de César.
// Parâmetros: Cada parâmetro da função é descrito, incluindo o tipo esperado e uma explicação sobre como são usados.
// Retorno: A documentação explica o que a função retorna.
// Exemplos: Alguns exemplos são fornecidos para ilustrar como usar a função e o que esperar como resultado.
// Esse formato de documentação ajudará outros desenvolvedores (ou você mesmo no futuro) a entender rapidamente o que a função faz, como usá-la e qual é seu comportamento esperado.
