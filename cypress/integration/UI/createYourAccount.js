  context("Create Account", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it('Create Account positive flow', function () {
    cy.get('#n_name').type('ab')
    cy.get('#n_email').type('zdb@xyz.com')
    cy.get('#n_username').type('dtkrefgre')
    cy.get('#n_password').type('123456')
    cy.get('#signup-block > .enrollment-body > .enrollment-btn').click()
    //check if the account is created successfully
    cy.get('#success-block > .enrollment-body').should('contain', 'Congratulations!')
  })

  it('Create Account when email address is invalid', function () {
    cy.get('#n_name').type('abw1c')
    cy.get('#n_email').type('arwdb@xyz.')
    cy.get('#n_username').type('abc')
    //check for the error message
    cy.get('#n_email-error').should('contain', 'Please enter a valid email address')
  })

  it('Create Account when email address already exists', function () {
    cy.get('#n_name').type('abcd')
    cy.get('#n_email').type('abc@xyz.com')
    cy.get('#n_username').type('errrtc')
    //check for the error message
    cy.get('#n_email-error').should('contain', 'Email already exists')
  })

  it('Create Account when username already exists', function () {
    cy.get('#n_name').type('abcd')
    cy.get('#n_email').type('abetc@xyz.com')
    cy.get('#n_username').type('abc')
    cy.get('#n_password').type('123456')
    //check for the error message
    cy.get('#n_username-error').should('contain', 'Username already exists')
  })

  it('Create Account when username is less than 3 characters', function () {
    cy.get('#n_name').type('abcd')
    cy.get('#n_email').type('abetc@xyz.com')
    cy.get('#n_username').type('da')
    cy.get('#n_password').type('123456')
    //check for the error message
    cy.get('#n_username-error').should('contain', 'Username should be atleast 3 characters long')
  })

  it('Create Account when username doesn\'t start from a letter', function () {
    cy.get('#n_name').type('abcd')
    cy.get('#n_email').type('abetc@xyz.com')
    cy.get('#n_username').type('>se')
    cy.get('#n_password').type('123456')
    //check for the error message
    cy.get('#n_username-error').should('contain', 'Username must be alpha-numeric and start with a letter')
  })

  it('Create Account when mandatory field(Full Name) is not filled', function () {
    cy.get('#n_email').type('zdbc@xyz.com')
    cy.get('#n_username').type('dfgre')
    cy.get('#n_password').type('123456')
    cy.get('#signup-block > .enrollment-body > .enrollment-btn').click()
    //check for the error message
    cy.get('#n_name-error').should('contain', 'This field is required')
  })

  it('Create Account when mandatory field(Email Address) is not filled', function () {
    cy.get('#n_name').type('abc')
    cy.get('#n_username').type('dfgre')
    cy.get('#n_password').type('123456')
    cy.get('#signup-block > .enrollment-body > .enrollment-btn').click()
    //check for the error message
    cy.get('#n_email-error').should('contain', 'This field is required')
  })

  it('Create Account when mandatory field(Username) is not filled', function () {
    cy.get('#n_name').type('abc')
    cy.get('#n_email').type('zdbc@xz.com')
    cy.get('#n_password').type('123456')
    cy.get('#signup-block > .enrollment-body > .enrollment-btn').click()
    //check for the error message
    cy.get('#n_username-error').should('contain', 'This field is required')
  })

  it('Create Account when mandatory field(Password) is not filled', function () {
    cy.get('#n_name').type('abc')
    cy.get('#n_email').type('zdbc@xz.com')
    cy.get('#n_password').type('123456')
    cy.get('#signup-block > .enrollment-body > .enrollment-btn').click()
    //check for the error message
    cy.get('#n_username-error').should('contain', 'This field is required')
 })

 it('Create Account positive when Password is less than 6 characters', function () {
   cy.get('#n_name').type('ab')
   cy.get('#n_email').type('zqb@xyz.com')
   cy.get('#n_username').type('dtkrere')
   cy.get('#n_password').type('12345')
   cy.get('#signup-block > .enrollment-body > .enrollment-btn').click()
   //check for the error message
   cy.get('#n_password-error').should('contain', 'Password should be atleast 6 characters long')
 })

})
