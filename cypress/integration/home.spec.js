before(() => {
  cy.visit('/')
})

describe('Body', () => {
  it('Banner is shown', () => {
    cy.get('.banner').should('be.visible')
  })
  it('3 item lists are shown', () => {
    cy.get('.container')
      .should('contain', 'Weekly offer')
      .and('contain', 'New products')
      .and('contain', 'Best selling')
  })
  it('Collection is shown', () => {
    cy.get('h2').should('contain', 'Explore our collections')
  })
})

describe('Footer', () => {
  it('Footer is shown', () => {
    cy.get('footer').should('be.visible')
  })
  it('Footer has 4 columns', () => {
    cy.get('footer').find('h3').should('have.length', 4)
  })
})
