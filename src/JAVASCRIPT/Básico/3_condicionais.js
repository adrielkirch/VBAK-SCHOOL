/* Condição trate-se de uma regra, caso essa regra for verdadeira então um bloco de código será lido
 */


// Validador de idade sendo adulto ou criança

let galera = [
    ['João', 12],
    ['Gabriel', 18],
    ['Nando', 26],
    ['carlos', 40],
    ['Nathan', 61],
];

let pessoaAtual = galera[0];

if (pessoaAtual[1] < 18) {
    console.log(pessoaAtual[0] + " é piralho.");
} else {
    console.log(pessoaAtual[0] + " é adulto.");
}


// Validador de faixa etária


if (pessoaAtual[1] < 18) {
    console.log(pessoaAtual[0] + " é piralho.");
} else if (pessoaAtual[1] >= 18 && pessoaAtual[1] < 36) {
    console.log(pessoaAtual[0] + "  é jovem.");
} else if (pessoaAtual[1] >= 36 && pessoaAtual[1] < 50) {
    console.log(pessoaAtual[0] + "  é da meia idade.");
} else if (pessoaAtual[1] >= 50 && pessoaAtual[1] < 61) {
    console.log(pessoaAtual[0] + "  é velho.");
} else {
    console.log(pessoaAtual[0] + " esta vivo ainda?");
}