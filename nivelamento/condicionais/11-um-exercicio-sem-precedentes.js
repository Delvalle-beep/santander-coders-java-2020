function podeSeAposentar(idade, sexo, anos){
    if (idade > 60 && sexo == "F" && anos > 30) {
    return true;
} else if (idade > 65 && sexo == "M" && anos > 30) {
    return true;
} else 
    return false;
}