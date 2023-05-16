describe('visual tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('body').should('be.visible');
    cy.get('body').should('not.have.css', 'display', 'none');
  });

  it('display the home page correctly', () => {
    cy.screenshot("screenshot-home");
  });
});
