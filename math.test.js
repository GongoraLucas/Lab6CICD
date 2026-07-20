import { factorial, fibonacci } from './math.js';

describe('Pruebas unitarias para la función factorial', () => {
  test('Debe retornar 1 para el factorial de 0 y 1', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  test('Debe calcular correctamente el factorial de un número positivo (5! = 120)', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Debe lanzar un error si se ingresa un número negativo', () => {
    expect(() => factorial(-1)).toThrow('El factorial no está definido para números negativos');
  });
});

describe('Pruebas unitarias para la función fibonacci', () => {
  test('Debe retornar los casos base de Fibonacci (n=0 -> 0, n=1 -> 1)', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  test('Debe calcular correctamente el n-ésimo número de Fibonacci (n=6 -> 8)', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('Debe lanzar un error si se ingresa un índice negativo', () => {
    expect(() => fibonacci(-3)).toThrow('El índice de Fibonacci no puede ser negativo');
  });
});