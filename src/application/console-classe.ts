import { Application } from "../interfaces/application.interface";
import * as readline from "readline";
import { ManipulaçãoDeArray } from "../interfaces/manipulacao-array-classe.interface";
import { Algoritimos } from "../algoritmos-classe";

export class ConsoleApplication implements Application {
  private manipularArray!: ManipulaçãoDeArray;

  constructor(manipularArray: ManipulaçãoDeArray) {
    this.manipularArray = manipularArray;
  }

  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  run(): void {
  }

  setDadoConsole(callback: (answer: string) => void) {
    this.rl.question('menu: \nOrdenar 1;\nOrdenar Decrescente 2;\nopção 3;\nopcao 4 (SAIR)\n', (answer: string) => callback(answer));
  }

  verificaEntradaUsuarioConsole = (answer: string) => {
    if (answer === '1') {
      console.log('vc selecionou 1');
      this.ordenarArray()
    } else if (answer === '2') {
      console.log('vc selecionou 2');
      this.ordenarArrayDecrescente();
    } else if (answer === '3') {
      console.log('vc selecionou 3');
    } else if (answer === '4') {
      console.log('vc encerrou o programa');
      this.rl.close()
      return;
    }
    this.setDadoConsole(this.verificaEntradaUsuarioConsole);
  }

  ordenarArray() {
    this.rl.question('Digite quantos os numeros que vão ser ordenados\nobs separe por virgular;\n', (numerosIndice: string) => {
      let arrayString = numerosIndice.split(`,`);
      let arrayNumber = arrayString.map(Number);
      let arrayOrdenado = this.manipularArray.oderdenarArray(arrayNumber)
      console.log(arrayOrdenado);
      console.log("O Array foi ordenado com sucesso;");
      
      this.setDadoConsole(this.verificaEntradaUsuarioConsole);
    })
  }

  ordenarArrayDecrescente() {
    this.rl.question('Digite quantos os numeros que vão ser ordenados decrescente\nobs separe por virgular;\n', (numerosIndice: string) => {
      let arrayString = numerosIndice.split(`,`);
      let arrayNumber = arrayString.map(Number);
      let arrayOrdenado = this.manipularArray.arrayOrdenadoDecrescente(arrayNumber);
      console.log(arrayOrdenado);
      console.log("O Array foi ordenado com sucesso;");
      this.setDadoConsole(this.verificaEntradaUsuarioConsole);
    })
  }
}

const manipulacao = new Algoritimos
const consoleApplication = new ConsoleApplication(manipulacao);
// console.log(consoleApplication.oderdenarArray([1,4,3,6,2,10,20,14]));

consoleApplication.setDadoConsole(consoleApplication.verificaEntradaUsuarioConsole);

