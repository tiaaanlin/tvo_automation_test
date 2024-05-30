import Action from './action';

/**
 * SubmitSubscriptionFormAction class
 * 
 * This class encapsulates the actions related to submitting a subscription form:
 * typing an email into the subscription input field and clicking the subscribe button.
 * 
 * @extends Action
 * 
 * @example
 * const submitSubscriptionFormAction = new SubmitSubscriptionFormAction('test@example.com');
 * submitSubscriptionFormAction.execute();
 */
class SubmitSubscriptionFormAction extends Action {
  /**
   * @param {string} email - The email address to type into the subscription input field.
   */
  constructor(email) {
    super();
    this.email = email;
  }

  /**
   * Executes the actions to submit the subscription form:
   * ensuring the email input is visible, typing the email address, 
   * and clicking the subscribe button.
   */
  execute() {
    
    cy.get('#mce-EMAIL').should('be.visible').type(this.email);
    cy.get('#mc-embedded-subscribe').should('be.visible').click();
  }
}

export default SubmitSubscriptionFormAction;
