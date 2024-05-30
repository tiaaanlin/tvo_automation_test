import Action from './action';

/**
 * PerformSearchAction class
 * 
 * This class encapsulates the actions related to performing a search:
 * typing a search query into the search input, submitting the search form, 
 * and verifying that the search request was made correctly.
 * 
 * @extends Action
 * 
 * @example
 * const performSearchAction = new PerformSearchAction('Math');
 * performSearchAction.execute();
 */
class PerformSearchAction extends Action {
  /**
   * @param {string} searchQuery - The search query to type into the search input.
   */
  constructor(searchQuery) {
    super();
    this.searchQuery = searchQuery;
  }

  /**
   * Executes the actions to perform a search:
   * intercepting the search request, typing the search query, submitting the search form,
   * and verifying that the search request was made correctly.
   */
  execute() {

    cy.intercept('GET', '/search*').as('searchRequest');
    cy.get('input[name="q"]').should('be.visible').type(this.searchQuery);
    cy.get('button[type="submit"]').should('be.visible').click();
    cy.wait('@searchRequest').its('request.url').should('include', '/search');
  }
}

export default PerformSearchAction;
