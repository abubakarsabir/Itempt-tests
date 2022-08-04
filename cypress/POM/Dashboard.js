/// <reference types="cypress" />
class Dashboard {

    elements = 
    {

        Orginization_selection:()=>
            cy.get('.organizationSelection__inner > .v-list > :nth-child(1)'),

        Orginizationbtn: () =>
            cy.get('.navbarContainer__button'),

        Orginization_options:()=>
            cy.get('[role="menu"]'),

        Orginization_option_select:()=>
            cy.get('[role="option"]'),

        Event_tab: ()=>
            cy.get('[role="listitem"]'),

        Navigation_bar:()=>
            cy.get('.navigationColumn'),

        Create_event:()=>
            cy.get('.button_text'),

        Type_event:()=>
            cy.get('[placeholder="Enter a new title"]'),

        button:()=>
            cy.get('[type="button"]')
       
    }

}
export default Dashboard



