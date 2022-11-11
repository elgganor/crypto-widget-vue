describe('Crypto Widget', () => {
  it('should be visible', () => {
    // Given a user visits http://localhost:5173
    cy.visit('/');

    // Then he should see the widget card
    cy.get('[data-test-id="widget"]').should('be.visible');

    // And a search bar
    cy.get('[data-test-id="widget-search-input"]').should('be.visible');

    // And a search button
    cy.get('[data-test-id="widget-search-button"]').should('be.visible');
  });

  it('should retrieve data for a valid symbol', () => {
    // Given a user visits http://localhost:5173
    cy.visit('/');

    // When he enters a symbol in search bar
    cy.get('[data-test-id="widget-search-input"]').type('ETHBTC');

    // And he clicks on search button
    cy.get('[data-test-id="widget-search-button"]').click();

    // Then he should see the symbol, the low price and the high price of that cryptocurrency
    cy.get('[data-test-id="widget-result-symbol"]').should('be.visible');
    cy.get('[data-test-id="widget-result-high-price"]').should('be.visible');
    cy.get('[data-test-id="widget-result-low-price"]').should('be.visible');
  });

  it('should show an error when symbol is invalid', () => {
    cy.visit('/');

    // When he enters an invalid symbol in search bar
    cy.get('[data-test-id="widget-search-input"]').type('ETHBBB');

    // And he clicks on search button
    cy.get('[data-test-id="widget-search-button"]').click();

    // Then he should see an error
    cy.get('[data-test-id="widget-error"]').should('be.visible');
  });
});