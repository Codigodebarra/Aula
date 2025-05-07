/*
tudo que tiver parentes é função:
function NomeFuncao(){

}
*/
function CalcularMedia() {
    var nomeAluno = "Joaozinho";
    var notaBim1 = 10;
    var notaBim2 = 7;
    nomeAluno = prompt("Informe o nome do aluno:");
    notaBim1 = Number(prompt("Nota do Primeiro Bimestre:"));
    notaBim2 = Number(prompt("Nota do Segundo Bimestre"));
    var media = ((notaBim1 + notaBim2) / 2);
    console.log(`A média do aluno ${nomeAluno} para as notas ${notaBim1} e ${notaBim2} é: ${media}`);
}

function SomarDois(){
    var valorUm = 0;
    var valorDois =0;
    valorUm = Number(prompt("Digite um valor:"));
    valorDois = Number(prompt("Digite outro valor:"));
    var resultado=(valorUm + valorDois);
    console.log(resultado)
}