/**
 * Calcula el factorial de un número entero no negativo.
 * @param {number} n 
 * @returns {number}
 */
export function factorial(n) {
  if (n < 0) {
    throw new Error('El factorial no está definido para números negativos');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Retorna el n-ésimo número de la secuencia de Fibonacci (0-indexed).
 * @param {number} n 
 * @returns {number}
 */
export function fibonacci(n) {
  if (n < 0) {
    throw new Error('El índice de Fibonacci no puede ser negativo');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}