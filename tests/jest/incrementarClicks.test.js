import { inicializarContador } from '../../src/main.js';

describe('Test contador', () => {
  let boton;
  let contador;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="botonClick">Click me</button>
      <p id="contador">Clicks: 0</p>
    `;

    boton = document.getElementById('botonClick');
    contador = document.getElementById('contador');

    inicializarContador(boton, contador);
  });

  test('Incrementa correctamente', () => {
    boton.click();
    expect(contador.textContent).toBe('Clicks: 1');

    boton.click();
    expect(contador.textContent).toBe('Clicks: 2');
  });
});
