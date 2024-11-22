import app from '../src/server.js';
import request from 'supertest';

import { configuration } from '../src/config.js'

const { username, apikey } = configuration

describe("Bateria de test de servidor", () => {

    test("Servidor en endpoint /", async () => {

        return await request(app)
            .get('/')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe(`Hola mundo al usuario ${ username }`);
            });
    });

    test("Servidor en endpoint /api-key", async () => {

        return await request(app)
            .get('/api-key')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe(`la apikey de mi aplicacion es: ${ apikey }`);
            });
    });

    test("Servidor en endpoint /operar", async () => {

        return await request(app)
            .get('/operar?operacion=suma&num1=1&num2=1')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe(`El resultado de la operacion es: 2`);
            });
    });

    test("Servidor en endpoint /palindromo", async () => {

        return await request(app)
            .get('/palindromo?frase=la ruta natural')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe(`Hola, La frase ingresada es palindromo`);
            });
    });

    test("Servidor en endpoint /palindromo", async () => {

        return await request(app)
            .get('/palindromo?frase=Hola como estas')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe(`Hola, La frase ingresada no es palindromo`);
            });
    });

    test("Servidor en endpoint /primo", async () => {

        return await request(app)
            .get('/primo?numero=2')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe(`Hola, el numero ingresado es un numero primo`);
            });
    });

    test("Servidor en endpoint /primo", async () => {

        return await request(app)
            .get('/primo?numero=4')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe(`Hola, el numero ingresado no es un numero primo`);
            });
    });

});