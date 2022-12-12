# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Página Inicial

### Requisitos

- RF-001 - Deverá ter abas de jogos separadas por matéria
- RF-002 - Deverá ter abas de jogos separadas por dificuldade	

Para atender ao requisito RF-001 foi desenvolvido a página de Inicial com a seguinte estrutura:

![separadas por matéria](https://user-images.githubusercontent.com/111810318/207077947-dfbea876-0901-43bb-b3b8-e4d6143eeeee.png)


Para atender ao requisito RF-002 foi desenvolvido na página de Inicial  a seguinte estrutura:

![materias por dificuldade](https://user-images.githubusercontent.com/111810318/207078469-d15142c6-367b-41f9-9b96-1e819d9bb332.png)

## Cadastro

### Requisitos

- RF-004 - Permitir cadastro do usuário

Para atender ao requisito RF-004 foi desenvolvido a página de Cadastro.

Ao clicar em `Cadastre-se` disponível na tela de `Login`, o usuário será redirecionado para a tela de Cadastro.

![página cadastro](https://user-images.githubusercontent.com/111810318/206241291-172a4ad1-2db9-46b2-9440-e4181b78cb7a.png)



Será exibido três campos, Nickname/Senha/Confirmar senha, do tipo `input text` com id `nome`, `input password` com id `senha` e `input password` com id `confsenha` que receberão os valores digitados pelo usuário para fazer o cadastro no site. O `button` do tipo `submit` e de classe `cadastre` é para o usuário concluir o cadastro no site. Logo após concluir o cadastro, poderá retornar à página de login através do comando `href` dentro de uma âncora `p` de classe `cad`  "Faça Login" ou clicando em `Login` disponível na `Navbar` do perfil. 

![cadastro html](https://user-images.githubusercontent.com/111810318/206909520-4686a7fc-4315-452e-bddf-6ee541a0265e.png)


Os dados são registrados no localStorage do navegador de acordo com a estrutura de dados encontrada em src/js/cadastro.js, como mostra a seguir: 


![image](https://user-images.githubusercontent.com/111810318/206909357-effc3ef4-93e4-4290-b98c-3f39d45b2a4c.png)




## Login

### Requisitos

- RF-005 - Permitir login do usuário

Para atender ao requisito RF-005 foi desenvolvido a página de Login.

Ao clicar em `Login` disponível na `Navbar` do perfil deslogado, o usuário será redirecionado para a tela de Login.

![página login](https://user-images.githubusercontent.com/111810318/206232943-b88ecb23-6244-4cc5-a422-0114126ca4c1.png)



Será exibido dois campos, Nickname/Senha, do tipo `input text` com id `nome` e `input password` com id `senha` que receberão os valores digitados pelo usuário para fazer o login no site. O `button` do tipo `reset` e de classe `logue` é para o usuário entrar no site logo após concluir o login. Caso ele esqueça a senha,  através do comando `href` dentro de uma âncora `p` de classe `loginrec` será redirecionado para a página de recuperação de senha e caso precise fazer cadastro , através do mesmo comando e âncora , mas de classe `cad`, será redirecionado para a página de cadastro. 

![login html](https://user-images.githubusercontent.com/111810318/206909790-fec4e5f5-9761-4750-a111-728c8f33d0e9.png)


Os dados são registrados no localStorage do navegador de acordo com a estrutura de dados encontrada em src/js/login.js, como mostra a seguir: 


![js login](https://user-images.githubusercontent.com/111810318/206909624-ef5bcb10-c1c1-4967-a309-11b0d7c81355.png)



## Recuperação de Senha

### Requisitos

- RF-006 - Permitir o usuário recuperar a senha

Para atender ao requisito RF-006 foi desenvolvido a página de Recuperação de Senha. 

Ao clicar em `Esqueceu a senha?` disponível na tela de `Login`, o usuário será redirecionado para a tela de Recuperação de senha.

![página recuperação senha](https://user-images.githubusercontent.com/111810318/206233079-aaca3ae7-4b6e-46cc-9fbf-0cfef5d24e39.png)



Será exibido dois campos, Nickname/Nova senha, do tipo `input text` com id `nome` e `input password` com id `senha` que receberão os valores digitados pelo usuário para fazer a alteração da senha. O `button` do tipo `submit` com classe `alterar` é para o usuário confirmar a alteração e poder retornar a página de login e ter acesso novamente ao site.

![recuperação senha html](https://user-images.githubusercontent.com/111810318/206910095-1f752861-dfa1-44c2-a4af-588b26f4cf8b.png)

Os dados são registrados e recuperados no localStorage do navegador de acordo com a estrutura de dados encontrada em src/js/recuperaçãodesenha.js, como mostra a seguir: 

![js recuperação senha](https://user-images.githubusercontent.com/111810318/206909937-8599a823-2a4c-4efa-bb3f-d1dde041c9ac.png)

