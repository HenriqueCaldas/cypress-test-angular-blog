const { createYield } = require("typescript")

define(''), () => {
    if('Sucesso', () => {
        cy.visited('http://localhost:4200/');
        cy.get('.home-page').click();
        cy.get('.navbar-nav > .nav-item:nth-child(3) > .nav-link').click();
        cy.get('.row').click();
        cy.get('.ng-valid').click();
        cy.get('ng-valid').type('luishenri10');
        cy.get('.form-group:nth-child(2) > .form-control').type('{backspace}');
        cy.get('.form-group:nth-child(2) > .form-control').type('{backspace}');
        cy.get('.form-group:nth-child(2) > .form-control').type('luishenri10@gmail.com');
        cy.get('.ng-untouched').type('123123123');
        cy.get('.btn').click();
        cy.get('.ng-dirty:nth-child(4)').submit();
    })
}