function caloriasDeTrote (numero){
    let calorias = 0;
    for (var i = 0; i <= numero; i++) {
        calorias = calorias + (5 * i);
    }
    return calorias;
}