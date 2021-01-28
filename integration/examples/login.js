context('Cypress Login',() => {
    it('login scenario', () => {
        cy.visit('/index.php')
        cy.get('.login').click()
        cy.get('#email').type('me.porosh@gmail.com')
        cy.get('#passwd').type('aaaaa@12345')
        cy.get('#SubmitLogin > span').click()
        cy.title().should('include','My account - My Store')
    })
})