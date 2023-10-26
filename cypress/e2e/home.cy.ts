describe('Home Page Tests:', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should load the page', () => {
    cy.get('div').contains('John Smith').should('exist');
    cy.get('[data-cy="employeeCard"]').should('have.length', 1);
    // expand ceo
    cy.get('[data-cy="expand-button"]').click();
    // must see 4 node
    cy.get('[data-cy="employeeCard"]').should('have.length', 4);
    // search "john"
    cy.get('input#\\:r1\\:').type('john');
    // must see 2 node
    cy.get('[data-cy="employeeCard"]').should('have.length', 2);
    // search wrong name
    cy.get('input#\\:r1\\:').type('johnFoo');
    // must see 0 node
    cy.get('[data-cy="employeeCard"]').should('have.length', 0);
  });
});
