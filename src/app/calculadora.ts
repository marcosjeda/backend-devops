
type Operacion = {
    [key: string]: (a:number, b:number) => number
}

function operar(operacion: string = "", a: number, b: number) {

    const operaciones : Operacion = {
        'suma': suma,
        'resta': restar,
        'multiplicacion': multiplicar,
        'division': dividir,
        'potencia': potencia,
        'factorial': factorial
    }

    if (!Object.keys(operaciones).includes(operacion)) {
        return
    }

    return operaciones[operacion](a, b);
}

function suma(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    if (b === 0) {
        throw new Error("No se puede dividir por cero")
    }

    return a / b;
}

function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede exponenciar valores indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return Math.pow(a, b);
}

function factorial(a: number) {
    if ( a === undefined ) {
        throw new Error("No se puede obtener el factorial de un valor indefinido");
    }
    if ( typeof a !== 'number' ) {
        return NaN;
    }
    if ( a < 0 ) {
        throw new Error("No se puede obtener el factorial de un número negativo");
    }
    let factorial = 1
    for ( let i = 1; i <= a; i++ ) {
        factorial *= i
    }

    return factorial
}

export { suma, operar, restar, multiplicar, dividir, potencia, factorial };