import sum from './sum.js';

describe('Pruebas unitarias para la función sum', () => {
  
  test('Debe sumar correctamente 2 + 3 y retornar 5', () => {

    const resultado = sum(2, 3);
    
    expect(resultado).toBe(5);
  });

  test('Debe sumar correctamente números negativos: -1 + (-5) debe ser -6', () => {
    expect(sum(-1, -5)).toBe(-6);
  });

});