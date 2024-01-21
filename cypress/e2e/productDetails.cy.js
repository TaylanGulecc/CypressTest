require('cypress-xpath')
import dashboardLocators from "../fixtures/dashboardLocators"
import productDetailsLocator from "../fixtures/productDetailsLocator"
import searchResultLocator from "../fixtures/searchResultLocator"
import methods from "../pages/Methods"
describe('Searching', () => {
  //navigation
  it('Search product white color type and 6X8 size', () => {
    methods.visit('https://demo.vercel.store/')
    methods.fillInput(dashboardLocators.searchProductInputText,'Acme Drawstring Bag{enter}')
    methods.clickButton(searchResultLocator.searchResultProduct)
    methods.wait(1000)
    methods.clickButton(productDetailsLocator.colorWhiteType,1000)
    methods.clickButton(productDetailsLocator.productSizeType,1000)
    methods.clickButton(productDetailsLocator.addToCart)
    methods.shouldHaveText(productDetailsLocator.itemQuantity,"1")
    methods.shouldHaveText(productDetailsLocator.ItemPrice,"$6.00USD")
    methods.clickButton(productDetailsLocator.increaseItemQuantity)
    methods.shouldHaveText(productDetailsLocator.itemQuantity,"2")
    methods.shouldHaveText(productDetailsLocator.ItemPrice,"$12.00USD")
  })
  })