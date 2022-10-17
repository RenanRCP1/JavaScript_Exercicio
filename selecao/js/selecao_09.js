
function controllerOrdem() {
    var valor1 = parseInt(document.getElementById("valor1").value);

    var resposta = calcular(valor1);
    saidaDados("R$ " + resposta);
}

function calcular(valor1 = 0) {
    var maca1 = valor1 * 0.30;
    var maca2 = valor1 * 0.25;

    if (valor1 < 12) {
        return maca1
    }
    else {
        return maca2
    }


}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}
