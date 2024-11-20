
type Operacion = {
    [key: string]: (a:number, b:number) => number
}

function operar(operacion: string = "", a: number, b: number) {

    const operaciones : Operacion = {
        'suma': suma,
        'resta': restar,
        'multiplicacion': multiplicar,
        'division': dividir
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

export { suma, operar, restar, multiplicar, dividir };