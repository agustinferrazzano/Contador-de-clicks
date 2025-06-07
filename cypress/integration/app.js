/*global cy*/

describe('Contador de Clicks - Test End-to-End', () => {
  beforeEach(() => {
    // Visitar la página principal antes de cada prueba
    cy.visit('index.html');
  });

  it('debe mostrar el contador inicial en 0', () => {
    // Verificar que el contador muestra "Clicks: 0" al principio
    cy.get('#contador').should('have.text', 'Clicks: 0');
  });

  it('debe incrementar el contador al hacer click en el botón', () => {
    // Realizar un clic en el botón
    cy.get('#botonClick').click();

    // Verificar que el contador ha incrementado
    cy.get('#contador').should('have.text', 'Clicks: 1');
  });

  it('debe persistir el valor en localStorage después de recargar', () => {
    // Hacer clic en el botón varias veces
    cy.get('#botonClick').click();
    cy.get('#botonClick').click();

    // Recargar la página
    cy.reload();

    // Verificar que el contador persiste el valor después de la recarga
    cy.get('#contador').should('have.text', 'Clicks: 2');
  });

  it('debe mostrar el contador en 0 si se borra el localStorage', () => {
    // Hacer clic en el botón
    cy.get('#botonClick').click();

    // Borrar el localStorage
    cy.window().then((window) => {
      window.localStorage.clear();
    });

    // Recargar la página
    cy.reload();

    // Verificar que el contador vuelve a 0
    cy.get('#contador').should('have.text', 'Clicks: 0');
  });
});
