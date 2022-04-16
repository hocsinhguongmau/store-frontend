before(() => {
  cy.signIn()
})

after(() => {
  cy.clearLocalStorageSnapshot()
  cy.clearLocalStorage()
})

beforeEach(() => {
  cy.restoreLocalStorage()
})

afterEach(() => {
  cy.saveLocalStorage()
})

// describe('Favorite items', () => {
//   it('Users can manage favorite items', () => {
//     cy.visit('/shop/page/1')
//     cy.wait(1000)
//     cy.get('.heart-button:nth-child(1) button').click({ force: true })
//     cy.wait(1000)
//     cy.get('.heart-button:nth-child(2) button').click({ force: true })
//     cy.wait(1000)
//     cy.get('.heart-button:nth-child(3) button').click({ force: true })
//     cy.wait(1000)
//     cy.visit('/profile')
//     cy.get('.heart-button').should('have.length', 3)
//     cy.get('.heart-button:nth-child(3) button').click()
//     cy.wait(1000)
//     cy.get('.heart-button:nth-child(2) button').click()
//     cy.wait(1000)
//     cy.get('.heart-button:nth-child(1) button').click()
//     cy.wait(1000)
//     cy.contains('No favorite item').should('be.visible')
//   })
// })

describe('Purchase items', () => {
  it('Users can choose size', () => {
    cy.visit('/yves-saint-laurent/y-live')
    cy.get('.choose-size').contains('60ML').click()
    cy.get('.bottle-size').contains('60ml').should('be.visible')
  })
  it('Users can add item to cart', () => {
    cy.get('.add-to-cart').click()
    cy.visit('/cart')
    cy.get('.cart-item').should('have.length', 1)
    cy.get('#quantity-select').should('have.value', '1')
  })
  it('Users can change the quantity of product item', () => {
    cy.get('#quantity-select').select('3')
    cy.get('.cart-item').should('contain', '186€')
  })
  it('Users can remove item from cart', () => {
    cy.get('.delete-all').click()
    cy.contains('Your cart is currently empty').should('be.visible')
  })
})
