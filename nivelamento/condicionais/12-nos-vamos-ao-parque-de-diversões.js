function podeSubir (alturaPessoa, vemComCompania, temProblemaCardiaco) {
    return (alturaPessoa >= 1.5 && temProblemaCardiaco !== true) || (alturaPessoa >= 1.2 && vemComCompania == true && temProblemaCardiaco !== true);
}