let nomeUsuário = "" ;
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuário==""){
    nomeUsuário = prompt("Qual o seu nome?");
 }

if(nomeUsuário == null){
    elemento.textContent = "Seja muito bem-Vindo, meu jovem.";
}else{
    elemento.textContent = nomeUsuário;
}

 
