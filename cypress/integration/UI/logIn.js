context("Log in", () => {
beforeEach(() => {
  cy.visit("/");
  //click on the login
  cy.get('#login').click()
})

it('Login positive flow', function () {
  cy.get('#email').type('abc@xyz.com')
  cy.get('#password').type('123456')
  cy.get('#login-block > .enrollment-body > .enrollment-btn').click()
  //check if the account is created successfully
  cy.get('#success-block > .enrollment-body').should('contain', 'Congratulations!')
  cy.log('Login successful')
  //check if One Payment of $997 is automatically pre-selected
  cy.get('[for="plan-7b8d928a-043c-4e19-a169-4dcb381794e4"] > .price-block > .price-block-title').invoke('attr', 'checked', true)
  })

it('Login when username or password is wrong', function () {
  cy.get('#email').type('abc@xyz.com')
  cy.get('#password').type('12346')
  cy.get('#login-block > .enrollment-body > .enrollment-btn').click()
  cy.get('#login-error').should('contain', 'Bad username/password. Please try again.')
  })

it('Create Account from the Login screen', function () {
  //click on the create an account
  cy.get('#create').click()
  cy.get('#n_name').type('ab')
  cy.get('#n_email').type('gty@xyz.com')
  cy.get('#n_username').type('dtkrefgre')
  cy.get('#n_password').type('123456')
  cy.get('#signup-block > .enrollment-body > .enrollment-btn').click()
  //check if the account is created successfully
  cy.get('#success-block > .enrollment-body').should('contain', 'Congratulations!')
  })

it('Forgot Password functionality when account doesn\'t exists', function () {
  cy.get('#email').type('abc@xyz.com')
  cy.get('#password').type('12346')
  cy.get('#login-block > .enrollment-body > .enrollment-btn').click()
  //click on Forgot Password
  cy.get('.misc-login-option > :nth-child(1) > a').click()
  //check for non registered email
  cy.get('input').type('dsheoran03@gmail.com')
  cy.get('.btn').click()
  //check for the error message
  cy.get('.message').should('contain', 'No account exists for dsheoran03@gmail.com. Maybe you signed up with a different / incorrect email address?')
  })

it('Forgot Password functionality for an invalid email', function () {
  cy.get('#email').type('abc@xyz.com')
  cy.get('#password').type('12346')
  cy.get('#login-block > .enrollment-body > .enrollment-btn').click()
  //click on Forgot Password
  cy.get('.misc-login-option > :nth-child(1) > a').click()
  //check for invalid email
  cy.get('input').type('abc@xyz.c')
  cy.get('.btn').click()
  //check for the error message
  cy.get('.message').should('contain', 'Not a valid email address')
  })

it('Forgot Password', function () {
  cy.get('#email').type('abc@xyz.com')
  cy.get('#password').type('12346')
  cy.get('#login-block > .enrollment-body > .enrollment-btn').click()
  //click on Forgot Password
  cy.get('.misc-login-option > :nth-child(1) > a').click()
  cy.get('input').type('abc@xyz.com')
  cy.get('.btn').click()
  //check if the email sent message is displayed
  cy.get('.message').should('contain', 'We sent you an e-mail with instructions on how to reset your password.')
  })

})
