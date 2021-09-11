// Buka link https://www.demoblaze.com/index.html 
// Login.
// Beli 1 handphone dengan nama ‘HTC One M9’
// Tambah lagi beli 1 laptop dengan nama ‘Dell i7 8gb’
// Tambah lagi beli 1 monitor dengan nama ‘Apple Monitor 24’
// Lakukan pembayaran.
// Parameter kelolosan kode:
// Tidak ada error ketika dijalankan via GUI.
// Tidak ada error ketika dijalankan via headless mode.

describe('Tugas 4 Cypress', function(){
    it('Login', function(){
        cy.linkURL()
        // cy.typeLogin({ email: 'fake@email.com', password: 'rahasia1'})
        cy.get('#login2').click()
        // cy.wait(2000) 

        cy.get('#loginusername').type('adminda', {force: true}).should('have.value', 'adminda')
        cy.get('#loginpassword').type('admin123').should('have.value', 'admin123')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force: true}).should('be.visible')
        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click({force: true}).should('be.visible')
        cy.get('.col-sm-12 > .btn').click({force: true})//.should('be.visible')
        cy.go('back')
        cy.go('back') 
        cy.contains('Laptops').click()      
        // cy.get('[onclick="byCat(notebook)"]').click()
        cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch').click({ force: true })
        cy.get('.col-sm-12 > .btn').click({force: true})
        cy.go('back')
        cy.go('back')
        cy.contains('Monitors').click({force: true})      
        cy.get(':nth-child(10) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click({force: true})


        cy.get('#cartur').click().should('be.visible')


        cy.get('.col-lg-1 > .btn').click().should('be.visible')
        // cy.wait(1000)
        cy.get('#name').type('iwan').should('have.value', 'iwan')
        // cy.wait(5000)

        cy.get('#country').type('ina').should('have.value', 'ina')
        cy.get('#city').type('clp').should('have.value', 'clp')
        cy.get('#card').type('123').should('have.value', '123')
        cy.get('#month').type('agu').should('have.value', 'agu')
        cy.get('#year').type('2021').should('have.value', '2021')
        // cy.wait(6000)

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().should('be.visible')
        // cy.wait(5000)

        cy.get('.confirm').click().should('be.visible')
    })
})