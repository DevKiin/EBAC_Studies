//Gerar um Valor aleatório entre 1 e 100
let valorAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
//Jogador deve tentar adivinhar o valor gerado
// imprimir o numero aleatorio no console para fins de teste
console.log("Valor Aleatório: " + valorAleatorio);
//Função para verificar se o valor digitado é igual ao valor gerado
function verificarValor() {
    let valorDigitado = parseInt(document.getElementById("valorDigitado").value);
    //Incrementar o número de tentativas
    tentativas++;
    //Se Tentativas for maior, menor que 10, o jogador perdeu
    if (tentativas > 10) {
        document.getElementById("resultado").textContent = "Você perdeu! O valor era: " + valorAleatorio;
        document.getElementById("tentativas").textContent = "Número de tentativas: " + tentativas;
        return;
    } else if (valorDigitado === valorAleatorio) {
        document.getElementById("resultado").textContent = "Parabéns! Você acertou o valor em " + tentativas + " tentativas!";
        document.getElementById("tentativas").textContent = "Número de tentativas: " + tentativas;
        console.log("Número de tentativas: " + tentativas);
    } else if (valorDigitado < valorAleatorio) {
        document.getElementById("resultado").textContent = "O valor digitado é menor que o valor gerado. Tente novamente!";
        document.getElementById("tentativas").textContent = "Número de tentativas: " + tentativas;
        console.log("Número de tentativas: " + tentativas);
    } else if (valorDigitado > valorAleatorio) {
        document.getElementById("resultado").textContent = "O valor digitado é maior que o valor gerado. Tente novamente!";
        document.getElementById("tentativas").textContent = "Número de tentativas: " + tentativas;
        console.log("Número de tentativas: " + tentativas);
    }
}