/// <reference types="cypress" />

describe('Searchbox Test', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('some text {enter}')
    });
    it('should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
    });
    it('should show search result page', () => {
        cy.get('ul').should('contain.value')
    });
});