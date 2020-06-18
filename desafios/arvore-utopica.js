function alturaArvoreUtopica(ciclos){
    var altura = 1;
    var isPrimavera = true;
    var i = 0;

    while (i < ciclos){
        if(isPrimavera){
            altura = altura * 2
            isPrimavera = false;
        }
        else{
            altura = altura + 1
            isPrimavera = true;
        }
        i++;
    }
    return altura;
}

alturaArvoreUtopica(0)
alturaArvoreUtopica(3)
alturaArvoreUtopica(5)