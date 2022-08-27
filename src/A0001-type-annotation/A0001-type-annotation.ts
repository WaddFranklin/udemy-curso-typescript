/* eslint-disable */

// tipos primitivos
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
/* let big: bigint = 10n; */

// arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['1', '2', '3'];

// objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: "Wadd",
  idade: 33
};

// funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
