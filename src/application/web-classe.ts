import { Application } from "../interfaces/application.interface";

export class WebApplication implements Application {
    run(): void {
        console.log("tamo no app web")
    }
    setDadosWeb() {
        
    }
    
}