/// <reference types="cypress" />

describe('Automation Test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('.brand').should('include.text','Zero Bank')
        cy.get('#signin_button').click()
    })
    it('Should try login with invalid data',()=>{
        cy.get('input[name="user_login"]').type('invalid data')
        cy.get('#user_password').type('invalid data')
        cy.get('input[name="submit"]').click()
    })
    it('Display error mesage',()=>{
        cy.get('.alert-error').should('include.text','Login and/or password are wrong.')
    })
    it('try login with valid data',()=>{
        cy.get('input[name="user_login"]').type('username')
        cy.get('#user_password').type('password')
        cy.get('input[name="submit"]').click()
        cy.get('.dropdown-toggle').should('be.visible')
    })
    it('should try menu navbar',()=>{
        cy.get('#account_summary_tab').click()
        cy.get('h2').should('include.text','Cash Accounts')
        cy.get('#account_activity_tab').click()
        cy.get('h2').should('include.text','Show Transactions')
        cy.get('#transfer_funds_tab').click()
        cy.get('h2').should('include.text','Transfer Money & Make Payments')
        cy.get('#pay_bills_tab').click()
        cy.get('h2').should('include.text','Make payments to your saved payees')
        cy.get('#money_map_tab').click()
        cy.get('#report-1010_header_hd').should('be.visible')
        cy.get('#online_statements_tab').click()
        cy.get('#os_accountId').should('be.visible')
    })
    it('Should Pay bill',()=>{
        cy.get('#pay_bills_tab').click()
        cy.get('#sp_payee').type('Apple')
        cy.get('#sp_account').type('Loan')
        cy.get('#sp_amount').type('100')
        cy.get('#sp_date').type('22/12/2022')
        cy.get('#sp_description').should('be.visible')
        cy.get('#pay_saved_payees').click()
    })
});