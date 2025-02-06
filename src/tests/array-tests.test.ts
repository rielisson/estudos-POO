import { Algoritimos } from "..";


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
        expect([3,2,8,6,4,1]).toBe([8,6,4,3,2,1]);
    })

})