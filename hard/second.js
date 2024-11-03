/*
A função validateUser tem como objetivo validar um nome de usuário com base em 
uma série de critérios, garantindo que ele siga determinadas regras antes de ser
considerado válido para registro ou uso em um sistema. Vamos analisar o código e
explicar detalhadamente cada parte:
*/

const database = ["erick_14", "pam_ls2", "VICTOR_99A"];

/**
 * Valida um nome de usuário.
 * @param {string} username - O nome de usuário a ser validado.
 * @returns {boolean} - Retorna true se o nome de usuário for válido, false caso contrário.
 */
function validateUser(username) {
  // Verifica o comprimento do nome de usuário
  if (username.length < 4 || username.length > 32) {
    return false; // Nome de usuário deve ter entre 4 e 32 caracteres
  }

  // Verifica se o nome de usuário contém caracteres não permitidos
  if (username.match(/\W|^[0-9]|^_|_$/)) {
    return false; // Não pode conter caracteres não alfanuméricos, não pode começar com número, não pode começar ou terminar com underscore
  }

  // Verifica se o nome de usuário contém pelo menos uma letra, um número e um underscore
  if (
    !(
      username.match(/[A-Za-z]/) &&
      username.match(/[0-9]/) &&
      username.match(/_/)
    )
  ) {
    return false; // Deve conter pelo menos uma letra, um número e um underscore
  }

  // Verifica se o nome de usuário já existe na base de dados
  const usernameAlreadyExists = database.indexOf(username) !== -1;

  if (usernameAlreadyExists) {
    return false; // Nome de usuário já está em uso
  }

  return true; // Nome de usuário é válido
}

// Análise Detalhada
// Definição da Base de Dados:

// const database = ["erick_14", "pam_ls2", "VICTOR_99A"];
// A variável database é um array que contém nomes de usuário já existentes. Essa lista será usada para verificar se um novo nome de usuário já está em uso.
// Função validateUser:

// Parâmetro: A função recebe um parâmetro username, que é uma string representando o nome de usuário a ser validado.
// Retorno: A função retorna um valor booleano (true ou false), indicando se o nome de usuário é válido ou não.
// Validação do Comprimento do Nome de Usuário:

// if (username.length < 4 || username.length > 32) { return false; }
// O nome de usuário deve ter entre 4 e 32 caracteres. Se o comprimento não atender a esse critério, a função retorna false.
// Verificação de Caracteres Inválidos:

// if (username.match(/\W|^[0-9]|^_|_$/)) { return false; }
// Essa verificação usa uma expressão regular para garantir que:
// O nome de usuário não contém caracteres não alfanuméricos (\W).
// Não começa com um número (^[0-9]).
// Não começa (^_) ou termina (_$) com um underscore.
// Se qualquer uma dessas condições for verdadeira, a função retorna false.
// Verificação de Características Necessárias:

// if (!(username.match(/[A-Za-z]/) && username.match(/[0-9]/) && username.match(/_/))) { return false; }
// Aqui, a função verifica se o nome de usuário contém pelo menos uma letra (maiúscula ou minúscula), um número e um underscore. Se faltar qualquer um desses elementos, a função retorna false.
// Verificação de Existência na Base de Dados:

// const usernameAlreadyExists = database.indexOf(username) !== -1;
// A função verifica se o nome de usuário já existe na base de dados. Se indexOf retornar um índice diferente de -1, isso significa que o nome já está em uso, e a função retorna false.
// Resultado Final:

// return true;
// Se todas as validações forem bem-sucedidas, a função retorna true, indicando que o nome de usuário é válido.
// Resumo
// A função validateUser assegura que um nome de usuário atenda a vários critérios de formatação e não esteja em uso, proporcionando uma maneira de evitar problemas com registros de nomes de usuário inválidos ou duplicados. Os critérios incluem comprimento, caracteres permitidos, e a presença de letras, números e underscores, além de verificar a exclusividade na base de dados. Essa abordagem ajuda a manter a integridade e a validade dos nomes de usuário dentro de um sistema.
