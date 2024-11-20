import { esPalindromo } from "../../src/app/palabras";

describe('Batería de pruebas de palabras', () => {
    test('Debe identificar si es palíndromo', () => {
        expect(esPalindromo("somos")).toBeTruthy();
        expect(esPalindromo("ornitorrinco")).toBeFalsy();
    });
    test('Debe devolver falso cuando el string es vacío', () => {
        expect(esPalindromo("")).toBeFalsy();
    });
});