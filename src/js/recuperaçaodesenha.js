var atual; 
var localStorage = Window.localStorage;

function alterar(nome,senha){
    let jt = localStorage.getItem(nome);
    console.log(jt)
    if(jt!=null){
        var pessoa = JSON.parse(jt);
        console.log(pessoa.nome)
        if(document.getElementById("nome").value === pessoa.nome){
            pessoa.senha = document.getElementById("senha").value;
            window.alert("Sua senha foi alterada com sucesso! Faça login utilizando a nova senha 😉");
        localStorage.setItem(pessoa.nome, JSON.stringify(pessoa));     
        }else{
            window.alert("Poxa 😕! Parece que seus dados estão incorretos, tente novamente ");
        }
    }
   
 }
