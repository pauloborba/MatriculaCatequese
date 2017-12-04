Feature: Cadastrar alunos
As a teacher
I wish to register a new student
So I can register its data and information

Scenario: Cadastro de aluno com apenas os campos necessários preenchidos
Given que estou na página de cadastro de alunos
And o campo de nome é preenchido com “Renato dos Anjos”
And o campo de data de nascimento é preenchido com “02/03/2010”
And o campo de endereço é preenchido com “Av. Santa Bárbara 35”
When eu requisito que o aluno seja registrado
Then o sistema armazena o nome, data de nascimento e endereço

Scenario: Cadastro de alunos sem os campos necessários preenchidos
Given que estou na página de cadastro de alunos
And o campo de nome é preenchido com “Renato dos Anjos”
And o campo de data de nascimento é preenchido com “02/03/2010”
And o campo de endereço não está preenchido
When eu tento fazer com que o aluno seja registrado
Then o sistema não permite que o pedido seja enviado
And exibe uma mensagem de erro sob o campo que precisa ser preenchido

Scenario: Validação de informação
Given que estou na página de cadastro de alunos
And o campo de email é preenchido com "Fulano@ciclao@com"
When eu deixo o campo
Then o sisteme exibe uma mensagem de erro de formatação sob o campo

Scenario: Prrenchimento automatico de endereço
Given que estou na página de cadastro de alunos
When eu preencho o campo de CEP com o valor "52060-540"
Then o sistema preenche automaticamente o campo rua como "Rua Doutor Saulo Suassuna"
And o campo cidade como "Recife"
And o campo estado como "PErnambuco"