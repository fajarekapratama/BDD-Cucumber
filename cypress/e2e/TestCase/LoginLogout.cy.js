/// <reference types="cypress" />

describe('login,logout test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
    });
    it('Should try to login with invalid data',()=>{
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
        
    });
    it('Should display error message',()=>{
        cy.get('.alert-error').should('be.visible')
        
    });
     it('Should login to application with valid data',()=>{
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

        // cy.get('#user-login').clear()
            cy.sign(username, password)
        cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    });
    it('Should logout from the application',()=>{
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('h4').should('contain.text', 'Online Banking')
        //Cek apakah ada element Strong setelah login
        // strong is not defined!!
    });
});