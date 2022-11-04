# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.







## Login

### Requisitos

- RF-005 - Permitir login do usuário

Para atender ao requisito RF-005 foi desenvolvido a página de Login.

Ao clicar em Login disponível na `Navbar` do perfil deslogado, o usuário será redirecionado para a tela de Login.

![página de login](https://user-images.githubusercontent.com/111810318/200005181-39eceb27-075b-4ac5-9ada-2b70ca9dc67b.jpg)

Será exibido dois campos, Nickname/Senha, do tipo `input` que receberão os valores digitados pelo usuário para fazer o login no site. O botão de classe `log` é para o usuário entrar no site logo após concluir o login. Caso ele esqueça a senha,  através do comando `href` dentro de uma âncora `p` de classe `loginrec` será redirecionado para a página de recuperação de senha e caso precise fazer cadastro , através do mesmo comando e âncora , mas de classe `cad`, será redirecionado para a página de cadastro.


## Recuperação de Senha

### Requisitos

- RF-006 - Permitir o usuário recuperar a senha

Para atender ao requisito RF-006 foi desenvolvido a página de Recuperação de Senha. 

![página de recuperação de senha](https://user-images.githubusercontent.com/111810318/200016354-1a7080f0-8f68-4faa-a751-57ce1a0a764f.jpg)

Será exibido dois campos que orientarão o usuário a alterar sua senha, Crie uma nova senha/Confirme a nova senha, do tipo `input` que receberão os valores digitados pelo usuário para fazer a alteração. O botão de classe `rec` é para o usuário confirmar a alteração e poder retornar a página de login e ter acesso novamente ao site. 
