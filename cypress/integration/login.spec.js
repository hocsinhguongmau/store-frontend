describe('Login', () => {
  before(() => {
    cy.clearLocalStorageSnapshot()
    cy.clearLocalStorage()
  })
  it('Should be logged in', () => {
    cy.visit('/profile')
    cy.get(
      '.amplify-field-group__field-wrapper .amplify-input.amplify-field-group__control[name="username"]',
    ).type(Cypress.env('username'), { log: false })
    cy.get(
      '.amplify-field-group__field-wrapper .amplify-input.amplify-field-group__control[name="password"]',
    ).type(Cypress.env('password'), { log: false })
    cy.get(
      '.amplify-button.amplify-field-group__control[type="submit"]',
    ).click()
    cy.wait(3000)
    cy.contains('thangnguyen24111990@gmail.com').should('be.visible')
  })
})
