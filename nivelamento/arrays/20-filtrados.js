function saldoDeMesesComLucro(umPeriodo) {
    let mesesPositivos = [];
    for (let mes = 0; mes< umPeriodo.length; mes++) {
      if (umPeriodo[mes] > 0){
         mesesPositivos.push(umPeriodo[mes]);
      }    
    }
    return mesesPositivos;
  }
  console.log(saldoDeMesesComLucro([100, 20, 0, -10, 10]));