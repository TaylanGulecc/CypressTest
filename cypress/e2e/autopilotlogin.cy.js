require('cypress-xpath')
describe('template spec', () => {
  //navigation
  it('loginautopilot', () => {
    cy.visit('https://autopilot.mynak.net/auth/login')
    cy.url().should('eq','https://autopilot.mynak.net/auth/login')
    cy.location().should((location)=>{
      expect(location.href).to.eq('https://autopilot.mynak.net/auth/login')
      expect(location.pathname).to.eq('/auth/login')
      expect(location.protocol).to.eq('https:')
    })
    cy.xpath('//input[@id="email"]').type('admin@example.com')
    cy.xpath('//input[@id="password"]').type('secret')  
    cy.xpath('//button[@type="submit"]').click()
    cy.xpath('//span[@class="user-name"]').should('have.text','Super Admin')
    cy.xpath('//span[@class="user-name"]').contains('Super Admin').should((element)=>{
      expect(element.text()).to.equal('Super Admin')

})

})
})
