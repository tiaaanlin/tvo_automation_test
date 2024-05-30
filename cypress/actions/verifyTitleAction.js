import Action from './action';

/**
 * VerifyTitleAction class
 * 
 * This class encapsulates the action of verifying that the page title
 * includes the expected text.
 * 
 * @extends Action
 * 
 * @example
 * const verifyTitleAction = new VerifyTitleAction('Expected Title');
 * verifyTitleAction.execute();
 */
class VerifyTitleAction extends Action {
  /**
   * @param {string} expectedTitle - The expected text that should be included in the page title.
   */
  constructor(expectedTitle) {
    super();
    this.expectedTitle = expectedTitle;
  }

  
  execute() {
    cy.title().should('include', this.expectedTitle);
  }
}

export default VerifyTitleAction;
