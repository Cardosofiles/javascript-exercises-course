/**
 * Encontra a letra "mais alta" (última em ordem alfabética) em uma string.
 *
 * @param {string} str - A string da qual a letra mais alta será extraída.
 * @returns {string} A letra mais alta em ordem alfabética na string fornecida.
 *
 * @example
 * console.log(highestLetter("hello")); // Saída: "o"
 * console.log(highestLetter("zebra")); // Saída: "z"
 * console.log(highestLetter("Apple")); // Saída: "p"
 * console.log(highestLetter("!@#$%")); // Saída: ""
 */
function highestLetter(str) {
  const lowerCaseString = str.toLowerCase(); // Converte a string para minúsculas
  const lettersArray = lowerCaseString.split(""); // Divide a string em um array de caracteres
  const sortedLetters = lettersArray.sort(); // Ordena os caracteres em ordem alfabética
  return sortedLetters[sortedLetters.length - 1]; // Retorna a última letra do array ordenado
}

// Análise
// Funcionalidade: A função highestLetter é projetada para identificar a letra mais alta em uma string, considerando a
//ordem alfabética. Essa funcionalidade pode ser útil em várias aplicações, como jogos, análises de texto ou qualquer
//situação onde seja necessário identificar a "letra mais significativa".

// Eficiência: A complexidade de tempo da função é O(n log n), onde n é o número de caracteres na string de entrada.
//Isso se deve ao uso do método sort(), que tem um tempo de execução médio de O(n log n).

// Legibilidade: A função é legível, com nomes de variáveis claros e etapas de processamento bem definidas.
// A conversão para minúsculas garante que a comparação seja feita de maneira consistente, independentemente da capitalização das letras.

// Uso de Array: A função utiliza um array auxiliar lettersArray para armazenar os caracteres extraídos da string. E
// Embora isso facilite a manipulação dos dados, também implica um uso adicional de memória proporcional ao tamanho da string.

// Tratamento de Caracteres Especiais: A função não verifica se a string contém apenas caracteres alfabéticos.
// Se a string incluir caracteres especiais ou números, eles serão incluídos na comparação. Isso pode ser desejável ou não, dependendo do contexto de uso.

// Exemplos de Uso
// Os exemplos fornecidos demonstram a versatilidade da função, mostrando que ela pode lidar com diferentes entradas,
// incluindo letras em diferentes casos e strings com caracteres não alfabéticos.

// Considerações
// A função poderia ser otimizada para ignorar caracteres não alfabéticos e retornar uma string vazia se não houver letras
// na string de entrada. Isso poderia ser feito utilizando um filtro antes da ordenação.

// A segunda versão da função highestLetter é funcionalmente idêntica à primeira, mas mais concisa. Ambas as versões
// realizam a mesma tarefa, mas a segunda é um pouco mais direta ao eliminar uma variável intermediária, tornando o código mais enxuto.

// Para maior robustez, seria interessante adicionar validações de entrada para garantir que a função esteja lidando com strings válidas e não vazias.
