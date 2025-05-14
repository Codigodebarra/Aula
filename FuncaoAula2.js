
/*
com 2 variaveis:
function PedirTexto() {
    const Empty = "";
    const texto = prompt("digite um texto:");
    if (texto != Empty) {
        console.log("O texto não está vazio");
    }
    else {
        console.log("O texto está vazio");
    }
}
*/

function PedirTexto() {
    const texto = prompt("digite um texto:");
    if (texto != "") {
        console.log("O texto não está vazio");
    }
    else {
        console.log("O texto está vazio");
    }
}

function ValidarNumero(){
    const texto = prompt ("Digite um número:");
    if(isNaN(texto) == true){
        console.log("Não é um número.");
    }else if(!isNaN(texto) == Number(texto) % 2==0){
        console.log("é um número par");
    }
    else{
        console.log("é um número ímpar");
    }
}

/*
IsNaN(texto) == true | false (significa is not a number.True se não for numero)
!isNan(var) e isNan(texto) == false são a mesma coisa.
*/
