/**
 * A classe Point representa um ponto no espaço tridimensional, definido por suas coordenadas (x, y, z).
 * Esta classe fornece métodos para determinar o setor do ponto baseado nos sinais das suas coordenadas
 * e para calcular a distância do ponto à origem (0, 0, 0).
 */
class Point {
  /**
   * Cria uma nova instância de Point com as coordenadas fornecidas.
   *
   * @param {number} x - A coordenada x do ponto.
   * @param {number} y - A coordenada y do ponto.
   * @param {number} z - A coordenada z do ponto.
   */
  constructor(x, y, z) {
    this.coordinates = [x, y, z];
  }

  /**
   * Um objeto estático que mapeia a combinação de sinais das coordenadas para seus respectivos setores.
   *
   * @static
   * @type {Object}
   * @property {string} "+++" - Setor Alfa.
   * @property {string} "++-" - Setor Beta.
   * @property {string} "+-+" - Setor Gama.
   * @property {string} "+--" - Setor Delta.
   * @property {string} "-++" - Setor Épsilon.
   * @property {string} "-+-" - Setor Zeta.
   * @property {string} "--+" - Setor Sigma.
   * @property {string} "---" - Setor Ômega.
   */
  static sectors = {
    "+++": "Alfa",
    "++-": "Beta",
    "+-+": "Gama",
    "+--": "Delta",
    "-++": "Épsilon",
    "-+-": "Zeta",
    "--+": "Sigma",
    "---": "Ômega",
  };

  /**
   * Determina o setor do ponto baseado nos sinais de suas coordenadas.
   *
   * @returns {string} O nome do setor correspondente às coordenadas do ponto.
   *
   * @example
   * const point = new Point(1, 2, 3);
   * console.log(point.getSector()); // Retorna: "Alfa"
   *
   * const pointNegative = new Point(-1, -2, -3);
   * console.log(pointNegative.getSector()); // Retorna: "Ômega"
   */
  getSector() {
    const signs = this.coordinates
      .map((coord) => (coord >= 0 ? "+" : "-"))
      .join("");
    return Point.sectors[signs];
  }

  /**
   * Calcula a distância do ponto à origem (0, 0, 0).
   *
   * @returns {number} A distância do ponto à origem.
   *
   * @example
   * const point = new Point(3, 4, 5);
   * console.log(point.getDistance()); // Retorna: 7.0710678118654755
   */
  getDistance() {
    return Math.sqrt(
      this.coordinates.reduce((accum, current) => accum + current ** 2, 0)
    );
  }
}

/**
 * Análise da classe Point:
 *
 * A classe Point é uma implementação eficiente para representar um ponto no espaço tridimensional.
 * O método `getSector` utiliza a combinação dos sinais das coordenadas para determinar em qual setor
 * o ponto se encontra, utilizando uma abordagem simples e legível.
 * O método `getDistance` implementa o cálculo da distância à origem usando a fórmula padrão da distância
 * euclidiana, proporcionando uma forma clara de entender a posição do ponto em relação à origem.
 *
 * A implementação está encapsulada, com a lógica de setores definida em um objeto estático, o que facilita a manutenção
 * e a extensão futura da classe. A documentação fornece exemplos de uso que podem ser úteis para desenvolvedores que
 * utilizam essa classe em seus projetos.
 */

// Explicação da Documentação
// Descrição Geral: A documentação começa com uma descrição geral da classe Point, explicando seu propósito e o que representa.
// Construtor: O construtor é documentado com detalhes sobre os parâmetros que recebe.
// Setores: A propriedade estática sectors é explicada, listando cada setor e sua correspondência.
// Métodos: Cada método é documentado com uma descrição, o que retorna e exemplos de uso, facilitando a compreensão.
// Análise Final: A análise final fornece uma visão geral das capacidades da classe, seus métodos, e a eficácia da implementação.
// Essa abordagem de documentação não só esclarece o funcionamento da classe, mas também fornece uma referência útil para quem for utilizar ou modificar a classe no futuro.
