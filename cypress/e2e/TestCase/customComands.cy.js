/// <reference types="cypress" />

describe('Automation login test', () => {
    it('Should visit website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    })
    it('Should try to login', () => {
        cy.fixture("person").then(person => {
            const UserName = person.username
            const UserPassword = person.password
            cy.login(UserName, UserPassword)
        })
    });
    it('Should click pay bill element', () => {
        cy.get('#pay_bills_tab').click()
    });
    it('Should try to pay' , () => {
        cy.fixture("person").then(person => {
            const Peyee = person.peyee
            const Account = person.account
            const Amount = person.amount
            const Date = person.date
            const Desk = person.desk
            cy.get('#pay_saved_payees')
        })
    })
})