import Action from './action';

/**
 * VerifyLinksAction class
 * 
 * This class encapsulates the action of verifying that all links with a specified selector
 * are valid by checking their HTTP status.
 * 
 * @extends Action
 * 
 * @example
 * const verifyLinksAction = new VerifyLinksAction('a');
 * verifyLinksAction.execute();
 */
class VerifyLinksAction extends Action {
  /**
   * @param {string} selector - The CSS selector for the links to verify.
   */
  constructor(selector) {
    super();
    this.selector = selector;
  }

  /**
   * Executes the action to verify that all links with the specified selector
   * are valid by checking their HTTP status.
   */
  execute() {
    cy.get(this.selector).each($link => {
      const href = $link.prop('href');
      if (href) {
        cy.request(href).then(response => {
          expect(response.status).to.eq(200);
        });
      }
    });
  }
}

export default VerifyLinksAction;
