function acontece(arrayLista, numeroMinimo) {
    let pontuais = [];
    for (let i = 0; i < arrayLista.length; i++) {
        if (arrayLista[i] <= 0) {
            pontuais.push(arrayLista[i]);

        };
    };
    return pontuais.length >= numeroMinimo;
}

var alunosDaSegunda = [10, -5, 5, -2, 11, 3, 0];
console.log(acontece(alunosDaSegunda, 2));

var alunosDaTerca = [-2, 11, 3, 0]
var alunosDaQuarta = [-10, -5, 31, -2, -3, 0]

function aberturas(arraysDias, numeroMinimo) {
    let resultado = [];
    for (let i = 0; i < arraysDias.length; i++) {
        resultado.push(acontece(arraysDias[i], numeroMinimo));
    };
    return resultado
}

console.log(acontece([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 3))