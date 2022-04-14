before(() => {
  cy.visit('/shop/page/1')
})

describe('Breadcrumbs', () => {
  it('Breadcrumb is shown', () => {
    cy.get('[aria-label="breadcrumbs"]')
      .should('be.visible')
      .and('contain', 'Home')
      .and('contain', 'Shop')
  })
})

describe('Left navigation', () => {
  it('Left navigation is shown', () => {
    cy.get('.left-nav').should('be.visible')
  })
  it('Left navigation has all filters', () => {
    cy.get('.left-nav')
      .should('contain', 'Gender')
      .and('contain', 'Price')
      .and('contain', 'Brand')
      .and('contain', 'Sale')
  })
  it('Gender filter should work', () => {
    cy.get('.gender').contains("Women's fragrances").click()
    cy.url().should('include', 'gender=women')
    cy.get('.remove-filter').click()
  })
  it('Brand filter should work', () => {
    cy.get('.brand-list').contains('Dior').click()
    cy.url().should('include', 'brand=dior')
    cy.get('.remove-filter').click()
  })
  it('Brand filter list should work', () => {
    cy.get('input[data-testid="filter-by-brand"]').type('dior')
    cy.get('.brand-list li').should('have.length', 1)
    cy.get('input[data-testid="filter-by-brand"]').clear()
  })
  it('Discount filter should work', () => {
    cy.get('input#discount').check()
    cy.url().should('include', 'discount=true')
    cy.get('input#discount').uncheck()
  })
})

describe('Pagination', () => {
  it('Pagination is shown', () => {
    cy.get('.pagination').should('be.visible')
  })
  it('Pagination should work', () => {
    cy.get('.pagination').contains('2').click()
    cy.url().should('include', '/page/2')
    cy.get('.pagination').contains('1').click()
  })
})

describe('Body', () => {
  it('Display 6 items', () => {
    cy.get('.product-item').should('have.length', 6)
  })
  it('Sort should works', () => {
    cy.get('select.sort-items').select('sell')
    cy.url().should('include', 'order=sell')
  })
})
