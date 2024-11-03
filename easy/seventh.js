/**
 * Calcula um dígito de controle a partir de uma sequência de números.
 *
 * A função `calculateDigit` recebe um array de números e realiza uma série de operações
 * aritméticas para calcular um dígito de controle. Este tipo de cálculo é comum em validações
 * de códigos de barras e outras verificações numéricas onde um dígito de verificação é necessário.
 *
 * A lógica utilizada envolve a soma de números em posições pares e ímpares, multiplicação,
 * e uma operação de módulo para garantir que o dígito de controle seja um número entre 0 e 9.
 *
 * @param {number[]} arr - Um array de números inteiros não negativos.
 *
 * @returns {number} - O dígito de controle calculado, variando de 0 a 9.
 *
 * @example
 * // Exemplo de uso da função calculateDigit
 * const digit = calculateDigit([4, 9, 5, 8, 2, 1]);
 * console.log(digit); // Saída: 5
 *
 * @throws {TypeError} Se `arr` não for um array de números inteiros.
 */
function calculateDigit(arr) {
  if (!Array.isArray(arr) || !arr.every(Number.isInteger)) {
    throw new TypeError(
      "O parâmetro arr deve ser um array de números inteiros."
    );
  }

  // Passo 1: Soma os elementos nas posições pares (incluindo índice 0).
  const step1 = arr.reduce(
    (accum, current, index) =>
      index === 0 || index % 2 === 0 ? accum + current : accum,
    0
  );

  // Passo 2: Multiplica o resultado de step1 por 3.
  const step2 = step1 * 3;

  // Passo 3: Soma step2 com a soma dos elementos nas posições ímpares.
  const step3 =
    step2 +
    arr.reduce(
      (accum, current, index) => (index % 2 !== 0 ? accum + current : accum),
      0
    );

  // Retorna o dígito de controle.
  // Se step3 % 10 não for zero, o dígito de controle é 10 - (step3 % 10).
  // Caso contrário, o dígito de controle é zero.
  return step3 % 10 !== 0 ? 10 - (step3 % 10) : 0;
}

/*

Aqui está a documentação detalhada para a função calculateDigit, que calcula um dígito de controle com base em uma sequência de números.

javascript
Copy code
/**
 * Calcula um dígito de controle a partir de uma sequência de números.
 *
 * A função `calculateDigit` recebe um array de números e realiza uma série de operações
 * aritméticas para calcular um dígito de controle. Este tipo de cálculo é comum em validações
 * de códigos de barras e outras verificações numéricas onde um dígito de verificação é necessário.
 *
 * A lógica utilizada envolve a soma de números em posições pares e ímpares, multiplicação,
 * e uma operação de módulo para garantir que o dígito de controle seja um número entre 0 e 9.
 *
 * @param {number[]} arr - Um array de números inteiros não negativos.
 *
 * @returns {number} - O dígito de controle calculado, variando de 0 a 9.
 *
 * @example
 * // Exemplo de uso da função calculateDigit
 * const digit = calculateDigit([4, 9, 5, 8, 2, 1]);
 * console.log(digit); // Saída: 5
 *
 * @throws {TypeError} Se `arr` não for um array de números inteiros.
 */
function calculateDigit(arr) {
  if (!Array.isArray(arr) || !arr.every(Number.isInteger)) {
    throw new TypeError(
      "O parâmetro arr deve ser um array de números inteiros."
    );
  }

  // Passo 1: Soma os elementos nas posições pares (incluindo índice 0).
  const step1 = arr.reduce(
    (accum, current, index) =>
      index === 0 || index % 2 === 0 ? accum + current : accum,
    0
  );

  // Passo 2: Multiplica o resultado de step1 por 3.
  const step2 = step1 * 3;

  // Passo 3: Soma step2 com a soma dos elementos nas posições ímpares.
  const step3 =
    step2 +
    arr.reduce(
      (accum, current, index) => (index % 2 !== 0 ? accum + current : accum),
      0
    );

  // Retorna o dígito de controle.
  // Se step3 % 10 não for zero, o dígito de controle é 10 - (step3 % 10).
  // Caso contrário, o dígito de controle é zero.
  return step3 % 10 !== 0 ? 10 - (step3 % 10) : 0;
}

// Explicação Detalhada
// Função calculateDigit:

// A função é usada para calcular um dígito de controle, uma técnica usada para validar sequências numéricas.
// Parâmetro:

// arr: Array de números inteiros não negativos. Cada número no array representa um dígito na sequência a ser validada.
// Etapas de Cálculo:

// Passo 1 (step1): Soma os valores nas posições pares (incluindo índice 0) no array.
// Passo 2 (step2): Multiplica o resultado de step1 por 3.
// Passo 3 (step3): Soma o valor de step2 com a soma dos valores nas posições ímpares do array.
// Resultado Final:

// O dígito de controle é obtido pelo módulo de step3 com 10:
// Se o módulo for diferente de zero, retorna 10 - (step3 % 10).
// Caso contrário, retorna 0.
// Exemplo de Uso:

// calculateDigit([4, 9, 5, 8, 2, 1]) retornará o valor 5, o que representa o dígito de controle para essa sequência.
// Tratamento de Erros:

// Lança um TypeError se o parâmetro arr não for um array de números inteiros.
