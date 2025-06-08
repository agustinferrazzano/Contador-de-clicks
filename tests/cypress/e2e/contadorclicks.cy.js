describe('Contador de Clicks', () => {
  beforeEach(() => { //antes de cada it, visita la pagina
    cy.visit('https://continuous-integration-rbne.onrender.com');
  });

  it('debe incrementar el contador al hacer click', () => { 
    cy.contains('Clicks: 0'); //busca el elemento con ese texto
    cy.get('#botonClick').click(); //busca el elemento con ese id, simula un click
    cy.get('#botonClick').click();
    cy.contains('Clicks: 2'); //verifica que haya un elemento con el texto Clicks: 2
  });
});