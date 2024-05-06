describe('Renders Home Page', () => {
  it('should contain the page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a div title
    cy.get('div')
      .contains('iTunes Store: Top Albums')

    // should contain an Select dropdown
    cy.get('Select')
      .select('artist')


    // should contain a search inputBox
    cy.get('input')
      .should('have.value', '')
      .type('taylor')

    // should contain a search button
    cy.get('button')
      .contains('Search')
  })
})