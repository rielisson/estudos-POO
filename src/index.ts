
export class Algoritimos {

    oderdenarArray(arrayParams: Array<number>) {
        let array = arrayParams;
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[i]) {
                    let aux = array[i];
                    array[i] = array[j];
                    array[j] = aux;
                }
            }
        }
        return array;
    }
    
} 