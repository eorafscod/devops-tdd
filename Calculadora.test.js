const Calculadora = require("./Calculadora")

describe("Calculadora", () => {
    it("Criar nova calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number");
        expect(calculadora.resultado).toBe(0);
    });
})

it("obtem resultado", () =>{
    const calculadora = new Calculadora();
    expect(calculadora.resultado).toBeDefined();
    expect(typeof calculadora.resultado).toBe('number');

})

