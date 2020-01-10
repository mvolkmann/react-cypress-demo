/* global context: false, cy: false */
import 'cypress-axe';
//import axe from 'axe-core';

const URL = 'http://localhost:3000/';

//axe.configure([
//  rules: [{'page-has-heading-one': {enabled: false}}]

context('basic', () => {
  beforeEach(() => {
    cy.visit(URL); // must precede injectAxe call
    cy.injectAxe();
    /*
    cy.configureAxe({
      rules: [{
        'page-has-heading-one': {enabled: false}
      }]
    });
    */
  });

  it('home page content', () => {
    cy.contains('Learn React');
  });

  it('home page accessibility', () => {
    cy.checkA11y();
  });
});
