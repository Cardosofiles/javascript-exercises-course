/**
 * Calcula a quantidade mínima de moedas de cada denominação necessária para atingir o valor fornecido.
 *
 * A função `creditCoins` recebe um número inteiro que representa uma quantia em créditos e
 * calcula quantas moedas de cada denominação são necessárias para totalizar esse valor.
 * Ela utiliza moedas de 500, 100, 25, 10, 5 e 1 unidades, escolhendo as maiores denominações possíveis
 * primeiro para minimizar o número total de moedas.
 *
 * @param {number} num - Quantidade de créditos a ser convertida em moedas.
 *
 * @returns {Object} - Um objeto contendo as denominações de moedas como chaves e as quantidades
 *                     necessárias de cada denominação como valores.
 *
 * @example
 * // Exemplo de uso da função creditCoins
 * const result = creditCoins(687);
 * console.log(result); // Saída: { 500: 1, 100: 1, 25: 3, 10: 1, 5: 0, 1: 2 }
 *
 * @throws {TypeError} Se `num` não for um número inteiro não negativo.
 */
function creditCoins(num) {
  if (!Number.isInteger(num) || num < 0) {
    throw new TypeError(
      "O parâmetro num deve ser um número inteiro não negativo."
    );
  }

  // Variável para armazenar o valor restante a ser convertido em moedas
  let rest = num;

  // Objeto para armazenar as quantidades de cada denominação de moeda
  const coins = { 500: 0, 100: 0, 25: 0, 10: 0, 5: 0, 1: 0 };

  // Calcula o número de moedas de 500 e atualiza o valor restante
  coins["500"] = Math.floor(rest / 500);
  rest -= 500 * coins["500"];

  // Calcula o número de moedas de 100 e atualiza o valor restante
  coins["100"] = Math.floor(rest / 100);
  rest -= 100 * coins["100"];

  // Calcula o número de moedas de 25 e atualiza o valor restante
  coins["25"] = Math.floor(rest / 25);
  rest -= 25 * coins["25"];

  // Calcula o número de moedas de 10 e atualiza o valor restante
  coins["10"] = Math.floor(rest / 10);
  rest -= 10 * coins["10"];

  // Calcula o número de moedas de 5 e atualiza o valor restante
  coins["5"] = Math.floor(rest / 5);
  rest -= 5 * coins["5"];

  // Calcula o número de moedas de 1 e atualiza o valor restante
  coins["1"] = Math.floor(rest / 1);
  rest -= 1 * coins["1"];

  // Retorna o objeto com a quantidade de cada denominação de moeda necessária
  return coins;
}

// Explicação Detalhada
// Função creditCoins:

// Calcula a menor quantidade possível de moedas de diferentes denominações (500, 100, 25, 10, 5 e 1) para representar um valor inteiro num.
// Parâmetro:

// num: Representa a quantidade de créditos a ser convertida em moedas. Deve ser um número inteiro não negativo.
// Processo de Cálculo:

// Inicializa o valor de rest com num, que será reduzido à medida que o valor é convertido em moedas.
// Usa um objeto coins com as denominações de moedas (500, 100, 25, 10, 5 e 1) para armazenar a quantidade de cada uma.
// Para cada denominação, calcula o número de moedas necessárias usando Math.floor(rest / denominação).
// Atualiza rest subtraindo o valor equivalente à quantidade de moedas da denominação atual.
// Resultado Final:

// Retorna o objeto coins contendo a quantidade mínima de cada moeda necessária para formar o valor num.
// Exemplo de Uso:

// creditCoins(687) retornará { 500: 1, 100: 1, 25: 3, 10: 1, 5: 0, 1: 2 }, que indica a quantidade de cada moeda para totalizar 687 créditos.
// Tratamento de Erros:

// Lança um TypeError se num não for um número inteiro não negativo.
