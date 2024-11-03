/**
 * Classe Explorer
 * Representa um explorador que acumula experiência ao explorar planetas e enfrenta desafios
 * de acordo com o nível de hostilidade e tipo de terreno de cada planeta.
 */
class Explorer {
  /**
   * Cria uma nova instância de Explorer.
   * @param {string} name - Nome do explorador.
   */
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.experience = 0;
    this.expToNextLevel = 110;
    this.knownPlanets = []; // Planetas explorados
    this.terrainExpertise = {}; // Conhecimento em diferentes terrenos
    this.alive = true; // Status de vida
  }

  /**
   * Retorna a classificação do explorador baseada no nível atual.
   * @returns {string} - Retorna o rank do explorador:
   *    - "Newbie" para níveis < 10
   *    - "Explorer" para níveis < 30
   *    - "Veteran" para níveis < 50
   *    - "Elite" para níveis < 80
   *    - "Master" para níveis < 99
   *    - "Legend" para nível 99
   */
  get rank() {
    if (this.level < 10) return "Newbie";
    if (this.level < 30) return "Explorer";
    if (this.level < 50) return "Veteran";
    if (this.level < 80) return "Elite";
    if (this.level < 99) return "Master";
    return "Legend";
  }

  /**
   * Objeto de configuração de hostilidade de exploração.
   * Define as regras para ganhar experiência em diferentes hostilidades.
   * - `pacific`: Requer um valor >= 5 para sucesso.
   * - `neutral`: Requer um valor >= 7 para sucesso.
   * - `hostile`: Requer um valor >= 9 para sucesso; caso contrário, concede 10 exp.
   */
  static explorationHandler = {
    pacific: (diceResult) => (diceResult >= 5 ? 15 : 0),
    neutral: (diceResult) => (diceResult >= 7 ? 25 : 0),
    hostile: (diceResult) => (diceResult >= 9 ? 50 : 10),
  };

  /**
   * Método para ganhar experiência.
   * Aumenta o nível do explorador se atingir a quantidade necessária para o próximo nível.
   * @param {number} pts - A quantidade de experiência adquirida.
   */
  gainExperience(pts) {
    this.experience += pts;

    // Alcançou o nível máximo
    if (this.level === 99) {
      return;
    }

    if (pts < this.expToNextLevel) {
      this.expToNextLevel -= pts;
      return;
    }

    // Sobe de nível
    this.level++;
    const newExpToNextLevel =
      100 + 10 * this.level - (pts - this.expToNextLevel);

    // Alcançou o nível máximo
    this.expToNextLevel = this.level !== 99 ? newExpToNextLevel : 0;

    console.log(
      `Level up! Você agora está no nível ${this.level}. Experiência para o próximo nível: ${this.expToNextLevel}`
    );
  }

  /**
   * Explora um planeta específico.
   * Realiza verificações de hostilidade, dados e experiência de terreno,
   * e ajusta os atributos do explorador de acordo com o resultado.
   * @param {Object} planet - O planeta a ser explorado.
   * @param {number} planet.id - Identificador do planeta.
   * @param {string} planet.hostility - Nível de hostilidade do planeta ('pacific', 'neutral', ou 'hostile').
   * @param {string} planet.terrain - Tipo de terreno do planeta.
   */
  explore(planet) {
    // Verifica se está vivo
    if (!this.alive) {
      console.log("Você está morto.");
      return;
    }

    const { id, hostility, terrain } = planet;

    // Lança os dados
    const dice1 = Math.floor(1 + Math.random() * 6);
    const dice2 = Math.floor(1 + Math.random() * 6);

    // Aplica bônus de conhecimento de terreno, se aplicável
    const bonus = this.terrainExpertise[terrain] > 2 ? 1 : 0;
    const dices = dice1 + dice2 + bonus;

    console.log(`Lançou ${dice1} e ${dice2} ${bonus ? "+1 de bônus" : ""}`);

    // Verifica crítico: aumenta o conhecimento do terreno
    if (dices >= 12) {
      this.terrainExpertise[terrain] = this.terrainExpertise[terrain] + 1 || 1;
    }

    // Verifica falha crítica: morte em planetas hostis
    if (dices === 2 && hostility === "hostile") {
      console.log("Você morreu.");
      this.alive = false;
      return;
    }

    // Processa o resultado da exploração
    const handler = Explorer.explorationHandler[hostility];
    const obtainedExp = handler(dices);

    this.gainExperience(obtainedExp);

    // Resultado da exploração
    if (obtainedExp > 10) {
      const planetAlreadyExplored = this.knownPlanets.find(
        (planet) => planet.id === id
      );

      if (!planetAlreadyExplored) {
        this.knownPlanets.push(planet);
      }

      console.log(`Sucesso! Ganhou ${obtainedExp} de exp.`);
    } else {
      console.log(`Fracasso. Ganhou ${obtainedExp} de exp.`);
    }
  }
}

// Explicação Detalhada
// Classe Explorer: Representa o explorador com atributos que definem seu progresso, experiência, planetas conhecidos, especialização em terrenos, e status de vida.

// Atributos:

// name: Nome do explorador.
// level: Nível do explorador (inicia em 1).
// experience: Experiência atual do explorador.
// expToNextLevel: Experiência necessária para o próximo nível.
// knownPlanets: Array de planetas conhecidos pelo explorador.
// terrainExpertise: Objeto para armazenar conhecimento específico em diferentes tipos de terrenos.
// alive: Status de vida do explorador.
// Métodos:

// Getter rank: Retorna o rank com base no nível do explorador.
// gainExperience(pts): Adiciona experiência ao explorador, verifica se ele sobe de nível e atualiza a experiência necessária para o próximo nível.
// explore(planet): Realiza uma exploração em um planeta, aplicando verificações baseadas na hostilidade e terreno do planeta. Determina o resultado e experiência adquirida.
// Atributo Estático explorationHandler:

// Define as regras de ganho de experiência baseadas no nível de hostilidade do planeta explorado.
// Exemplo de Uso:

// Para instanciar e explorar:
// const explorer = new Explorer("Alice");
// explorer.explore({ id: 1, hostility: "neutral", terrain: "forest" });
// Tratamento de Erros:

// Verifica se o explorador está alive antes de permitir a exploração.
// Verifica se o nível é 99 para parar o ganho de experiência quando o nível máximo é atingido.
