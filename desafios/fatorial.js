function fatorial(n) {
    let calculo = 1;
    for (let i = 2; i <= n; i++) {
          calculo = calculo * i;
      }
      return calculo;
  }
  
  console.log(fatorial(5));