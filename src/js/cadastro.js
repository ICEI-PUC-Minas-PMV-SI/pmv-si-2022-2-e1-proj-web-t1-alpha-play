var atual; //Armazena o container que está sendo apresentado na tela (cadastro ou relatório)
var localStorage = Window.localStorage;

function cadastrar(){ //Função que grava os dados da interface na LocalStorage
    var novo = new Object(); //Cria um novo objeto "vazio"
    novo.nome=document.getElementById("nome").value; //Busca, na interface, o conteúdo do input "cpf" e o define como atributo do objeto "novo"
    novo.senha=document.getElementById("senha").value; //Busca, na interface, o conteúdo do input "nome" e o define como atributo do objeto "novo"
    novo.confsenha=document.getElementById("confsenha").value; //Busca, na interface, o conteúdo do input "email" e o define como atributo do objeto "novo"
    var jt = JSON.stringify(novo); //Gera um JSON com as propriedades do objeto "novo"
    localStorage.setItem(novo.nome, jt); //Armazena o JSON gerado utilizando o CPF como chave

}