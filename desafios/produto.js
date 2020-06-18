function produto(arrayLista) {
    let fatores = 1;
    for (valor of arrayLista) {
      fatores *= valor;
    }
    return fatores;
}   

console.log(produto([1, 4, 7]));