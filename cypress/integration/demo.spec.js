/* global context: false, cy: false */
const URL = 'http://localhost:3000/';

context('basic', () => {
  it('home page', () => {
    cy.visit(URL);
    cy.contains('Learn React');
  });
});
