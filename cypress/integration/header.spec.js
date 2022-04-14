before(() => {
  cy.visit('/')
})

describe('Logo', () => {
  it('Logo is shown', () => {
    cy.get("header img[alt='logo']").should('be.visible')
  })
})
describe('Navigation', () => {
  it('Navigation is shown', () => {
    cy.get('header ul.navigation').should('be.visible')
  })
  it('Navigation displays menu links', () => {
    cy.get('header ul.navigation')
      .should('contain', 'Home')
      .and('contain', 'Shop')
      .and('contain', 'Sales')
      .and('contain', 'Brand')
      .and('contain', 'About us')
  })
  it('Navigation should work', () => {
    cy.get('header ul.navigation').contains('Shop').click()
    cy.url('includes', 'shop/page/1')
    cy.get('header ul.navigation').contains('Sales').click()
    cy.url('includes', 'shop/page/1?discount=true')
    cy.get('header ul.navigation').contains('Brand').click()
    cy.url('includes', 'brand')
    cy.get('header ul.navigation').contains('About us').click()
    cy.url('includes', 'about')
    cy.get('header ul.navigation').contains('Home').click()
  })
})

describe('Profile', () => {
  it('Profile section is shown', () => {
    cy.get('[data-testid="profile"]').should('be.visible')
  })
  it('Multi-language should work', () => {
    cy.get('.select-language').eq(1).select('fi')
    cy.url('includes', 'fi')
    cy.get('.select-language').eq(1).select('se')
    cy.url('includes', 'se')
    cy.get('.select-language').eq(1).select('en')
  })
})

describe('Search', () => {
  it('Search component is shown', () => {
    cy.get('header input')
      .invoke('attr', 'placeholder')
      .should('contain', 'Search...')
  })
})
