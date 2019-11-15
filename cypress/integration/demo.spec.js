/* global context: false, cy: false */
import 'cypress-axe';

const URL = 'http://localhost:3000/';

context('basic', () => {
  beforeEach(() => {
    cy.visit(URL); // must preceded injectAxe call
    cy.injectAxe();
  });

  it('home page content', () => {
    cy.contains('Learn React');
  });

  it('home page accessibility', () => {
    cy.checkA11y();
  });
});
