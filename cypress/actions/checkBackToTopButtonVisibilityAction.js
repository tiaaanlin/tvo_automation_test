import Action from './action';
/**
 * CheckBackToTopButtonVisibilityAction class
 * 
 * This class encapsulates the action of verifying that the "back to top" button 
 * is not visible when the page is scrolled to the top.
 * 
 * @extends Action
 * 
 * @example
 * const checkBackToTopButtonVisibility = new CheckBackToTopButtonVisibilityAction('#bttopBtn');
 * checkBackToTopButtonVisibility.execute();
 */

class CheckBackToTopButtonVisibilityAction extends Action {
  /**
   * @param {string} buttonSelector - The CSS selector for the "back to top" button.
   */

  constructor(buttonSelector) {
    super();
    this.buttonSelector = buttonSelector;
  }
  
  execute() {
    // Scroll to the top of the page
    cy.scrollTo(0, 0);
    cy.get(this.buttonSelector).should('not.be.visible');
  }
}

export default CheckBackToTopButtonVisibilityAction;
