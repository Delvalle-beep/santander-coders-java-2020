function maisMenos(arrayLista) {

    filtrado = []

    let positivo = arrayLista.filter((item) => item > 0)
    let zeros = arrayLista.filter((item) => item == 0)
    let negativos = arrayLista.filter((item) => item < 0)

    filtrado[0] = (positivo.length / arrayLista.length)
    filtrado[1] = (zeros.length / arrayLista.length)
    filtrado[2] = (negativos.length / arrayLista.length)

    return filtrado
}

console.log(maisMenos([0, 0, 0, 0]));