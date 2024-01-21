require('cypress-xpath')
describe('template spec', () => {
  //navigation
  it('passes', () => {
    cy.visit('https://demo.vercel.store/')
    cy.xpath('//a[text()="Stickers"]').click()
    cy.location().should((location)=>{
      expect(location.href).to.eq('https://demo.vercel.store/search/stickers')
      expect(location.pathname).to.eq('/search/stickers')
      expect(location.protocol).to.eq('https:')
    })
  })

})