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

6. `npm start`
   This starts a local HTTP server for running the app.
   It must be running in order for the tests to work,
   regardless of whether the tests are run in a browser or headless.

7. `npm run cypress:open`
   This opens the Cypress app.

8. Press the "Run all specs" button to run all the supplied example tests.
   This opens a new browser window and runs the tests there.
   When this completes, close this browser window.

9. `npm run cypress:run`
   This runs the supplied example tests in headless mode using Electron.

10. Move the `cypress/integration/examples` directory
    containing all the supplied example tests
    to a location outside the `cypress` directory
    such as `cypress-hold` so you can refer to them later.

11. Create a new Cypress test in the `cypress/integration` directory.

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

12. Verify that it works by repeating steps 6 through 8 above.

13. Browse <https://docs.cypress.io> to learn more about writing Cypress tests.

The tool "axe" from the company Deque
detects and reports on accessibility issues in web apps.

Here are the steps to integrate axe accessibility tests into Cypress:

1. `npm install -D axe-core cypress-axe`

2. Modify the Cypress test shown above to look like this:

   ```js
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
   ```

3. Run the Cypress tests in the normal way.

4. If there are any issues reported by axe
   - open the devtools in the browser window where tests were run
   - click the "Console" tab
   - click an axe issue to see details in the Console

The axe issues reported for the default create-react-app are:

1. landmark-one-main

   The description is "Ensures the document has only one main landmark
   and each iframe in the page has at most one main landmark".
   The fix is to change the `<div>` tag in public/html to a `<main>` tag.

2. page-has-heading-one

   The description is "Ensure that the page, or at least
   one of its frames contains a level-one heading".
   A fix is to change the `<p>` tag in src/App.js to an `<h1>` tag.
   But this issue doesn't really need to be fixed.
   To ignore this in future axe issue reports, ...
