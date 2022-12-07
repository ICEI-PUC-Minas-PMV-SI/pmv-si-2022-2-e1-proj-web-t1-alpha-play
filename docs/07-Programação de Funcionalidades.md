# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.







## Login

### Requisitos

- RF-005 - Permitir login do usuário

Para atender ao requisito RF-005 foi desenvolvido a página de Login.

Ao clicar em Login disponível na `Navbar` do perfil deslogado, o usuário será redirecionado para a tela de Login.

![página login](https://user-images.githubusercontent.com/111810318/206232943-b88ecb23-6244-4cc5-a422-0114126ca4c1.png)



Será exibido dois campos, Nickname/Senha, do tipo `input text` e `input password` que receberão os valores digitados pelo usuário para fazer o login no site. O `button` do tipo `reset` e de classe `logue` é para o usuário entrar no site logo após concluir o login. Caso ele esqueça a senha,  através do comando `href` dentro de uma âncora `p` de classe `loginrec` será redirecionado para a página de recuperação de senha e caso precise fazer cadastro , através do mesmo comando e âncora , mas de classe `cad`, será redirecionado para a página de cadastro. Os dados são registrados no localStorage do navegador de acordo com a estrutura de dados encontrada em src/js/login.js.


## Recuperação de Senha

### Requisitos

- RF-006 - Permitir o usuário recuperar a senha

Para atender ao requisito RF-006 foi desenvolvido a página de Recuperação de Senha. 

![página recuperação senha](https://user-images.githubusercontent.com/111810318/206233079-aaca3ae7-4b6e-46cc-9fbf-0cfef5d24e39.png)



Será exibido dois campos, Nickname/Nova senha, do tipo `input text` com id `nome` e `input password` com id `senha` que receberão os valores digitados pelo usuário para fazer a alteração da senha. O `button` do tipo `submit` com classe `alterar` é para o usuário confirmar a alteração e poder retornar a página de login e ter acesso novamente ao site. Os dados são registrados e recuperados no localStorage do navegador de acordo com a estrutura de dados encontrada em src/js/recuperaçãodesenha.js.
