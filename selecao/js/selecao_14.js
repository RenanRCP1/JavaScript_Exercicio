
function controllerOrdem() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);

    var resposta = calcular(valor1, valor2);
    saidaDados("resultado: " + resposta);
}

function calcular(valor1 = 0, valor2 = 0) {
    var temp = 0;
    if (valor1 > valor2) {
        return "O Grêmio é vencedor"
    }

    if (valor1 < valor2) {
        return "O Inter é o vencedor"
    }
    else {
        return "Empate"
    }

}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}

