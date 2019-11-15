# cypress-demo

This demonstrates writing and running Cypress tests for a React application.

Steps I took:

1. `npx create-react-app cypress-demo`

2. `cd cypress-demo`

3. `npm install`

4. `npm install -D cypress`

5. Add the following npm scripts in `package.json`:

   ```json
   "cypress:open": "cypress open",
   "cypress:run": "cypress run"
   ```

6. `npm run cypress:open`
   This opens the Cypress app.

7. Press the "Run all specs" button to run all the supplied example tests.
   This opens a new browser window and runs the tests there.
   When this completes, close this browser window.

8. `npm run cypress:run`
   This runs the supplied example tests in headless mode using Electron.

9. Move the `cypress/integration/examples` directory
   containing all the supplied example tests
   to a location outside the `cypress` directory
   such as `cypress-hold` so you can refer to them later.

10. Create a new Cypress test in the `cypress/integration` directory.

    ```js
    /* global context: false, cy: false */
    const URL = 'http://localhost:3000/';

    context('basic', () => {
      it('home page', () => {
        cy.visit(URL);
        cy.contains('Learn React');
      });
    });
    ```

11. Verify that it works by repeating steps 6 through 8 above.

12. Browse <https://docs.cypress.io> to learn more about writing Cypress tests.
