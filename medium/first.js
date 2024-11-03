/**
 * Converte um número romano em seu equivalente decimal.
 *
 * A função analisa uma string que representa um número romano e converte
 * essa representação para um número inteiro. Os números romanos são
 * representados por letras que têm valores específicos. O sistema
 * numérico romano é baseado em adições e subtrações de valores.
 *
 * Por exemplo:
 * - "III" retorna 3 (1 + 1 + 1)
 * - "IV" retorna 4 (5 - 1)
 * - "IX" retorna 9 (10 - 1)
 * - "LVIII" retorna 58 (50 + 5 + 3)
 * - "MCMXCIV" retorna 1994 (1000 + (1000 - 100) + (100 - 10) + (5 - 1))
 *
 * @param {string} str - A string que representa um número romano.
 * @returns {number} - O equivalente decimal do número romano fornecido.
 */
function romanNumeral(str) {
  // Separa a string em um array de caracteres (numerais romanos).
  const numeralsArray = str.split("");

  // Mapeia cada numeral romano para seu valor decimal correspondente.
  const decimalsArray = numeralsArray.map((numeral) => {
    switch (numeral) {
      case "I":
        return 1; // I = 1
      case "V":
        return 5; // V = 5
      case "X":
        return 10; // X = 10
      case "L":
        return 50; // L = 50
      case "C":
        return 100; // C = 100
      case "D":
        return 500; // D = 500
      case "M":
        return 1000; // M = 1000
      default:
        return 0; // Caso inválido
    }
  });

  // Reduz o array de valores decimais, tratando a lógica de subtração onde aplicável.
  return decimalsArray.reduceRight((accum, current, index, array) => {
    // Se o valor atual é menor que o próximo (à direita), subtrai.
    if (current < array[index + 1]) {
      return accum - current;
    } else {
      // Caso contrário, adiciona ao acumulador.
      return accum + current;
    }
  }, 0);
}

// Análise Detalhada
// Descrição Geral:

// A função romanNumeral recebe uma string que representa um número em forma romana e converte essa string em um número inteiro decimal. Ela utiliza um sistema de conversão que leva em consideração as regras de adição e subtração dos números romanos.
// Parâmetro:

// @param {string} str: A string que contém a representação do número romano.
// Retorno:

// @returns {number}: O número inteiro que representa o equivalente decimal do número romano fornecido.
// Separação dos Numerais:

// const numeralsArray = str.split("");: A string é convertida em um array de caracteres, onde cada caractere representa um numeral romano.
// Mapeamento para Valores Decimais:

// const decimalsArray = numeralsArray.map(...): Cada numeral romano é mapeado para seu valor decimal correspondente usando uma estrutura switch. Se o numeral não é válido, retorna 0.
// Redução para Cálculo Final:

// return decimalsArray.reduceRight(...): A função reduceRight é utilizada para calcular o valor total. Ao iterar do final para o início do array, ela permite aplicar corretamente a lógica de subtração: se o valor atual é menor que o próximo (à direita), significa que deve ser subtraído, caso contrário, deve ser adicionado.
// Exemplo de Uso:
// console.log(romanNumeral("III"));      // Saída: 3
// console.log(romanNumeral("IV"));       // Saída: 4
// console.log(romanNumeral("IX"));       // Saída: 9
// console.log(romanNumeral("LVIII"));    // Saída: 58
// console.log(romanNumeral("MCMXCIV"));  // Saída: 1994

/*
Resumo
A função romanNumeral é uma implementação eficaz para converter números romanos em decimais,
utilizando mapeamento e redução para calcular o total corretamente. Ela é útil em contextos 
que envolvem a interpretação de números romanos, como em sistemas de numeração antigos ou em jogos e aplicações que fazem uso de tal sistema.
*/
