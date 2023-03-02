/// <reference types="cypress" />

describe('Navbar Test', ()=> {
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('Should display online banking content', ()=>{
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });
    it('Should display freedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
    });
    it('Should display home page content', ()=>{
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('h4').should('contain.text', 'Online Banking')
    });
});
