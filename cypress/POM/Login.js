/// <reference types="cypress" />
class Login {

    elements = 
    {

        Email: () =>
         cy.get('[name="username"]'),

        Password:() =>
        cy.get('[name="password"]'),

        Enterbtn:()=>
        cy.get('[name="action"]'),

    }


}
export default Login