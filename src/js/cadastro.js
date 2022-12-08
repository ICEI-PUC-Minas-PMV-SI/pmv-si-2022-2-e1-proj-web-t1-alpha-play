var atual; 
var localStorage = Window.localStorage;

function cadastrar(){ 
    var novo = new Object(); 
    novo.nome=document.getElementById("nome").value; 
    novo.senha=document.getElementById("senha").value; 
    novo.confsenha=document.getElementById("confsenha").value; 
    window.alert("Cadastro concluído! Faça Login 😉");
    var jt = JSON.stringify(novo); 
    localStorage.setItem(novo.nome, jt); 

}