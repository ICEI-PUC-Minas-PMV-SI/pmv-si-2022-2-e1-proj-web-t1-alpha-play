# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

Resultados Esperados

| Nº Teste | Página | Cenário de teste |
|-----------|-----------------------------------------|----|
|TF-001| Home | Ao acessar o site é esperado que o usuário seja redirecionado a página inicial. |
|TF-002| Home | Quando o usuário clicar em "Login", será redirecionado a página de Login. |
|TF-003| Home | Ao acessar a página de Login, o usuário consegue visualizar a opção de "É novo por aqui?" Caso ele clique nessa opção, será redirecionado para a página de cadastro. |
|TF-004| Home | Caso na página incial o usuário clique em "Quem somos", será redirecionado para a página quem somos, lá conseguirá visualizar informações dos desenvolvedores da página. |
|TF-005| Login | Caso o usuário coloque seu nome e senha corretos, será mostrando uma mensagem de sucessor de login, após isso ele será redirecionado para a página inicial logada. |
|TF-006| Home | Após fazer login com seu nome de usuário e senha, o usuário conseguirá ver o nome cadastrado ao lado de "Home" na navbar. |
|TF-007| Cadastro | Caso o usuário não seja cadastro, ele pode fazer seu cadastro na página de Cadastro, ao prencher as informações e clicar em "Cadastrar" será mostrado um mensagem informando que ele deve fazer login com os dados informados. |
|TF-008| Home | Quando logado, terá uma botão de "Logout" na página inicial  ao lado de "Quem Somos". |
|TF-009| Home | Quando clicar em "Logout", o usuário será redirecionado para a págia inicial deslogada. |
|TF-010| Home | O Site irá linkar jogos. |
|TF-011| Home | Quando logado, o nickname do usuário aparecerá na página inicial ao lado de "Home". |
|TF-012| Home | Terá divisões na página inical separando os jogos por matéria. |
|TF-013| Home | Estará disponível na página inicial seis jogos de cada matéria, suas dificuldades são de ordem crescente, conforme a opnião e teste dos desenvolvedores do Alpha Play. |
