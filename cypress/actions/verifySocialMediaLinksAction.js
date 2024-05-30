import Action from './action';

/**
 * VerifySocialMediaLinksAction class
 * 
 * This class encapsulates the action of verifying that social media links
 * with specified selectors have the correct URLs.
 * 
 * @extends Action
 * 
 * @example
 * const socialMediaLinks = [
 *   { selector: 'a[href*="facebook.com"]', urlPart: 'facebook.com' },
 *   { selector: 'a[href*="twitter.com"]', urlPart: 'twitter.com' },
 *   { selector: 'a[href*="instagram.com"]', urlPart: 'instagram.com' },
 *   { selector: 'a[href*="youtube.com"]', urlPart: 'youtube.com' },
 *   { selector: 'a[href*="tvolearn.com"]', urlPart: 'tvolearn.com' },
 * ];
 * const verifySocialMediaLinksAction = new VerifySocialMediaLinksAction(socialMediaLinks);
 * verifySocialMediaLinksAction.execute();
 */
class VerifySocialMediaLinksAction extends Action {
  /**
   * @param {Array<Object>} links - An array of objects containing the selectors and expected URL parts of the social media links.
   * @param {string} links[].selector - The CSS selector for the social media link.
   * @param {string} links[].urlPart - The expected URL part that should be included in the href attribute of the link.
   */
  constructor(links) {
    super();
    this.links = links;
  }

  execute() {
    this.links.forEach(link => {
      cy.get(link.selector).should('have.attr', 'href').and('include', link.urlPart);
    });
  }
}

export default VerifySocialMediaLinksAction;
