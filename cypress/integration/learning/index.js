describe('learning test', () => {
  it('wrap', () => {
    cy.wrap({ animate: fn }).invoke('animate') // Invoke the 'animate' function
    cy.get('.modal').invoke('show')
  })
})
