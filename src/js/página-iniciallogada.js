
window.onload = function usuarioLogado() {
   let nomeUsuario = localStorage.getItem('usuario_logado');
   var tagA = document.getElementById("nome");
   tagA.innerHTML = `${nomeUsuario}`; 
   
}





