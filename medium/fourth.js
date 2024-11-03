/**
 * Classe que representa uma equação do segundo grau da forma ax² + bx + c = 0.
 */
class Equation {
  /**
   * Cria uma instância da classe Equation.
   *
   * @param {number} a - Coeficiente do termo quadrático (padrão: 0).
   * @param {number} b - Coeficiente do termo linear (padrão: 0).
   * @param {number} c - Termo constante (padrão: 0).
   */
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  /**
   * Calcula as raízes da equação.
   *
   * Este método determina as raízes da equação do segundo grau usando a fórmula de Bhaskara.
   * Ele considera diferentes casos, como quando os coeficientes são zero ou quando não existem
   * raízes reais. O cálculo é feito com base no discriminante (delta), que determina a natureza
   * das raízes.
   *
   * Se os coeficientes 'a' e 'b' forem ambos zero, uma mensagem de erro é retornada.
   * Se 'a' for zero, a equação se torna linear e a raiz é calculada diretamente.
   * Se o discriminante for negativo, não existem raízes reais.
   * Se o discriminante for zero ou positivo, as raízes são calculadas e retornadas.
   *
   * @returns {Array<number>} - Um array contendo as raízes da equação, que pode ser vazio se não houver raízes reais,
   *                             ou conter uma ou duas raízes, dependendo do caso.
   */
  getRoots() {
    // Verifica se todos os parâmetros são zero
    if (this.a === 0 && this.b === 0 && this.c === 0) {
      return "Erro! Nenhum parâmetro informado.";
    }

    // Verifica se 'a' e 'b' são ambos zero, não há raízes reais
    if (this.a === 0 && this.b === 0) {
      console.log("1. Parâmetros insuficientes.\nNenhuma raiz real.");
      return [];
    }

    // Caso onde 'a' é zero, a equação se torna linear
    if (this.a === 0) {
      console.log(`1. ${this.b}x + ${this.c} = 0`);
      console.log(`2. ${this.b}x = ${this.c * -1}`);
      console.log(`3. x = ${this.c * -1} / ${this.b}`);
      console.log(`4. x = ${-this.c / this.b}`);

      return [-this.c / this.b];
    }

    // Cálculo do discriminante
    const delta = this.b ** 2 - 4 * this.a * this.c;
    console.log(`1. Δ = ${this.b}² - 4 * ${this.a} * ${this.c}`);
    console.log(`2. Δ = ${delta}`);

    // Verifica se não há raízes reais
    if (delta < 0) {
      console.log(`3. Δ < 0.\nNenhuma raiz real.`);
      return [];
    }

    // Cálculo das raízes
    console.log(`3. x' = (-(${this.b}) + √${delta}) / 2 * ${this.a}`);
    console.log(`4. x" = (-(${this.b}) - √${delta}) / 2 * ${this.a}`);
    console.log(`5. x' = ${this.b * -1} + √${delta} / ${this.a * 2}`);
    console.log(`6. x" = ${this.b * -1} - √${delta} / ${this.a * 2}`);

    const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
    const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);

    // Se delta é um quadrado perfeito, exibe as raízes inteiras
    if (Number.isInteger(Math.sqrt(delta))) {
      console.log(
        `7. x' = ${this.b * -1} + ${Math.sqrt(delta)} / ${this.a * 2}`
      );
      console.log(
        `8. x" = ${this.b * -1} - ${Math.sqrt(delta)} / ${this.a * 2}`
      );
      console.log(`9.  x' = ${x1}`);
      console.log(`10. x" = ${x2}`);
    }

    // Retorna as raízes, verificando se são iguais ou diferentes
    return x1 === x2 ? [x1] : [x1, x2];
  }
}

// Análise Detalhada
// Descrição Geral:

// A classe Equation é projetada para representar uma equação do segundo grau e calcular suas raízes usando a fórmula de Bhaskara.
// Construtor:

// constructor(a = 0, b = 0, c = 0): Inicializa os coeficientes da equação, onde a, b e c são definidos como 0 por padrão.
// Método getRoots:

// Este método calcula as raízes da equação e inclui mensagens de log para explicar cada passo do cálculo. Ele lida com vários casos:
// Se todos os coeficientes são zero, retorna uma mensagem de erro.
// Se apenas a é zero, a equação é linear, e a raiz é calculada diretamente.
// Se delta (o discriminante) é negativo, indica que não existem raízes reais.
// Se delta é zero ou positivo, calcula as raízes e as retorna.
// Cálculo do Discriminante:

// O discriminante delta é calculado como b² - 4ac. Ele determina a natureza das raízes.
// Cálculo das Raízes:
// Cálculo das raízes da equação do segundo grau usando a fórmula de Bhaskara:
// Se o discriminante (delta) for maior ou igual a zero, as raízes são calculadas usando as fórmulas:
//   x' = (-b + √delta) / (2 * a)
//   x" = (-b - √delta) / (2 * a)
// As raízes são então retornadas em um array. Se as raízes forem iguais (delta = 0),
// um array com um único elemento é retornado. Caso contrário,
// um array com as duas raízes distintas é retornado.

// Se delta for um quadrado perfeito, os resultados são exibidos como raízes inteiras.
// Retorno:

// O método retorna um array contendo as raízes. Se as raízes são iguais, retorna um array com um único elemento; caso contrário, retorna um array com duas raízes.
// Exemplo de Uso:
// const equation = new Equation(1, -3, 2);
// const roots = equation.getRoots();
// console.log(`Raízes: ${roots}`);

/* 
Resumo
A classe Equation é uma implementação eficaz para calcular as raízes de equações
do segundo grau. Ela proporciona uma abordagem clara e didática para o cálculo, 
exibindo cada etapa do processo e lidando com diferentes cenários que podem ocorrer durante a resolução da equação.
*/
