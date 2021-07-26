/// <reference types="Cypress" />

describe('Home Page', () => {
    it('should display the app name on the home page', () => {
      cy.visit('/'); // go to the home page
      cy.get('input').type('TestRocket/Height');
      cy.get('#rocket-tree').find('span').should('have.css', 'color', 'rgb(0, 128, 0)');
    });
  });