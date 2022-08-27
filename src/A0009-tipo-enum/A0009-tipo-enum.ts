enum Cores {
  VERMELHO = 10, // 1
  AZUL = 100, // 2
  AMARELO = 200, // 3
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[10]);
console.log(Cores.ROSA);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
