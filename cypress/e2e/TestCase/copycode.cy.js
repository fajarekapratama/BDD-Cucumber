it('Should clik login after visit', () => {
    cy.get('#menu-item-11110').click();
});
it('Should try to login with invalid data user', () => {
    cy.fixture('user').then(user => {
        const username = user.username
        const password = user.password
        cy.get('.forminator-checkbox-box').click()
        cy.get('input[name="text-1"]').clear()
        cy.get('input[name="text-1"]').type(username)
        cy.get('input[name="password-1"]').clear()
        cy.get('input[name="password-1"]').type(password)
        cy.get('.forminator-button').click()
    })
});
//Display error message
it('Should login with data valid'),()=>{
    cy.fixture('datavalid').then(datavalid => {
        const username = datavalid.username
        const password = datavalid.password
        cy.get('.forminator-checkbox-box').click()
        cy.get('input[name="text-1"]').clear()
        cy.get('input[name="text-1"]').type(username)
        cy.get('input[name="password-1"]').clear()
        cy.get('input[name="password-1"]').type(password)
        cy.get('.forminator-button').click()
});
it('Should Click Shipment test', () => {
    // cy.get('#menu-posts-wpcargo_shipment').click()
    //TODO
});
it('Should Search shipment in the field input AWB', () => {
    cy.fixture("user").then(user => {
        const awb = user.resi
        cy.get('input[name="s"]').type(awb)
        cy.get('#search-submit')
    })
});
it('Should try login again', () => {
    cy.fixture('person').then( person =>{
        const userLogin = person.username
        const userPass = person.password
        cy.get('input[name="log"]').type(userLogin)
        cy.get('input[name="pwd"]').type(userPass)
        cy.get('input[name="rememberme"]').click()
        cy.get('input[name="wp-submit"]').click()
    });
});

it('Should test input', () => {
    cy.get('.input_track_num').type('EMR0375902');
});

it('Should click track button', () => {
    cy.get('#submit_wpcargo').click()
});
});