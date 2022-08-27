function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Wadd',
  sobrenome: 'Franklin',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Wadd', 'Franklin');
pessoa.exibirNome();

export { pessoa };
