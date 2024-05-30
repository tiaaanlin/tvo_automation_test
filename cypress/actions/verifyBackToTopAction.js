import Action from './action';

/**
 * VerifyBackToTopAction class
 * 
 * This class encapsulates the actions related to verifying the "back to top" button functionality:
 * scrolling to the footer, checking the visibility and display property of the button, clicking the button,
 * and verifying that the button is not visible after clicking.
 * 
 * @extends Action
 * 
 * @example
 * const verifyBackToTopAction = new VerifyBackToTopAction('footer', '#bttopBtn');
 * verifyBackToTopAction.execute();
 */
class VerifyBackToTopAction extends Action {
  /**
   * @param {string} footerSelector - The CSS selector for the footer element.
   * @param {string} buttonSelector - The CSS selector for the "back to top" button.
   */
  constructor(footerSelector, buttonSelector) {
    super();
    this.footerSelector = footerSelector;
    this.buttonSelector = buttonSelector;
  }

  /**
   * Executes the actions to verify the "back to top" button functionality:
   * scrolling to the footer, checking the visibility and display property of the button,
   * clicking the button, and verifying that the button is not visible after clicking.
   */
  execute() {

    cy.get(this.footerSelector).scrollIntoView();
    cy.get(this.buttonSelector, { timeout: 10000 }).should('be.visible').and('have.css', 'display', 'block');
    cy.get(this.buttonSelector).click();
    cy.get(this.buttonSelector).should('not.be.visible');
  }
}

export default VerifyBackToTopAction;
