/**
 * Verifica se os colchetes em uma string estão balanceados.
 *
 * Esta função analisa uma string e determina se todos os colchetes (parenteses,
 * colchetes e chaves) estão corretamente abertos e fechados em pares.
 *
 * @param {string} str - A string que contém os colchetes a serem verificados.
 * @returns {boolean} - Retorna true se os colchetes estão balanceados,
 *                      caso contrário, retorna false.
 */
function bracketCheck(str) {
  // Extrai todos os colchetes da string e junta em uma nova string
  let brackets = str.match(/\(|\)|\[|\]|\{|\}/g).join("");

  // Enquanto houver pares de colchetes válidos, remove-os da string
  while (brackets.match(/\(\)|\[\]|\{\}/)) {
    brackets = brackets.replace(/\(\)|\[\]|\{\}/, "");
    console.log(brackets); // Log para depuração: exibe o estado atual dos colchetes
  }

  // Verifica se todos os colchetes foram removidos (ou seja, estão balanceados)
  return brackets.length === 0;
}

// Análise Detalhada
// Descrição Geral:

// A função bracketCheck é utilizada para verificar se uma string contém colchetes balanceados. Colchetes são considerados balanceados se para cada colchete aberto existe um colchete correspondente fechado na ordem correta.
// Parâmetro:

// @param {string} str: A função aceita um único parâmetro, str, que é uma string a ser analisada em busca de colchetes.
// Retorno:

// @returns {boolean}: A função retorna um valor booleano. Ela retorna true se todos os colchetes estão balanceados, ou false caso contrário.
// Extração de Colchetes:

// let brackets = str.match(/\(|\)|\[|\]|\{|\}/g).join("");
// A função usa a expressão regular /\(|\)|\[|\]|\{|\}/g para encontrar todos os colchetes na string. O método match retorna um array de todos os colchetes encontrados, e join("") combina esses colchetes em uma única string.
// Remoção de Pares de Colchetes:

// O loop while (brackets.match(/\(\)|\[\]|\{\}/)) verifica continuamente se há pares de colchetes válidos (por exemplo, (), [], {}).
// Dentro do loop, brackets.replace(/\(\)|\[\]|\{\}/, "") remove o primeiro par de colchetes encontrado na string. O loop continua até que não haja mais pares de colchetes para remover.
// Verificação de Balanceamento:

// return brackets.length === 0;
// Após a remoção de todos os pares de colchetes, a função verifica se a string resultante está vazia (length === 0). Se estiver vazia, significa que todos os colchetes estavam balanceados; portanto, a função retorna true. Caso contrário, ela retorna false, indicando que os colchetes não estão balanceados.
// Exemplo de Uso:
// console.log(bracketCheck("([{}])")); // true
// console.log(bracketCheck("([)]"));   // false
// console.log(bracketCheck("{[()]}")); // true
// console.log(bracketCheck("{[(])}")); // false
// Resumo
/*
A função bracketCheck fornece uma maneira eficaz de verificar a validade de colchetes em uma string, utilizando expressões 
regulares e um loop para remover pares balanceados até que não haja mais colchetes para verificar. Essa abordagem é útil em várias 
aplicações, como análise de sintaxe em linguagens de programação, validação de expressões e processamento de texto.

*/
