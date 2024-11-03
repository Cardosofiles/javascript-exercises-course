/**
 * Formata um nome completo em uma citação abreviada no estilo "SOBRENOME, I.N."
 *
 * A função recebe uma string `fullName` contendo o nome completo de uma pessoa e
 * retorna uma versão formatada onde o sobrenome é escrito em letras maiúsculas,
 * seguido pelas iniciais dos nomes, cada uma com um ponto final.
 *
 * Por exemplo, o nome "John Michael Doe" será formatado como "DOE, J. M."
 *
 * @param {string} fullName - Uma string com o nome completo da pessoa.
 *
 * @returns {string} - Uma string formatada com o sobrenome em maiúsculas seguido das
 * iniciais dos demais nomes com um ponto final após cada inicial.
 *
 * @example
 * // Exemplo de uso da função quotation
 * const formattedName = quotation("John Michael Doe");
 * console.log(formattedName); // Saída: "DOE, J. M."
 *
 * @throws {TypeError} Se `fullName` não for uma string.
 */
function quotation(fullName) {
  if (typeof fullName !== "string") {
    throw new TypeError("O parâmetro fullName deve ser uma string.");
  }

  // Divide o nome completo em partes separadas por espaços.
  const names = fullName.split(" ");
  let initials = "";

  // Itera sobre cada parte do nome, exceto o último nome (sobrenome), e cria as iniciais.
  for (let i = 0; i < names.length - 1; i++) {
    initials += ` ${names[i][0].toUpperCase()}.`; // Adiciona a inicial em maiúsculo seguida de ponto final.
  }

  // Retorna a string formatada no estilo "SOBRENOME, I. N."
  return `${names[names.length - 1].toUpperCase()},${initials}`;
}

// Detalhes da Documentação
// Função quotation: Formata um nome completo no estilo de citação abreviada, em que o último nome (sobrenome) é em maiúsculas, seguido pelas iniciais dos nomes.
// Parâmetro:
// fullName: Uma string contendo o nome completo da pessoa.
// Retorno:
// Retorna uma string formatada com o sobrenome em letras maiúsculas, seguido das iniciais dos outros nomes.
// Exemplo de Uso:
// Chamar quotation("John Michael Doe") retornará "DOE, J. M.".
// Tratamento de Erros:
// Lança um TypeError se fullName não for uma string.
