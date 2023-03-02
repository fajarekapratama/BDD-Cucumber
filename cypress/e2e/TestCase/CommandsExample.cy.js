// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearLocalStorage()
    cy.get('input[name="text-1"]').clear()
    cy.get('input[name="text-1"]').type(username)
    cy.get('input[name="password-1"]').clear()
    cy.get('input[name="password-1"]').type(password)
    cy.get('.forminator-button').click()
})
Cypress.Commands.add('PayBill', (peyee,account,amount,date,desk) => {
    cy.get('input[name="peyee"]').clear()
    cy.get('input[name="peyee"]').type(peyee)
    cy.get('input[name="account"]').clear()
    cy.get('input[name="account"]').type(account)
    cy.get('input[name="amount"]').clear()
    cy.get('input[name="amount"]').type(amount)
    cy.get('input[name="date"]').clear()
    cy.get('input[name="date"]').type(date)
    cy.get('input[name="description"]').clear()
    cy.get('input[name="description"]').type(desk)
    cy.get('#pay_saved_payees').click()
})
