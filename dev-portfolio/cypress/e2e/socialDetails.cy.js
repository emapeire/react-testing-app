describe('social details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('have correct social links', () => {
    cy.get('[data-testid="github"]').should(
      'have.attr',
      'href',
      'https://github.com/emapeire'
    );
    cy.get('[data-testid="twitter"]').should(
      'have.attr',
      'href',
      'https://twitter.com/emapeire'
    );
    cy.get('[data-testid="instagram"]').should(
      'have.attr',
      'href',
      'https://www.instagram.com/emapeire'
    );
  });
});

