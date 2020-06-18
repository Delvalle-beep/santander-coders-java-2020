function possoIrAoBanco (diaDaSemana, horaAtual) {
    return diaDaSemana != "sábado" && diaDaSemana != "sabado" && diaDaSemana != "Sábado" && diaDaSemana != "domingo" && diaDaSemana != "Domingo" && horaAtual >= 9 && horaAtual <= 15
}