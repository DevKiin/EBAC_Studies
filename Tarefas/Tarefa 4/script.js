function calcularImc() {
    // Variaveis 
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value) / 100;

    // Processamento
    let imc = peso / (altura * altura);

    //Saida
    console.log("Entrada: " + peso);
    console.log("Entrada: " + altura);
    console.log("IMC: " + imc);
    //Resultado impresso
    document.getElementById("resultado").textContent = "O IMC calculado eh: " + imc.toFixed(3);

    if (imc > 25) {
        console.log("IMC acima do ideal");
        document.getElementById("resultadoPonderado").textContent = "IMC acima do ideal"
    } else if (imc < 18) {
        console.log("IMC abaixo do ideal")
        document.getElementById("resultadoPonderado").textContent = "IMC abaixo do ideal"
    } else {
        console.log("Esta dentro da faixa saudavel!")
        document.getElementById("resultadoPonderado").textContent = "Esta dentro da faixa saudavel!"
    }
}