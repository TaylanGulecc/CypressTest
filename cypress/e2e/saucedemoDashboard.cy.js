require('cypress-xpath')
import saucedemoDashboardLocators from "../fixtures/saucedemoDashboardLocators"
import methods from "../pages/Methods"
describe('template spec', () => {
  //navigation
  it('loginautopilot', () => {
        methods.visit('https://www.saucedemo.com/')
        methods.fillInput('//input[@data-test="username"]','standard_user')
        methods.fillInput('//input[@data-test="password"]','secret_sauce')
        methods.clickButton('//input[@data-test="login-button"]',2000)
        methods.clickButton('//button[@data-test="add-to-cart-sauce-labs-backpack"]')
        methods.shouldHaveText('//button[@data-test="remove-sauce-labs-backpack"]','Remove')
        methods.clickButton('[class="shopping_cart_link"]')
        methods.shouldHaveText('//div[text()="Description"]','Description')
        methods.clickButton('//button[@data-test="checkout"]')
        methods.fillInput('[data-test="firstName"]','first product name')
        methods.fillInput('[data-test="lastName"]','last product name')
        methods.fillInput('[data-test="postalCode"]','lat product postalcode')
        methods.clickButton('[data-test="continue"]')
        methods.shouldHaveText('[class="cart_desc_label"]','Payment Information')
        methods.shouldHaveText('//div[text()="Shipping Information"]','Shipping Information')
        methods.shouldHaveText('[class="summary_info_label"]','Price Total')
        methods.clickButton('[data-test="finish"]')
        methods.shouldHaveText('//h2[text()="Thank you for your order!"]','Thank you for your order!')
    })
    
})