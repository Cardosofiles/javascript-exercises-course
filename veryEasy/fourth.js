/**
 * Inverte as letras de uma palavra.
 *
 * @param {string} word - A palavra a ser invertida.
 * @returns {string} A palavra invertida em letras minúsculas.
 *
 * @example
 * console.log(invertWord("Hello")); // Saída: "olleh"
 * console.log(invertWord("World")); // Saída: "dlrow"
 */
function invertWord(word) {
  return word.toLowerCase().split("").reverse().join(""); // inverte a palavra e retorna em letras minúsculas
}

/**
 * Inverte as letras de cada palavra em uma string.
 *
 * @param {string} str - A string que contém as palavras a serem invertidas.
 * @returns {string} A string resultante com as palavras invertidas.
 *
 * @example
 * console.log(invertWords("Hello World")); // Saída: "olleh dlrow"
 * console.log(invertWords("JavaScript is Fun")); // Saída: "tpircsavaJ si nuF"
 */
function invertWords(str) {
  return str.split(" ").map(invertWord).join(" "); // divide a string em palavras, inverte cada uma e retorna a string resultante
}

// Análise
// Funcionalidade:

// As funções estão projetadas para inverter letras de palavras, mantendo a ordem das
// palavras na string original. Isso pode ser útil para tarefas de manipulação de texto ou para criar efeitos de estilo em aplicações.

// Modularidade: A função invertWord é separada da função invertWords, o que melhora a legibilidade e reutilização do código. Isso significa que invertWord pode ser usada independentemente, caso haja necessidade de inverter uma única palavra.

// Eficiência: Ambas as funções utilizam métodos de string e array do JavaScript (split, map, reverse, join), que são eficientes para manipulação de strings e arrays. A complexidade de tempo é O(n), onde n é o número total de caracteres na string de entrada.

// Legibilidade: O uso de nomes de funções claros como invertWords e invertWord facilita o entendimento do que cada parte do código faz. Além disso, o uso de métodos encadeados como split, map, e join proporciona uma maneira concisa de manipular strings e arrays.

// Essas funções são um exemplo de como a programação pode ser feita de maneira limpa e eficiente, mantendo a modularidade e clareza do código.
