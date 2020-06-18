function somaDosPares(x) {
    let moedas = 0;
    for(var i = 0; i <= x; i+=2) {
        moedas = moedas + i; 
   }
    return moedas;
}