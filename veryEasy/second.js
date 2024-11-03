/**
 * Inverte a ordem dos elementos em um array.
 *
 * @param {Array} arr - O array a ser invertido.
 * @returns {Array} Um novo array com os elementos na ordem inversa.
 *
 * @example
 * console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7])); // Saída: [7, 5, 1, 9, 8, 6, 9, 0]
 * console.log(reverse(["OH", "HI", "MARK"])); // Saída: ["MARK", "HI", "OH"]
 * console.log(reverse([false, true, true, true])); // Saída: [true, true, true, false]
 * console.log(reverse(["it´s", "not", true, 0])); // Saída: [0, true, "not", "it´s"]
 */
function reverse(arr) {
  const reversedArray = [];

  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - 1 - i]; // Atribui o elemento na posição invertida
  }

  return reversedArray; // Retorna o array invertido
}

// Análise
// Funcionalidade: A função reverse é projetada para inverter a ordem dos elementos de um array,
// retornando um novo array com os elementos na ordem inversa. Isso pode ser útil em várias situações, como manipulação de dados, algoritmos de ordenação ou simplesmente para exibir dados de maneira diferente.

// Eficiência: A complexidade de tempo é O(n), onde n é o número de elementos no array de entrada.
// Isso se deve ao fato de que a função precisa iterar por todos os elementos do array original uma vez.

// Legibilidade: O código é legível, com a estrutura de loop for clara e fácil de entender. A expressão de atribuição reversedArray[i] = arr[arr.length - 1 - i] é concisa e expressa claramente a intenção de inverter os elementos.

// Uso de Array: A função utiliza um array auxiliar reversedArray para armazenar os elementos invertidos. Essa abordagem é prática, mas o uso de um array adicional significa que a função consome espaço extra proporcional ao tamanho do array de entrada.

// Exemplos de Uso: Os exemplos fornecidos demonstram a versatilidade da função, mostrando que ela pode lidar com diferentes tipos de elementos, incluindo números, strings e booleanos.

// Considerações
// A função poderia ser otimizada para inverter o array in-place (ou seja, modificar o array original) para economizar espaço, mas isso poderia complicar a lógica. A versão atual é mais simples e clara, embora utilize memória adicional.

// É importante notar que a função não trata casos em que o argumento não é um array. Adicionar verificações de tipo poderia aumentar a robustez da função.
