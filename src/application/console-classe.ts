import { Application } from "../interfaces/application.interface";
import * as readline from "readline";

export class ConsoleApplication implements Application {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });  
  run(): void {
  }

    setDadoConsole(callback: (answer: string) => void) {
      this.rl.question('menu: \nOrdenar 1;\nOrdenar Decrescente 2;\nopção 3;\nopcao 4 (SAIR)\n',  (answer: string) => callback(answer));
    }
      
  
    verificaEntradaUsuarioConsole = (answer: string) => {
      if ( answer === '1') {
        console.log('vc selecionou 1');
        this.ordenarArray()
      }else if ( answer === '2') {
        console.log('vc selecionou 2'); 
      }else if ( answer === '3') {
        console.log('vc selecionou 3'); 
      } else if(answer === '4') {
        console.log('vc encerrou o programa');
        this.rl.close()
        return ;
      }
      this.setDadoConsole(this.verificaEntradaUsuarioConsole);
    }
    ordenarArray() {
      this.rl.question('Digite quantos numeros que vão ser ordenados;\n', (numerosIndice: string) => {
        
      })
    }

}

const consoleApplication = new ConsoleApplication();


consoleApplication.setDadoConsole(consoleApplication.verificaEntradaUsuarioConsole);