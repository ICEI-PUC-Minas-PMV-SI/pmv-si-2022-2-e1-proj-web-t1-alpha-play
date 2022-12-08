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

| Nº Teste | Página | Cenário de teste |
|-----------|-----------------------------------------|----|
|TF-001| Home | Ao abrir o index, é esperado que sejam carregados em formato de listas os cards de jogos eletrônicos cooperativos por categorias, bem como a topbar e a footbar. |
|TF-002| Home | Ao clicar em "Home" é esperado que o usuário seja direcionado para a página index.|
|TF-003| Home | Ao clicar em "Quem Somos" é esperado que o usuário seja direcionado para a página "Quem Somos"|
|TF-004| Home | Ao clicar em "Filtro de Jogos" é esperado que o usuário seja direcionado para a página "Filtro de Jogos".|
|TF-005| Home | Ao clicar em "Login" é esperado que o usuário seja direcionado para a página "Login".|
|TF-006| Home | É esperado que haja cinco notícias no carrossel de notícias. Elas devem ser notícias diferentes.|
|TF-007| Home | É esperado que haja um botão que recolhe e expande onde o usuário terá acesso a uma legenda dos ícones que ele encontrará nos cards dos jogos que facilitará quais plataformas o jogo se encontra.|
|TF-008| Filtro de Jogos | Ao carregar a página é esperado que haja um botão que recolhe e expande onde o usuário terá acesso a uma legenda dos ícones que ele encontrará nos cards dos jogos que facilitará quais plataformas o jogo se encontra.|
|TF-009| Filtro de Jogos | Ao carregar a página é esperado que haja um filtro onde o usuario poderá colocar informações como nome do jogo, gênero e plataforma desejada|
|TF-010| Filtro de Jogos | Ao clicar em "Buscar" o filtro deve retornar os jogos presentes no site que correspondam aos critérios adicionados pelo usuário.|
