/**
 * Classe Race
 * Representa uma corrida com vários corredores. Permite atualizar a classificação dos corredores e eliminar participantes.
 */
class Race {
  /**
   * Cria uma nova instância de Race.
   * @param {...string} racers - Lista de nomes dos corredores.
   */
  constructor(...racers) {
    this.racers = racers; // Lista de corredores com ordem inicial de classificação.
  }

  /**
   * Retorna a classificação atual dos corredores.
   * @returns {Object} - Um objeto contendo a classificação dos corredores, onde as chaves são as posições e os valores são os nomes dos corredores.
   */
  getClassification() {
    const classification = {};

    for (let i = 0; i < this.racers.length; i++) {
      classification[i + 1] = this.racers[i];
    }

    return classification;
  }

  /**
   * Atualiza a classificação de um corredor.
   * Recebe uma string que indica qual corredor deve ser atualizado e a ação a ser realizada.
   * @param {string} str - A string de atualização no formato `"nomeCorredor ação"`.
   *    - Se `ação` for um número, move o corredor na classificação.
   *    - Se `ação` for "ELIMINATE", elimina o corredor.
   */
  updateClassification(str) {
    const [racer, action] = str.split(" ");

    if (action.includes("ELIMINATE")) {
      this.eliminateRacer(racer);
    } else {
      this.updateRacer(racer, action);
    }
  }

  /**
   * Atualiza a posição de um corredor na classificação.
   * Move o corredor para a posição determinada pela ação.
   * @param {string} racer - Nome do corredor a ser movido.
   * @param {string} action - O número indicando a quantidade de posições a serem movidas. Um valor positivo move o corredor para cima, e um valor negativo para baixo.
   */
  updateRacer(racer, action) {
    // Separando corredores ativos e eliminados
    const eliminated = this.racers.filter((racer) =>
      racer.includes("ELIMINATED")
    );
    const active = this.racers.filter((racer) => !racer.includes("ELIMINATED"));

    const currentPosition = active.indexOf(racer);
    const updatedPosition = currentPosition + Number(action) * -1;

    // Verifica se a posição é válida dentro dos limites
    if (updatedPosition >= this.racers.length || updatedPosition < 0) {
      console.log("Erro! Atualização inválida.");
      return;
    }

    // Remove o corredor da posição atual
    active.splice(currentPosition, 1);

    // Reinsere o corredor na nova posição
    this.racers = [
      ...active.slice(0, updatedPosition),
      racer,
      ...active.slice(updatedPosition),
      ...eliminated,
    ];
  }

  /**
   * Elimina um corredor da classificação.
   * Move o corredor para o final da lista e marca como "ELIMINATED".
   * @param {string} racer - Nome do corredor a ser eliminado.
   */
  eliminateRacer(racer) {
    // Separando corredores ativos e eliminados
    const eliminated = this.racers.filter((racer) =>
      racer.includes("ELIMINATED")
    );
    const active = this.racers.filter((racer) => !racer.includes("ELIMINATED"));

    // Remove o corredor da lista ativa e adiciona ao final com o status "ELIMINATED"
    active.splice(active.indexOf(racer), 1);

    this.racers = [...active, `${racer} ELIMINATED`, ...eliminated];
  }
}

// Explicação Detalhada
// Classe Race: Representa uma corrida com uma lista de corredores. Fornece métodos para ver a classificação, mover corredores e eliminá-los.

// Atributos:

// racers: Lista inicial dos corredores.
// Métodos:

// getClassification(): Retorna a classificação atual dos corredores, em que as chaves são as posições e os valores são os nomes dos corredores.
// updateClassification(str): Atualiza a classificação de um corredor com base em uma string de entrada. A string contém o nome do corredor e uma ação, que pode ser um número indicando a mudança de posição ou a palavra "ELIMINATE" para eliminá-lo.
// updateRacer(racer, action): Move um corredor na classificação. Recebe o nome do corredor e um valor (positivo ou negativo) que representa a quantidade de posições a serem movidas. Verifica se a nova posição está dentro dos limites válidos.
// eliminateRacer(racer): Marca o corredor como "ELIMINATED", movendo-o para o final da lista de classificação.
// Regras de Atualização:

// A eliminação move o corredor para o final da lista e adiciona o sufixo "ELIMINATED".
// Movimentos inválidos (fora dos limites) são ignorados.
// Exemplo de Uso:

// Instanciando a corrida e atualizando a classificação:
// const race = new Race("Alice", "Bob", "Charlie", "Dana");

// // Exibe a classificação inicial
// console.log(race.getClassification());

// // Atualiza a classificação de Bob para mover 1 posição para cima
// race.updateClassification("Bob 1");

// // Elimina o corredor "Charlie"
// race.updateClassification("Charlie ELIMINATE");

// // Exibe a classificação após as atualizações
// console.log(race.getClassification());
// Este exemplo ilustra como instanciar a corrida e realizar operações como mover corredores e eliminar participantes, com uma exibição atualizada da classificação.
