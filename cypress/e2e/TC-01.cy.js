/// <reference types="cypress" />
import Login from "../POM/Login"
import Dashboard from "../POM/Dashboard"

const LoginPage = new Login()
const Element = LoginPage.elements

const Dashboardpage = new Dashboard()
const dashboard_element = Dashboardpage.elements

const credentials = require('../fixtures/data.json')

describe('Login Test suite', () => {

    beforeEach(() => {

        cy.visit('/')
      
    })

    it('Check the elements name on Login Page', () => {
       
        
        Element.Email()
            .should('be.visible')
            .type(credentials.email)
            .should('have.value',credentials.email)


        Element.Password()
            .should('be.visible')
            .type(credentials.password)
            .should('have.value',credentials.password)

        Element.Enterbtn()
            .should('be.visible')
            .click()
            
        
        new Cypress.Promise((resolve, reject) =>{
                 resolve(dashboard_element.Orginization_selection().click())

        })
        
        cy.reload()

        cy.wait(20000)

        dashboard_element.Orginizationbtn()
            .click()

        dashboard_element.Orginization_options()
            .should('be.visible')

       // dashboard_element.Orginization_option_select().eq(1).click()

        dashboard_element.Event_tab().eq(2)
            .should('have.attr', 'href', '/events')
            .click()

        dashboard_element.Navigation_bar().should('be.visible')

        dashboard_element.Create_event().click()

        function eventname() {
            var email = "testingq"
            var text = "";
            var possible = "qwertyuioplkjhgfdazxcvbnm";
            for (var i = 0; i < 2; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = email + text
            return value;
        }


        dashboard_element.Type_event().type(eventname())

        dashboard_element.button().contains('Save').click()
        
    })


})
