import VerifyTitleAction from '../actions/verifyTitleAction';
import VerifyElementVisibleAction from '../actions/verifyElementVisibleAction';
import VerifyLinksAction from '../actions/VerifyLinksAction';
import ManageCookieAction from '../actions/manageCookieAction';
import SubmitSubscriptionFormAction from '../actions/submitSubscriptionFormAction';
import PerformSearchAction from '../actions/performSearchAction';
import VerifyNavigationLinksAction from '../actions/verifyNavigationLinksAction';
import CheckViewportAction from '../actions/checkViewportAction';
import VerifyBackToTopAction from '../actions/verifyBackToTopAction';
import CheckBackToTopButtonVisibilityAction from '../actions/checkBackToTopButtonVisibilityAction';
import VerifySocialMediaLinksAction from '../actions/verifySocialMediaLinksAction';

describe('Grade 1 Mathematics Page', () => {
  /**
 * The beforeEach block ensure that the page content is controlled and that hyperlink navigation 
 * and external requests are effectively prevented during test execution, allowing for 
 * consistent and isolated test conditions.
 */

  beforeEach(() => {
    cy.intercept('GET', '**', { statusCode: 200, body: {} }).as('getRequest')
    cy.intercept('POST', '**', { statusCode: 200, body: {} }).as('postRequest')
    cy.request('https://tvolearn.com/pages/grade-1-mathematics').then((response) => {
    cy.document().invoke('write', response.body)
    })
  })


  /**
 * Test Grade 1 - Mathematics page loads successfully
 * and that key elements are displayed without making extra requests.
 * 
 * 1. Verifies page title includes 'Grade 1 - Mathematics'.
 * 2. Confirms main content, all images, all icons are visible.
 * 
 */

  it('should load successfully and display key elements without extra requests', () => {
    
    const verifyTitle = new VerifyTitleAction('Grade 1 - Mathematics');
    const verifyMainVisible = new VerifyElementVisibleAction('main');
    const verifyImgVisible = new VerifyElementVisibleAction('img');
    const verifyIconVisible = new VerifyElementVisibleAction('.icon');


    verifyTitle.execute();
    verifyMainVisible.execute();
    verifyImgVisible.execute();
    verifyIconVisible.execute();
    
    })


  /**
 * Test all hyperlinks on the page are not broken.
 * 
 * 1. Selects all anchor (`<a>`) tags on the page.
 * 2. Iterates over each anchor tag and checks if it has a valid `href` attribute.
 * 3. For each valid `href`, sends a request to the URL.
 * 4. Verifies that the response status code for each request is 200.
 */

  it('should ensure all hyperlinks are not broken', () => {
      
    
    const verifyLinks = new VerifyLinksAction('a');
    verifyLinks.execute();

  });

  /**
 * Test ensures the proper setting, retrieving, and clearing of a cookie.
 */

  it('should set, get, and clear a cookie', () => {
    
    const manageCookie = new ManageCookieAction('myCookie', 'cookieValue');
    manageCookie.execute();
  })


  /**
 * Test subscription form submits successfully.
 * 
 * 1. Types an email address and click subscribe button
 * 
 */

  it('should ensure the subscription form submit successfully', () => {

    const submitSubscriptionForm = new SubmitSubscriptionFormAction('test@example.com');
    submitSubscriptionForm.execute();

    })

  /**
 * Test user can type into the search input and submit the form successfully.
 */

  it('should allow typing into the search input and clicking the submit button', () => {
    
    const performSearch = new PerformSearchAction('Math');
    performSearch.execute();

    })

  /**
 * Test navigation links on the page lead to the correct URLs.
 * 
 * 1. Defines a list of navigation links with their corresponding selectors and expected URLs.
 * 2. Iterates over each navigation link and performs the following checks:
 *    - Verifies that the link is present and visible on the page.
 *    - Confirms that the 'href' attribute of the link includes the expected URL.
 */

  it('should navigate to the correct page', () => {
    // Define a list of navigation links and their expected URLs
    const navLinks = [
      { selector: 'a.mobile-nav__sublist-link[href="/pages/kindergarten"]', expectedUrl: '/pages/kindergarten' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/grade-1"]', expectedUrl: '/pages/grade-1' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/grade-2"]', expectedUrl: '/pages/grade-2' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/grade-3"]', expectedUrl: '/pages/grade-3' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/grade-4"]', expectedUrl: '/pages/grade-4' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/grade-5"]', expectedUrl: '/pages/grade-5' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/grade-6"]', expectedUrl: '/pages/grade-6' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/grade-7"]', expectedUrl: '/pages/grade-7' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/grade-8"]', expectedUrl: '/pages/grade-8' },
      { selector: 'a.mobile-nav__sublist-link[href*="grade=9"]', expectedUrl: 'grade=9' },
      { selector: 'a.mobile-nav__sublist-link[href*="grade=10"]', expectedUrl: 'grade=10' },
      { selector: 'a.mobile-nav__sublist-link[href*="grade=11"]', expectedUrl: 'grade=11' },
      { selector: 'a.mobile-nav__sublist-link[href*="grade=12"]', expectedUrl: 'grade=12' },
      { selector: 'a.mobile-nav__sublist-link[href="/pages/nba"]', expectedUrl: '/pages/nba' },
      { selector: 'a.mobile-nav__link[href="/pages/for_teachers"]', expectedUrl: '/pages/for_teachers' },
    ]

    
    const verifyNavigationLinks = new VerifyNavigationLinksAction(navLinks);
    verifyNavigationLinks.execute();

  })

  /**
 * Test the page displays correctly on different screen sizes.
 * 
 * 1. Test the viewport to the dimensions of an iPhone 6, iPad 2, MacBook 15 and verifies that the main content area is visible.
 * 
 */

  it('should display correctly on different screen sizes', () => {

   
    const viewports = ['iphone-6', 'ipad-2', 'macbook-15'];
    const checkViewportAction = new CheckViewportAction(viewports, 'main');

    checkViewportAction.execute();

  })

  /**
 * Test the "Return to Top" button appears when the page is scrolled down 20px
 * 
 * 1. Scrolls down to the footer to simulate a scroll down of at least 20px.
 * 2. Verifies that the "Return to Top" button is visible and displayed as a block element.
 * 3. Clicks the "Return to Top" button.
 * 4. Verifies that the page scrolls to the top and the "Return to Top" button is no longer visible.
 * 
 */

  it('should show the button when scrolled down 20px and scroll to top when clicked', () => {
   
    const verifyBackToTopAction = new VerifyBackToTopAction('footer', '#bttopBtn');
    verifyBackToTopAction.execute();

  })

  /**
 * Test the "Return to Top" button is hidden when the page is scrolled up 
 * to less than 20px from the top.
 * 
 * 1. Scrolls the page to the top.
 * 2. Verifies that the "Return to Top" button is not visible.
 * 
 */

  it('should be hidden when page is scrolled up to less than 20px', () => {

    const checkBackToTopButtonVisibility = new CheckBackToTopButtonVisibilityAction('#bttopBtn');
    checkBackToTopButtonVisibility.execute();

  })

  /**
 * Test the social media links open correctly by verifying their URLs.
 */

  it('should open social media links correctly', () => {
    // Define a list of social media links and their expected URLs
    const socialMediaLinks = [
      { selector: 'a[href*="facebook.com"]', urlPart: 'facebook.com' },
      { selector: 'a[href*="twitter.com"]', urlPart: 'twitter.com' },
      { selector: 'a[href*="instagram.com"]', urlPart: 'instagram.com' },
      { selector: 'a[href*="youtube.com"]', urlPart: 'youtube.com' },
      { selector: 'a[href*="tvolearn.com"]', urlPart: 'tvolearn.com' },
     
    ]

    const verifySocialMediaLinks = new VerifySocialMediaLinksAction(socialMediaLinks);
    verifySocialMediaLinks.execute();

  })
})
 

