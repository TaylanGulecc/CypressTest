require('cypress-xpath')
import dashboardLocators from "../fixtures/dashboardLocators"
import Methods from "../pages/Methods"
import methods from "../pages/Methods"
describe('template spec', () => {
  it('Redirect to the shirts', () => {
    methods.visit('https://demo.vercel.store/')
    methods.clickButton(dashboardLocators.shirtsLinkText)
    })

    it('Redirect to the stickers', () => {
      methods.visit('https://demo.vercel.store/')
      methods.clickButton(dashboardLocators.stickersLinkText)
      })

    it('Verify dashboard page', () => {
        methods.visit('https://demo.vercel.store/')
        methods.contain('Stickers')
        methods.contain('Shirts')
        methods.contain('All')
      })
  

    it('Search product', () => {
      methods.visit('https://demo.vercel.store/')
      methods.fillInput(dashboardLocators.searchProductInputText,'Acme Circles T-shirt',2000)

      })

      it('Verifying some texts on dashboard', () => {
        methods.visit('https://demo.vercel.store/')
        Methods.clickButton(dashboardLocators.homeButton)
        methods.contain('Home')
        methods.contain('FAQ')
        methods.contain('Stickers')
        methods.contain('Shirts')
        methods.contain('All')
        Methods.clickButton(dashboardLocators.aboutButton)
        methods.contain('About')
        methods.urlText("https://demo.vercel.store/about")
        Methods.clickButton(dashboardLocators.termsAndConditionButton)
        Methods.wait(2000)
        methods.contain('Terms & Conditions')
        methods.urlText("https://demo.vercel.store/terms-conditions")
        Methods.clickButton(dashboardLocators.shippingAndReturnPolicyButton)
        methods.urlText('https://demo.vercel.store/shipping-return-policy')
        Methods.clickButton(dashboardLocators.privacyPolicyButton)
        methods.urlText('https://demo.vercel.store/privacy-policy')
        Methods.clickButton(dashboardLocators.faqButton)
        methods.contain('Frequently Asked Questions')
        })

        it('Verifying terms and conditions', () => {
          methods.visit('https://demo.vercel.store/')
          Methods.clickButton(dashboardLocators.termsAndConditionButton)
          Methods.wait(5000)
          Methods.urlPath("/terms-conditions")
          
        })

  })
