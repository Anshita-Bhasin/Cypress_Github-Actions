describe('Testing through Cypress',()=>{

    it('Open website and enter username, password',()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    })
})