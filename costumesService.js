// RESPONSABILIDADE: Orquestrar as operações relacionadas a clientes.

import { db } from './database.js';
import { validateCustomer } from './customerValidator.js';

export function createCustomer(newCustomerData) {
    const validationErrors = validateCustomer(newCustomerData, db.customers);

    if (validationErrors.length > 0) {
        console.error("Falha na validação. Não foi possível criar o cliente.");
        return { success: false, errors: validationErrors };
    }

    // 3. Se não houver erros, adicionar o cliente ao "banco de dados"
    // Gerar um novo 'id' para o cliente.
    // Dica: Pode ser o tamanho do array atual + 1.
    const newId = 0; // Substitua isso pela sua lógica.
    
    const customerToAdd = { id: newId, ...newCustomerData };

    db.customers.push(customerToAdd);

    // Retorna um objeto indicando sucesso.
    return { success: true, customer: customerToAdd };
}
