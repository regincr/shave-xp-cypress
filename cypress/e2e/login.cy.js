

describe('login', ()=>{
    
    context('quando submeto o formulário', ()=>{

        it('deve logar com sucesso', ()=>{
            const user = {
                name:'Regina',
                email: 'regincr@gmail.com',
                password: '743105'                   
            }


            cy.visit('http://localhost:3000')

            cy.get('input[placeholder$=email]').type(user.email)

            cy.get('input[placeholder*="senha"]').type(user.password)

            //button[text()="Entrar"]
            cy.contains('button', 'Entrar')
                .click()

            cy.get('.logged-user div a')
                .should('be.visible')
                .should('have.text', 'Olá, Regina')
            
            
        })

        it('não deve logar com sucesso', ()=>{
            const user = {
                name:'Regina',
                email: 'regincr@gmail',
                password: '743105'      
            }
            cy.visit('http://localhost:3000')

            cy.get('input[placeholder$=email]').type(user.email)

            cy.get('input[placeholder*="senha"]').type(user.password)

            //button[text()="Entrar"]
            cy.contains('button', 'Entrar')
                .click()

        })

        it('senha incorreta', ()=>{
            const user = {
                name:'Regina',
                email: 'regincr@gmail.com',
                password: '123456'   
                
            }
            cy.visit('http://localhost:3000')

            cy.get('input[placeholder$=email]').type(user.email)

            cy.get('input[placeholder*="senha"]').type(user.password)

            //button[text()="Entrar"]
            cy.contains('button', 'Entrar')
                .click()
            
        })
    })

})