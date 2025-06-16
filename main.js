import { createCustomer } from './customerService.js';
import { db } from './database.js';

console.log("--- ATIVIDADE PRÁTICA: VALIDAÇÃO DE CADASTRO ---");

console.log("\nCenário 1: Dados válidos");
const novoClienteValido = {
    name: 'Beatriz Oliveira',
    username: 'boliveira',
    email: 'beatriz@example.com',
    cpf: '12345678900'
};

let result = createCustomer(novoClienteValido);
if (result.success) {
    console.log(`Cliente "${result.customer.name}" criado com sucesso! ID: ${result.customer.id}`);
} else {
    console.log("Erros encontrados:", result.errors);
}


console.log("\nCenário 2: E-mail e CPF repetidos, nome em branco");
const novoClienteInvalido = {
    name: '',
    username: 'testuser',
    email: 'joao.silva@example.com',
    cpf: '11122233344'
};

result = createCustomer(novoClienteInvalido);
if (result.success) {
    console.log(`Cliente "${result.customer.name}" criado com sucesso!`);
} else {
    console.log("Erros encontrados:", result.errors.join('\\n- '));
}


console.log("\\n--- Estado Final do Banco de Dados ---");
console.table(db.customers);
