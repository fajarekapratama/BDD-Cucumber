/// <reference types="cypress" />
describe('visit the website', () => {
    before(() => {
        cy.visit('https://emiradlogistics.co.id/home-en');
        cy.url().should('include','https://emiradlogistics.co.id/')
        cy.get('.site-description').should('include.text', 'we handle your trust personally')
        cy.get('#menu-item-11110').click()
    });
    it('Should try login with invalid data',()=>{
        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password
            cy.invalidSign(username,password)
        });
    });
    it('Should display error message',()=>{
        cy.get('.forminator-error').should('be.visible')
    });
    it('Should try login with valid data',()=>{
        cy.fixture('datavalid').then(datavalid=>{
            const username = datavalid.username
            const password = datavalid.password
            cy.validSign(username,password)
        })
    });
    it('Should test all menu navigation in the sidebar',()=>{
        cy.get('#menu-posts').click()
        cy.get('h1').should('include.text', 'Posts')
        cy.get('#menu-posts-wpcargo_shipment').click()
        cy.get('h1').should('include.text', 'Shipment')
        cy.get('.dashicons-admin-media').click()
        cy.get('h1').should('include.text','Media Library')
        cy.get('#menu-posts-wpcargo_shipment').click()

    });
    // it('Search AWB with searchBox',()=>{
    //     cy.get('input[name="s"]').type('EMR0376128 ')
    //     // cy.get('#search-submit').click
    // });
    // it('Should logout from application',()=>{
    //     cy.get('#wp-admin-bar-my-account').click()
    //     cy.get('#wp-admin-bar-logout').click()
    // });    
});

