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
        localStorage.setItem(pessoa.nome, JSON.stringify(pessoa));     
        }else{
        console.log(`nome ${pessoa.nome} incorreta`);
        }
    }
   
 }
