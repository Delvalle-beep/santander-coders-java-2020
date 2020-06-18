function somaLucroSemestre(umSemestre) {
    return umSemestre[0] + umSemestre[1] +
        umSemestre[2] + umSemestre[3] +
        umSemestre[4] + umSemestre[5];
}

console.log(somaLucroSemestre([80, 453, 1000]));
console.log(somaLucroSemestre([80, 453, 25, 1000]));
console.log(somaLucroSemestre([80, 85, 25, 453, 1000]));