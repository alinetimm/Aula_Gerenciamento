Visão Geral
O objetivo é construir uma pequena aplicação desktop para cadastro de clientes. Você usará Electron para criar a interface gráfica (GUI) e o esqueleto de código Node.js fornecido para gerenciar a lógica de negócio e a validação dos dados. A aplicação deve permitir que um usuário insira os dados de um novo cliente, e o sistema deve validar esses dados antes de salvá-los.

Passo a Passo da Tarefa
Configurar o Ambiente Electron:

Crie uma nova pasta para o seu projeto.

Inicie um projeto Node.js (npm init -y).

Instale o Electron como uma dependência de desenvolvimento: npm install --save-dev electron.

Crie a estrutura básica de um projeto Electron com os arquivos main.js (processo principal), index.html (sua interface) e preload.js (para comunicação segura entre a interface e o processo principal).

Integrar o Esqueleto da Lógica de Negócio:

Copie os arquivos database.js, customerValidator.js e customerService.js fornecidos no esqueleto para dentro da pasta do seu projeto. Eles formam a "camada de backend" da sua aplicação.

Criar a Interface Gráfica (index.html):

Desenvolva um formulário HTML simples que contenha:

Campos de entrada (<input>) para: Nome, Username, Email e CPF.

Um botão "Cadastrar Cliente".

Uma área (ex: uma <div>) para exibir mensagens de sucesso ou de erro para o usuário.

Implementar a Lógica de Validação (customerValidator.js):

Este é o coração da tarefa. Abra o arquivo customerValidator.js e preencha a lógica nos locais marcados com // TODO:.

Siga as regras de validação definidas nos requisitos da tarefa para verificar presença, formato e unicidade dos dados.

Conectar a Interface com a Lógica:

No seu preload.js, exponha de forma segura uma função que possa ser chamada a partir da sua interface (index.html).

Essa função irá receber os dados do formulário e passá-los para o processo principal do Electron.

No main.js do Electron, receba esses dados e chame a função createCustomer do customerService.js.

A função createCustomer retornará um objeto de resultado ({ success: true, ... } ou { success: false, errors: [...] }). Retorne esse objeto para a sua interface.

Exibir o Feedback ao Usuário:

No script do seu index.html, ao receber o resultado da operação:

Se success for true, exiba uma mensagem de sucesso (ex: "Cliente cadastrado com sucesso!").

Se success for false, exiba a lista de errors de forma clara e legível para que o usuário saiba exatamente o que precisa corrigir.

Requisitos da Tarefa
Utilize o "esqueleto" de código fornecido. Ele já simula a separação da aplicação em camadas (interface, serviço/lógica, e banco de dados).

Implemente a lógica de validação dentro do arquivo customerValidator.js.

A validação deve retornar uma lista de todos os erros encontrados, não apenas o primeiro. Se nenhum erro for encontrado, deve retornar uma lista vazia.

Implemente a função createCustomer no arquivo customerService.js para que ela utilize o validador antes de tentar inserir o novo cliente no "banco de dados".

Regras de Validação a Serem Implementadas
Um novo cliente só pode ser cadastrado se:

Todos os campos (nome, username, email, cpf) estiverem preenchidos. (Validação de Presença)

O username não existir na base de dados. (Validação de Unicidade)

O email não existir na base de dados. (Validação de Unicidade)

O cpf não existir na base de dados. (Validação de Unicidade)

O email contiver um caractere @. (Validação de Formato)

Boas Práticas Obrigatórias
Centralização: Toda a lógica de validação deve estar contida no módulo customerValidator.js. O customerService.js deve apenas chamar essa função e tomar decisões com base no resultado.

Feedback Claro: A função principal em main.js deve ser capaz de imprimir uma mensagem de sucesso ou uma lista detalhada de todos os erros de validação retornados, simulando o que seria exibido para o usuário final.

Imutabilidade (Simulada): Não altere a base de dados diretamente de outros arquivos. Apenas o customerService deve ter a permissão de adicionar novos itens à lista.