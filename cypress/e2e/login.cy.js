

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
                .should('have.text', 'Olá, ' + user.name)
            
            
        })

        it('não deve logar com e-mail incorreto', ()=>{
            const user = {
                name:'Regina',
                email: 'regina@gmail.com',
                password: '743105'   
                
            }
            cy.visit('http://localhost:3000')

            cy.get('input[placeholder$=email]').type(user.email)

            cy.get('input[placeholder*="senha"]').type(user.password)

            //button[text()="Entrar"]
            cy.contains('button', 'Entrar')
                .click()

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            cy.get('.notice-container')
            .should('be.visible')
            .find('.error p')
            .should('have.text', message )
            
        })
        
        it('não deve logar com senha incorreta', ()=>{
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

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            cy.get('.notice-container')
            .should('be.visible')
            .find('.error p')
            .should('have.text', message )
            
        })
    })

})