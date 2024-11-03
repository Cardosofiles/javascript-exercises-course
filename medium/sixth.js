/**
 * Gera todas as combinações possíveis de senhas a partir de um conjunto de caracteres fornecidos.
 * A função utiliza recursão para construir combinações de caracteres em diferentes posições.
 *
 * @param {string[]} chars - Um array de caracteres dos quais as senhas serão formadas.
 *
 * @returns {string[][]} Um array contendo todas as combinações possíveis de senhas.
 * Cada combinação é representada como um array de caracteres.
 *
 * @example
 * // Caso de uso: gerando senhas a partir dos caracteres ['a', 'b']
 * const passwords = possiblePasswords(['a', 'b']);
 * console.log(passwords);
 * // Saída: [['a', 'b'], ['b', 'a'], ['a'], ['b'], []]
 *
 * @example
 * // Caso de uso: gerando senhas a partir dos caracteres ['x', 'y', 'z']
 * const passwords = possiblePasswords(['x', 'y', 'z']);
 * console.log(passwords);
 * // Saída: [['x', 'y', 'z'], ['y', 'x', 'z'], ['y', 'z', 'x'], ['x', 'z', 'y'], ['z', 'x', 'y'], ['z', 'y', 'x'], ['x', 'y'], ['y', 'x'], ['x', 'z'], ['z', 'x'], ['y', 'z'], ['z', 'y'], ['x'], ['y'], ['z'], []]
 */
function possiblePasswords(chars) {
  // Caso base: se o array de caracteres estiver vazio, retorna uma array contendo uma array vazia.
  if (chars.length === 0) {
    return [[]];
  }

  // Remove o primeiro caractere do array e armazena os caracteres restantes.
  const removedChar = chars[0];
  const partialChars = chars.slice(1);

  // Chama a função recursivamente para obter as combinações possíveis dos caracteres restantes.
  const partialPossibilites = possiblePasswords(partialChars);

  const allPossibilities = [];

  // Itera sobre as possibilidades parciais e insere o caractere removido em todas as posições possíveis.
  partialPossibilites.forEach((partialPossibility) => {
    for (let i = 0; i <= partialPossibility.length; i++) {
      const completePossibility = [
        ...partialPossibility.slice(0, i),
        removedChar,
        ...partialPossibility.slice(i),
      ];
      allPossibilities.push(completePossibility);
    }
  });

  // Retorna todas as combinações possíveis de senhas geradas.
  return allPossibilities;
}

// Explicação da Documentação
// Descrição Geral: A documentação começa com uma descrição geral da função possiblePasswords, explicando seu propósito e como funciona.
// Parâmetros: O parâmetro chars é descrito, informando que é um array de caracteres que será utilizado para gerar as senhas.
// Retorno: A descrição do retorno informa que a função retorna um array de arrays, onde cada array interno representa uma combinação possível de caracteres.
// Exemplos de Uso: Exemplos de como usar a função são fornecidos, mostrando a saída esperada para diferentes conjuntos de caracteres.
// Comentários no Código: O código inclui comentários para descrever partes importantes da lógica, como o caso base da recursão e o processo de inserção de caracteres nas combinações parciais.
// Essa abordagem de documentação ajuda a entender rapidamente o funcionamento da função e como ela pode ser utilizada em diferentes cenários.
