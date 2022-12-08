var atual; 
var localStorage = Window.localStorage;
    
function buscaUsuario(nome, senha){
    var jt = localStorage.getItem(nome); 
    if(jt!=null){ 
        var pessoa = JSON.parse(jt); 
        if (document.getElementById("nome").value === pessoa.nome && senha === pessoa.senha) {
            window.alert("Boas-vindas alpha players!! Divirta-se aprendendo com a gente 😉");
            localStorage.setItem("usuario_logado",pessoa.nome)
            window.location.href = "/src/pagina-iniciallogada.html";
            
        }
        else{
           window.alert("Poxa 😕! Parece que seus dados estão incorretos, tente novamente ");
        }
    }
}