import Action from './action';

/**
 * ManageCookieAction class
 * 
 * This class encapsulates the actions related to managing a cookie:
 * setting a cookie, verifying its value, clearing the cookie, and verifying its removal.
 * 
 * @extends Action
 * 
 * @example
 * const manageCookieAction = new ManageCookieAction('myCookie', 'cookieValue');
 * manageCookieAction.execute();
 */
class ManageCookieAction extends Action {
  /**
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value of the cookie.
   */
  constructor(name, value) {
    super();
    this.name = name;
    this.value = value;
  }

  execute() {

    cy.setCookie(this.name, this.value);
    cy.getCookie(this.name).should('have.property', 'value', this.value);
    cy.clearCookie(this.name);
    cy.getCookie(this.name).should('not.exist');
  }
}

export default ManageCookieAction;
