/*
seletor por
tag:nome-tag
id:id-tag
classe:nome-classe
document.querySelector=Retorna o -primeiro- elemento html que encontrar com o seletor informado
.querySelector retorna um item.
se for id use #

Como ler e preencher valores:
.value:p/campos input
.innerHTML p/ tags com conteudo(que possuem abertura e fechamento)

form=action é para enviar formulário sem usar JavaScript

alert=Mostra mensagem na tela (mostra o valor entre parenteses como uma var ou uma frase entre aspas)

Element é o que aparece em JS (classe geral mais base)

ondbclick=on double click (auto explicatório)
p/limpar div só chamar a função e colocar nome("") p o valor ficar vazio

 document.querySelector("#id").value + Enter retorna o valor do id.Se for um form retorna o que está escrito nele.
(Qualquer coisa diferente de string, numero e boolean é um objeto.)
 */

function salvar() {
    alert("Clicou em Salvar");
    var htmlNomeAluno= document.querySelector("#txtNomeAluno");
    var nomeAluno = htmlNomeAluno.value;
    alert(nomeAluno);
    if (htmlNomeAluno.value==""){
        alert("Preencha o campo nome.");
    }
}
function ExibirMensagem(msg){
    const divMsg = document.querySelector("#mensagem");
    divMsg.innerHTML = msg;
}