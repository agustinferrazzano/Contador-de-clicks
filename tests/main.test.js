/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import path from 'path';

describe('Contador de Clicks', () => {
  beforeEach(() => {
    // Cargar el HTML antes de cada prueba
    document.body.innerHTML = fs.readFileSync(
      path.resolve(__dirname, '../index.html'),
      'utf8'
    );
    localStorage.clear();
    jest.resetModules();

    // Usar require() para importar main.js (funciona mejor con Jest)
    require('../main.js');
  });

  it('debe mostrar contador inicial en 0 si no hay nada en localStorage', () => {
    const contador = document.getElementById('contador');
    expect(contador.textContent).toBe('Clicks: 0');
  });

  it('debe incrementar el contador al hacer click', () => {
    const boton = document.getElementById('botonClick');
    const contador = document.getElementById('contador');
    boton.click();
    expect(contador.textContent).toBe('Clicks: 1');
  });

  it('debe persistir el valor en localStorage', () => {
    const boton = document.getElementById('botonClick');
    boton.click();
    expect(localStorage.getItem('clicks')).toBe('1');
  });
});
