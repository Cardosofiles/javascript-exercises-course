/**
 * Encontra os números dos prisioneiros ausentes em uma lista.
 *
 * Esta função recebe um array de números que representam os prisioneiros presentes,
 * e retorna uma lista dos prisioneiros ausentes, formatados com 4 dígitos.
 *
 * @param {number[]} prisoners - Um array de números representando os prisioneiros presentes.
 * @returns {string[]} - Um array de strings representando os números dos prisioneiros ausentes,
 *                       formatados com 4 dígitos (ex: "0001", "0002", ...).
 */
function missingPrisoners(prisoners) {
  // Ordena a lista de prisioneiros presentes em ordem crescente
  const sorted = prisoners.slice(0).sort((a, b) => a - b);

  // Determina o número total de prisioneiros, que é o maior número na lista
  const total = Number(sorted[sorted.length - 1]);
  const allPrisoners = [];

  // Gera todos os prisioneiros possíveis de 1 até o total, formatando-os para 4 dígitos
  for (let i = 0; i < total; i++) {
    const prisoner = i + 1;
    allPrisoners.push(prisoner.toString().padStart(4, "0"));
  }

  const missing = [];

  // Verifica quais prisioneiros estão ausentes
  allPrisoners.forEach((prisoner) => {
    if (!sorted.includes(prisoner)) {
      missing.push(prisoner);
    }
  });

  // Retorna a lista de prisioneiros ausentes
  return missing;
}

// Análise Detalhada
// Descrição Geral:

// A função missingPrisoners é projetada para encontrar quais prisioneiros estão ausentes de uma lista dada. A lista de prisioneiros presentes é passada como um array de números, e a função retorna um array de strings representando os prisioneiros ausentes, todos formatados com quatro dígitos.
// Parâmetro:

// @param {number[]} prisoners: Um array de números que representam os prisioneiros que estão presentes.
// Retorno:

// @returns {string[]}: Um array de strings, onde cada string representa um prisioneiro ausente formatado com quatro dígitos (por exemplo, "0001", "0002").
// Ordenação dos Prisioneiros Presentes:

// const sorted = prisoners.slice(0).sort((a, b) => a - b);
// A função faz uma cópia da lista de prisioneiros presentes e a ordena em ordem crescente usando o método sort.
// Determinação do Total de Prisioneiros:

// const total = Number(sorted[sorted.length - 1]);
// O número total de prisioneiros é definido como o maior número na lista ordenada de prisioneiros presentes.
// Geração da Lista de Todos os Prisioneiros:

// Um loop for é usado para gerar todos os prisioneiros possíveis de 1 até o número total. Cada número é formatado como uma string com 4 dígitos utilizando padStart(4, "0"), que garante que números como 1, 2, e 10 sejam apresentados como "0001", "0002", e "0010", respectivamente.
// Verificação de Prisioneiros Ausentes:

// A função usa um loop forEach para iterar sobre todos os prisioneiros gerados e verifica se cada prisioneiro está presente na lista de prisioneiros. Se um prisioneiro não estiver na lista, ele é adicionado ao array missing.
// Retorno da Lista de Ausentes:

// Por fim, a função retorna o array de prisioneiros ausentes.
// Exemplo de Uso:
// console.log(missingPrisoners([1, 2, 4, 5]));
// // Saída: [ '0003' ]
// console.log(missingPrisoners([1, 3, 4, 5]));
// // Saída: [ '0002' ]
// console.log(missingPrisoners([2, 3, 4]));
// // Saída: [ '0001' ]
// Resumo

/*
A função missingPrisoners é uma solução eficaz para identificar prisioneiros ausentes
de uma lista, garantindo que a saída esteja em um formato específico. 
Essa abordagem é útil em cenários onde a identificação de elementos ausentes em uma
 sequência numérica é necessária, como em sistemas de gerenciamento de prisioneiros ou listas de verificação.

*/
