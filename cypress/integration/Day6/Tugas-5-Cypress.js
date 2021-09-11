// Buka link https://demoqa.com/automation-practice-form  

// isi semua form dan beri validasi seluruh isinya dengan menggunakan should.

// nb: dropdown city bisa diberi validasi bahwa dropdown tersebut tidak terlihat.


describe('Tugas 5 Cypress', function(){
    it('Isi Form', function(){
        //Cypress.config('pageLoadTimeout')
        // cy.linkURL()
        cy.visit('https://demoqa.com/automation-practice-form')
        // cy.get('#firstName').type('Nanda').should('have.value', 'Nanda')      
        // cy.get('#lastName').type('Sep').should('have.value', 'Sep')
        // cy.get('#userEmail').type('nanda.spirit@gmail.com').should('have.value', 'nanda.spirit@gmail.com')   
        // cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click({force: true}).should('be.visible')
        // cy.get('#userNumber').type('08954321').should('have.value', '08954321')   
        // //cy.get('#dateOfBirthInput' , {force : true}).click().type('{selectall}' , '{backspace}').type('08 September 1989').type('{enter}')
        // cy.get('#dateOfBirthInput').invoke('val','30 Dec 2000')
        // cy.get('.subjects-auto-complete__value-container').type('Arts{enter}').should('be.visible')    
        // cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click().should('be.visible')
        // cy.get('#uploadPicture').attachFile('download.jpg').should('be.visible')
        // cy.get('#currentAddress').type('Dsn Jeketro').should('have.value', 'Dsn Jeketro').should('be.visible')   
        //cy.get('#stateCity-wrapper > :nth-child(3)').should('be.disabled', {force:true}) 
        //cy.get('#state > .css-yk16xz-control').type('Haryana{enter}')
        // cy.get('#stateCity-wrapper > :nth-child(2)').type('Haryana{enter}')
        cy.get('#stateCity-wrapper > :nth-child(3)').select('Panipat{enter}').should('be.visible') 
        // cy.get('#stateCity-wrapper > :nth-child(2)').click({force : true}).should('be.visible')
        // cy.contain('Haryana').click({force : true}).should('be.visible')
        // cy.get('#stateCity-wrapper > :nth-child(3)').click({force : true}).should('be.visible')
        // cy.contain('Panipat').click({force : true}).should('be.visible')
        // cy.get('#submit').click({force : true}).should('be.visible')

        //cy.get('#dateOfBirthInput').screenshot()
        // cy.screenshot('Capturing the screenshot after successful login');


    })
})