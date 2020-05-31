context('Tray test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should submit succesfully the form', () => {
    cy.findByTestId('user-page').should('exist')
    cy.get('#name').type('John Doe')
    cy.get('#role').type('Senior Front End Developer')
    cy.get('#email').type('John.Doe@test.test')
    cy.get('#password').type('123QWEasd')
    cy.get('form').submit()

    cy.findByTestId('privacy-page').should('exist')
    cy.get('#update').click()
    cy.get('form').submit()

    cy.findByTestId('done-page').should('exist')
  })

  it('should show an error message when form fails', () => {
    cy.findByTestId('user-page').should('exist')
    cy.get('#name').type('John Doe')
    cy.get('#role').type('Senior Front End Developer')
    cy.get('#email').type('John.Doe@test.test')
    cy.get('#password').type('123QWEasd')
    cy.get('form').submit()

    cy.findByTestId('privacy-page').should('exist')
    cy.get('#marketing').click()
    cy.get('form').submit()

    cy.findByTestId('submit-error').should('exist')
  })

  it('should avoid visiting other pages without completing the form', () => {
    cy.findByTestId('user-page').should('exist')

    cy.visit('/privacy')
    cy.findByTestId('privacy-page').should('not.exist')
    cy.findByTestId('user-page').should('exist')

    cy.visit('/privacy')
    cy.findByTestId('done-page').should('not.exist')
    cy.findByTestId('user-page').should('exist')
  })

  it('should show error messages for required fields', () => {
    cy.get('form').submit()
    cy.findByTestId('name-error').should('exist')
    cy.findByTestId('email-error').should('exist')
    cy.findByTestId('password-error').should('exist')

    cy.get('#name')
      .type('John Doe')
      .findByTestId('name-error')
      .should('not.exist')
    cy.get('#email')
      .type('John.Doe@test.test')
      .findByTestId('email-error')
      .should('not.exist')
    cy.get('#password')
      .type('123QWEasd')
      .findByTestId('password-error')
      .should('not.exist')

    cy.get('form').submit()
    cy.findByTestId('privacy-page').should('exist')
  })
})
