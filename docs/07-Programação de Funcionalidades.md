# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.







## Login

### Requisitos

- RF-005 - Permitir login do usuário

Para atender ao requisito RF-005 foi desenvolvido a página de Login.

Ao clicar em Login disponível na `Navbar` do perfil deslogado, o usuário será redirecionado para a tela de Login.

![página de login](https://user-images.githubusercontent.com/111810318/200718174-437a8f84-fd59-45f2-8f04-b9555adaa970.jpg)


Será exibido dois campos, Nickname/Senha, do tipo `input text` e `input password` que receberão os valores digitados pelo usuário para fazer o login no site. O `button` de id `botao` é para o usuário entrar no site logo após concluir o login. Caso ele esqueça a senha,  através do comando `href` dentro de uma âncora `p` de classe `loginrec` será redirecionado para a página de recuperação de senha e caso precise fazer cadastro , através do mesmo comando e âncora , mas de classe `cad`, será redirecionado para a página de cadastro.


## Recuperação de Senha

### Requisitos

- RF-006 - Permitir o usuário recuperar a senha

Para atender ao requisito RF-006 foi desenvolvido a página de Recuperação de Senha. 

![página de recuperação de senha](https://user-images.githubusercontent.com/111810318/200717881-ac8a0829-5c0c-4b33-b77a-c40ad25f6cc2.jpg)


Será exibido dois campos que orientarão o usuário a alterar sua senha, Crie uma nova senha/Confirme a nova senha, do tipo `input password` que receberão os valores digitados pelo usuário para fazer a alteração. O `button` de id `botao` é para o usuário confirmar a alteração e poder retornar a página de login e ter acesso novamente ao site. 
