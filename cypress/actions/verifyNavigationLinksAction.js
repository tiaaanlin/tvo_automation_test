import Action from './action';

/**
 * VerifyNavigationLinksAction class
 * 
 * This class encapsulates the action of verifying that navigation links
 * with specified selectors are visible and have the correct URLs.
 * 
 * @extends Action
 * 
 * @example
 * const navLinks = [
 *   { selector: 'a[href="/home"]', expectedUrl: '/home' },
 *   { selector: 'a[href="/about"]', expectedUrl: '/about' },
 * ];
 * const verifyNavigationLinksAction = new VerifyNavigationLinksAction(navLinks);
 * verifyNavigationLinksAction.execute();
 */
class VerifyNavigationLinksAction extends Action {
  /** 
   * @param {Array<Object>} navLinks - An array of objects containing the selectors and expected URLs of the navigation links.
   * @param {string} navLinks[].selector - The CSS selector for the navigation link.
   * @param {string} navLinks[].expectedUrl - The expected URL part that should be included in the href attribute of the link.
   */
  constructor(navLinks) {
    super();
    this.navLinks = navLinks;
  }

  /**
   * Executes the action to verify that each navigation link is visible
   * and has the correct href attribute.
   */
  execute() {
    this.navLinks.forEach(link => {
      cy.get(link.selector).should('be.visible');
      cy.get(link.selector).should('have.attr', 'href').and('include', link.expectedUrl);
    });
  }
}

export default VerifyNavigationLinksAction;
