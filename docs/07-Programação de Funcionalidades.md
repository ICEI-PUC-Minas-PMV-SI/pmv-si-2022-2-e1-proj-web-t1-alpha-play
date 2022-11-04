# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.







## Login

### Requisitos

- RF-005 - Permitir login do usuário

Para atender ao requisito RF-005 foi desenvolvido a página de Login.

Ao clicar em Login disponível na `Navbar` do perfil deslogado, o usuário será redirecionado para a tela de Login.

![página de login](https://user-images.githubusercontent.com/111810318/200005181-39eceb27-075b-4ac5-9ada-2b70ca9dc67b.jpg)

Será exibido dois campos, Nickname/Senha, do tipo `input` que receberão os valores digitados pelo usuário para fazer o login no site. O botão de classe `log` é para o usuário entrar no site logo após concluir o login. Caso ele esqueça a senha,  através do comando `href` dentro de uma âncora `p` de classe `loginrec` será redirecionado para a página de recuperação de senha e caso precise fazer cadastro , através do mesmo comando e âncora , mas de classe `cad`, será redirecionado para a página de cadastro.

