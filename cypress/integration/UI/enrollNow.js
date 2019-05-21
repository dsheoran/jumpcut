context("Enroll Now", () => {
beforeEach(() => {
  cy.visit("/");
  //click on the login
  cy.get('#login').click()
  cy.get('#email').type('abc@xyz.com')
  cy.get('#password').type('123456')
  cy.get('#login-block > .enrollment-body > .enrollment-btn').click()
  //fill in the address to receive welcome package
  cy.get('#address').type('1st Avenue, Parliament Street')
  cy.get('#city').type('New Delhi')
  cy.get('#country').select('India')
  cy.get('#region').select('National Capital Territory of Delhi')
  cy.get('#zipCode').type('110000')
})

it('Enroll Now positive flow using Credit or Debit card as the payment method', function () {
 //select PayPal as the payment method
  cy.get(':nth-child(8) > label').click()
  //Check the "I understand the 365-day guarantee policy." checkbox
  cy.get('.policy-block > label').click()
  //click enroll now button
  cy.get('#enrollment-btn').click()
  })

  it('Enroll Now use Credit or Debit card as the payment method without filling the mandatory details', function () {
    //Check the "I understand the 365-day guarantee policy." checkbox
    cy.get('.policy-block > label').click()
    //click enroll now button
    cy.get('#enrollment-btn').click()
    //check for the error message
    cy.get('.payment-error').should('contain', 'All fields are empty. Cannot tokenize empty card fields.!')
  })

  it('Enroll Now without selecting the policy checkbox ', function () {
    //click enroll now button
    cy.get('#enrollment-btn').click()
    //check for the error message
    cy.get('.payment-error').should('contain', 'Please review and agree to the 365-day guarantee')
    //verify checkbox is not selected
    cy.get('#policy').should('not.checked')
    //verify when the policy checkbox is not selcted and enroll button is clicked, the checkbox turn red
    cy.get('#policy').should('have.css', 'border-color', '#F44336')
  })

})
