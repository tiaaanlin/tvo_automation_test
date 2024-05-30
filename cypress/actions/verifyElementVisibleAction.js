import Action from './action';

/**
 * VerifyElementVisibleAction class
 * 
 * This class encapsulates the action of verifying that a specified element is visible.
 * 
 * @extends Action
 * 
 * @example
 * const verifyElementVisibleAction = new VerifyElementVisibleAction('#elementId');
 * verifyElementVisibleAction.execute();
 */
class VerifyElementVisibleAction extends Action {
  /**
   * Creates an instance of VerifyElementVisibleAction.
   * 
   * @param {string} selector - The CSS selector for the element to check visibility.
   */
  constructor(selector) {
    super();
    this.selector = selector;
  }

  execute() {
    cy.get(this.selector).should('be.visible');
  }
  
}

export default VerifyElementVisibleAction;
