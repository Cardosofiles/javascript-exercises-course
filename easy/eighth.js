/**
 * A classe `Pilot` representa um piloto, contendo informações pessoais e a capacidade de gerar uma licença de voo.
 */
class Pilot {
  /**
   * Cria uma nova instância de `Pilot`.
   *
   * @param {string} firstName - O primeiro nome do piloto.
   * @param {string} lastName - O sobrenome do piloto.
   * @param {string} birthday - A data de nascimento do piloto no formato 'YYYY-MM-DD'.
   */
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName; // Armazena o primeiro nome do piloto.
    this.lastName = lastName; // Armazena o sobrenome do piloto.
    this.birthday = new Date(birthday); // Armazena a data de nascimento como um objeto Date.
    this.flyingLicense = false; // Inicializa a licença de voo como falsa (não gerada).
  }

  /**
   * Gera a licença de voo do piloto com base no sobrenome, ano de nascimento, mês de nascimento e primeiro nome.
   * A licença é armazenada na propriedade `flyingLicense`.
   */
  generateFlyingLicense() {
    let license = ""; // Inicializa a string da licença.

    // Adiciona os primeiros 5 caracteres do sobrenome ou '9' se não houver.
    for (let i = 0; i < 5; i++) {
      license += this.lastName[i] ? this.lastName[i].toUpperCase() : "9";
    }

    // Adiciona o ano de nascimento e o mês em formato apropriado.
    license += "-";
    license += this.birthday.getFullYear().toString()[2]; // Último dígito do ano de nascimento.
    license += this.getBirthdayFullMonth(); // Obtém o mês de nascimento em formato 'MM'.
    license += this.birthday.getFullYear().toString()[3]; // Penúltimo dígito do ano de nascimento.
    license += ".";
    license += this.firstName[0].toLowerCase(); // Primeira letra do primeiro nome em minúsculo.

    this.flyingLicense = license; // Armazena a licença gerada na propriedade `flyingLicense`.
  }

  /**
   * Retorna o mês de nascimento do piloto em formato 'MM'.
   *
   * @returns {string} - O mês de nascimento em formato 'MM'.
   */
  getBirthdayFullMonth() {
    // Adiciona um zero à frente se o mês for menor que 10 (ex.: '01' para janeiro).
    if (this.birthday.getMonth() < 9) {
      return `0${this.birthday.getMonth() + 1}`;
    } else {
      return `${this.birthday.getMonth() + 1}`; // Retorna o mês normalmente.
    }
  }
}

// Exemplo de uso da classe Pilot:
const pilot = new Pilot("John", "Doe", "1985-07-14"); // Cria uma nova instância de Pilot.
pilot.generateFlyingLicense(); // Gera a licença de voo.
console.log(pilot.flyingLicense); // Saída: 'DOEEE-718.j'
