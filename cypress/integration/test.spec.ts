describe('App tests', function () {
  it('Inputs are rendered', function () {
    cy.visit('http://localhost:3000');
    cy.contains('Profit counter');

    cy.get('#km').should('exist');
    cy.get('#kmPrice').should('exist');
    cy.get('#hours').should('exist');
    cy.get('#hourPrice').should('exist');
    cy.get('#offer').should('exist');
  });

  it('Valid inputs render right results', () => {
    cy.visit('http://localhost:3000');

    cy.get('#km').type('180');
    cy.get('#kmPrice').type('9');
    cy.get('#hours').type('3');
    cy.get('#hourPrice').type('45');
    cy.get('#offer').type('2500');

    cy.get('#btn-count').click();

    cy.get('#distance-cost-result').should('include.text', '1620.00 euros');
    cy.get('#time-cost-result').should('include.text', '135.00 euros');
    cy.get('#income-result').should('include.text', '2500.00 euros');
    cy.get('#profit-result').should('include.text', '745');
  });
  it('Required validations works on inputs if you click count button immediately', () => {
    cy.visit('http://localhost:3000');

    cy.get('#btn-count').click();

    cy.get('#km-error').should('exist');
    cy.get('#kmPrice-error').should('exist');
    cy.get('#hours-error').should('exist');
    cy.get('#hourPrice-error').should('exist');
    cy.get('#offer-error').should('exist');
  });
});
