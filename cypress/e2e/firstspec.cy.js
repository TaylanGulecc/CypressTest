require('cypress-xpath')
describe('template spec', () => {
  //navigation
  it('passes', () => {
    cy.visit('/')
    cy.wait(5000)
    //cache varken reload
    cy.reload()
    //cache olmadan reload
    cy.reload(true)
    cy.go('back')
    cy.go('forward')
  })

  //query
  it('case', () => {
    cy.visit('/')
    cy.get('[aria-label="Open cart"]')
    
  })

  //query
  it('case', () => {
    cy.visit('/')
    cy.xpath('//button[@aria-label="Open cart"]')
    
  })

  
  it('get attribute', () => {
    cy.visit('/')
    cy.get("[type='Text']").invoke('attr','name').should('eq','search')
  })

  //only yazınca sadece bu test koşar
  it('contains', () => {
    cy.visit('/')
    cy.xpath('//a[contains(text(),"Stickers")]').click()
  })

  it('tıklama', () => {
    cy.visit('/')
    cy.get("[type='Text']").invoke('attr','name').should('eq','search')
  })

  it.only('search', () => {
    cy.visit('/')
    cy.xpath("//input[@placeholder='Search for products...']").type('clothes{enter}')
  })


})