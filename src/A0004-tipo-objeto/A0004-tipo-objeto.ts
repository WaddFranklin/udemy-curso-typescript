const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveB = 'Outro Valor';
objetoA.chaveC = 'Nova Chave';

console.log(objetoA);
