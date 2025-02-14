import { Algoritimos } from "../algoritmos-classe";


describe('teste de manipulação de array', () => {
    let algoritmo: Algoritimos;
    beforeEach(() => {
        algoritmo = new Algoritimos();
    })
    
    test('Dado um array desordenado, o método deve ser retornado o array ordenado', () => {
        const arrayNumeros = [3,2,8,6,4,1];
        const arrayOrdenado = algoritmo.oderdenarArray(arrayNumeros)
        expect(arrayOrdenado).toEqual([1,2,3,4,6,8]);
    });

    test('Dado um array desordenado, o método deve ser retornado um array ordenado decrescente', () => {
        const arrayDesordenado = [1,2,3,4,5];
        const arrayOrdenado = algoritmo.arrayOrdenadoDecrescente(arrayDesordenado);
        expect(arrayOrdenado).toEqual([5,4,3,2,1]);
    })

    test("Dado um array com numeros duplicados, o método deve ser retornado um array sem numeros duplicados", () => {
        const arrayDuplicado = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
        const arraySemDuplicados = algoritmo.arrayDuplicados(arrayDuplicado);
        expect(arraySemDuplicados).toEqual([1,2,3,4,5,6,7]);
    })
})