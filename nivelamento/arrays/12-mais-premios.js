var medalhas = ["ouro", "prata", "bronze", "nada"];

function medalhaDeAcordoComPosto(numero) {
    if (numero == 1) {
        return medalhas[0];
    } else if (numero == 2) {
        return medalhas[1];
    } else if (numero == 3) {
        return medalhas[2];
    } else {
        return "nada";
    }
};