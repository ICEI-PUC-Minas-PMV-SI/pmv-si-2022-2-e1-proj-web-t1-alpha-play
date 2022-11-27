var atual; 
var localStorage = Window.localStorage;

function alterar(nome,senha)
    var jt = localStorage.getItem(nome);
    if(jt!=null){
        var pessoa = JSON.parse(jt);
        if(document.getElementById("nome").value){
        var novo = new Object();
        novo.senha=document.getElementById("senha").value;  var jt = JSON.stringify(novo); 
        localStorage.setItem(novo.nome, jt);     
    }
    else{
        console.log(`senha ${teste} incorreta`);
        }
    }
