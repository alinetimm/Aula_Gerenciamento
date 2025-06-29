// RESPONSABILIDADE: Conter toda a lógica de validação de um cliente.

export function validateCustomer(customer, existingCustomers) {
    const errors = [];

    // Validação de Presença
    if (!customer.name || customer.name.trim() === "") {
        errors.push("O campo 'nome' é obrigatório.");
    }
    if (!customer.username || customer.username.trim() === "") {
        errors.push("O campo 'username' é obrigatório.");
    }
    if (!customer.email || customer.email.trim() === "") {
        errors.push("O campo 'email' é obrigatório.");
    }
    if (!customer.cpf || customer.cpf.trim() === "") {
        errors.push("O campo 'cpf' é obrigatório.");
    }

    // Validação de Formato do E-mail
    if (customer.email && !customer.email.includes("@")) {
        errors.push("O formato do e-mail é inválido.");
    }

    // Validação de Unicidade
    if (existingCustomers.some(c => c.username === customer.username)) {
        errors.push("Username já cadastrado.");
    }
    if (existingCustomers.some(c => c.email === customer.email)) {
        errors.push("E-mail já cadastrado.");
    }
    if (existingCustomers.some(c => c.cpf === customer.cpf)) {
        errors.push("CPF já cadastrado.");
    }

    return errors;
}