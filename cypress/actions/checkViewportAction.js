import Action from './action';

/**
 * CheckViewportAction class
 * 
 * This class encapsulates the action of verifying that a specified element is visible
 * across different viewport sizes.
 * 
 * @extends Action
 * 
 * @example
 * const viewports = ['iphone-6', 'ipad-2', 'macbook-15'];
 * const checkViewportAction = new CheckViewportAction(viewports, 'main');
 * checkViewportAction.execute();
 */
class CheckViewportAction extends Action {
  /**
   * @param {Array<string>} viewports - An array of viewport sizes to test.
   * @param {string} selector - The CSS selector for the element to check visibility.
   */
  constructor(viewports, selector) {
    super();
    this.viewports = viewports;
    this.selector = selector;
  }

  execute() {
    this.viewports.forEach(viewport => {
      cy.viewport(viewport);
      cy.get(this.selector).should('be.visible');
    });
  }
}

export default CheckViewportAction;
