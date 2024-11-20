import { esPrimo } from "../../src/app/numeros";

describe('Batería de pruebas de numeros', () => {
    test('Debe identificar números primos', () => {
        expect(esPrimo(4)).toBeFalsy()
        expect(esPrimo(2)).toBeTruthy()
    });
    test('Debe devolver falso si el número es inferior a 2', () => {
        expect(esPrimo(1)).toBeFalsy()
    });
});