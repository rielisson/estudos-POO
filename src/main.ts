import { Algoritimos } from "./algoritmos-classe";
import { ConsoleApplication } from "./application/console-classe";
import { WebApplication } from "./application/web-classe";
import { Application } from "./interfaces/application.interface";

function main(app: Application) {
    app.run();
}

// const manipulacao = new Algoritimos();
// const applicationConsole =  new ConsoleApplication(manipulacao)

// main(applicationConsole);

const applicationWeb = new WebApplication();
main(applicationWeb);