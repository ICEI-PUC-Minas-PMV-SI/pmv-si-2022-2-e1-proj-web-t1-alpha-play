var atual; 
var localStorage = Window.localStorage;

function buscaUsuario(nome, senha){
    var jt = localStorage.getItem(nome); 
    if(jt!=null){ 
        var pessoa = JSON.parse(jt); 
        if (document.getElementById("nome").value === pessoa.nome && senha === pessoa.senha) {
            console.log("login sucesso");
            localStorage.setItem("usuario_logado",pessoa.nome)
            window.location.href = "http://127.0.0.1:5502/src/pagina-iniciallogada.html";
        }
        else{
            console.log(`senha ${teste} incorreta`);
        }
    }
}