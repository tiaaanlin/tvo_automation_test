describe('Grade 1 Mathematics Page', () => {
  beforeEach(() => {
    // Intercept and stub all GET and POST requests with empty responses
    cy.intercept('GET', '**', { statusCode: 200, body: {} }).as('getRequest')
    cy.intercept('POST', '**', { statusCode: 200, body: {} }).as('postRequest')
    cy.request('https://tvolearn.com/pages/grade-1-mathematics').then((response) => {
      // Inject the response HTML into a document
    cy.document().invoke('write', response.body)
    })
  })

  it('should load successfully and display key elements without extra requests', () => {
      
      // Ensure the main content is visible
      cy.get('main').should('be.visible')
      cy.title().should('include', 'Grade 1 - Mathematics')

      // Ensure the main content is visible
      cy.get('main').should('be.visible')

      // Check that all images are visible
      cy.get('img').should('be.visible')

      // Check that all icons (assuming they use a common class, e.g., .icon) are visible
      cy.get('.icon').should('be.visible')

    })

  it('should ensure all hyperlinks are not broken', () => {
      
    // Get all anchor tags and check each one
    cy.get('a').each($link => {
      const href = $link.prop('href')
      if (href) {
        cy.request(href).then(response => {
          expect(response.status).to.eq(200)
          })
        }
      })
    })

  it('should set, get, and clear a cookie', () => {
      // Set a cookie
    cy.setCookie('myCookie', 'cookieValue')
      
      // Get the cookie and verify its value
    cy.getCookie('myCookie').should('have.property', 'value', 'cookieValue')
      
      // Clear the cookie
    cy.clearCookie('myCookie')
      
      // Verify the cookie is cleared
    cy.getCookie('myCookie').should('not.exist')
    })

  it('should ensure the subscription form submit successfully', () => {
    // Type email into the input box
    cy.get('#mce-EMAIL').should('be.visible').type('test@example.com')

    // Click the subscribe button
    cy.get('#mc-embedded-subscribe').should('be.visible').click()


    })
  it('should allow typing into the search input and clicking the submit button', () => {
    // Intercept the form submission
    cy.intercept('GET', '/search*').as('searchRequest')

    // Type into the search input
    cy.get('input[name="q"]').should('be.visible').type('Math')

    // Click the submit button
    cy.get('button[type="submit"]').should('be.visible').click()

    // Wait for the search request and verify the URL
    cy.wait('@searchRequest').its('request.url').should('include', '/search')
    })
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

    // Iterate over each navigation link
    navLinks.forEach(link => {
      // Check that the link is present and visible
      cy.get(link.selector).should('be.visible')

      // Verify the URL path
      cy.get(link.selector).should('have.attr', 'href').and('include', link.expectedUrl)
    })
      })
 
  it('should display correctly on different screen sizes', () => {
    // Check different screen size
    cy.viewport('iphone-6')
    cy.get('main').should('be.visible')

    cy.viewport('ipad-2')
    cy.get('main').should('be.visible')

    cy.viewport('macbook-15')
    cy.get('main').should('be.visible')
    })

  it('should show the button when scrolled down 20px and scroll to top when clicked', () => {
    // Scroll down to the footer
    cy.get('footer').scrollIntoView() 

    // Check that the "Return to Top" button is visible
    cy.get('#bttopBtn', { timeout: 10000 }).should('be.visible').and('have.css', 'display', 'block')

    // Click the "Return to Top" button
    cy.get('#bttopBtn').click()

    // Verify the page is scrolled to the top and the buttom is hidden
    cy.get('#bttopBtn').should('not.be.visible')
    })
  
  it('should be hidden when page is scrolled up to less than 20px', () => {
    // Scroll the page up to the top
    cy.scrollTo(0, 0)
  
    // Check that the "Return to Top" button is hidden
    cy.get('#bttopBtn').should('not.be.visible')
    })

  it('should open social media links correctly', () => {
    // Define a list of social media links and their expected URLs
    const socialMediaLinks = [
      { selector: 'a[href*="facebook.com"]', urlPart: 'facebook.com' },
      { selector: 'a[href*="twitter.com"]', urlPart: 'twitter.com' },
      { selector: 'a[href*="instagram.com"]', urlPart: 'instagram.com' },
      { selector: 'a[href*="youtube.com"]', urlPart: 'youtube.com' },
      { selector: 'a[href*="tvolearn.com"]', urlPart: 'tvolearn.com' },
     
      // Add other social media links as needed
    ]

    // Iterate over each social media link
    socialMediaLinks.forEach(link => {
      cy.get(link.selector).should('have.attr', 'href').and('include', link.urlPart)
    })
  })
})
 

