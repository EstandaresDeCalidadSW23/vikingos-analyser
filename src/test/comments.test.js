import { expect } from 'vitest';
import { lexico } from '../utils/lexical/index'

describe("Test Comments On The Code", () => {
    test("Test Code With Comment ", () => {

        expect(lexico("#this is a comment")).toEqual({
            count: {
                identificadores: 0,
                numeros: 0,
                pr: 0,
                simbolos: 0
            },
            display: "<COMENTARIO> this is a comment </FIN COMENTARIO>",
            result: ["#this is a comment", "<COMENTARIO>"]
        });

    });

    test("Test Code Without Comments", () => {
        expect(lexico("variable a = 1")).toEqual({
            count: {
                identificadores: 2,
                numeros: 1,
                pr: 0,
                simbolos: 1
            },
            display: "variable a es igual a 1",
            result: ["variable", "a", "=", 1]
        });
    });

});

