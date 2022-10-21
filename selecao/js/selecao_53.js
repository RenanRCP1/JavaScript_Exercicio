function controllercalculo() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var resultdado = calculoResultado(nota1, nota2, nota3, nota4)

    saidaDados(resultdado);

}


function calculoResultado(nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0) {
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 5) {
        return "Aprovado " + media
    }
    else {
        return "reprovado " + media
    }

}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}


function montarObjeto(numero1, numero2, numero3, numero4, result) {
    let obj = {
        nota1: numero1,
        nota2: numero2,
        nota3: numero3,
        nota4: numero4,
        resultado: result
    }
    salvarDados(obj);
    recuperarDados();
    return obj
}

function salvarDados(obj) {
    let storage = JSON.parse(localStorage.getItem("calculo"))
    if (storage == null) {
        storage = []
    }
    storage.push(obj);

    localStorage.setItem("calculo", JSON.stringify(storage));
}

function recuperarDados() {
    let storage = JSON.parse(localStorage.getItem("calculo"));
    if (storage != null) {
        let texto = "";
        for (var i = 0; i < storage.length; i++) {
            texto += storage[i].valor1 + " - " + storage[i].valor2 + " - " + storage[i].operacao + " - " + storage[i].resultado + "<br>";
        }
        document.getElementById("dados_banco").innerHTML = texto;
    }
}