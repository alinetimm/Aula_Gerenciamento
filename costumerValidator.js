// RESPONSABILIDADE: Conter toda a lógica de validação de um cliente.

export function validateCustomer(customer, existingCustomers) {
    const errors = [];

    // TODO: Implementar a validação de Presença
    // Dica: Verifique se os campos name, username, email e cpf não são vazios.
    // Se um campo for vazio, adicione uma mensagem como "O campo 'nome' é obrigatório." ao array 'errors'.


    // TODO: Implementar a validação de Formato do E-mail
    // Dica: Verifique se o campo email contém o caractere '@'.
    // Se não contiver, adicione a mensagem "O formato do e-mail é inválido." ao array 'errors'.


    // TODO: Implementar a validação de Unicidade
    // Dica: Use o array 'existingCustomers' para verificar se o username, email ou cpf já existem.
    // Use funções como .some() ou .find().
    // Se um valor já existir, adicione mensagens como "Username já cadastrado." ao array 'errors'.


    return errors;
}