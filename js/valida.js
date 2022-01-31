function validaForm(){
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let servico = document.getElementById("servico");
let mensagem = document.getElementById("mensagem");

if(nome.value == ""){
    alert("Nome não informado.");
    
    return
} 
if(email.value == ""){
    alert("E-mail não informado.")

    return
}
if(telefone.value == ""){
    alert("Telefone não informado.")

    return
}
if(servico.value == ""){
    alert("Opção de serviço não escolhida.")

    return
}
if(mensagem.value == ""){
    alert("Mensagem não informado.")

    return
}

alert("Formulário enviado com sucesso!")

}