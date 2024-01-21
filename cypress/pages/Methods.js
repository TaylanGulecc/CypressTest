class Methods{

    visit(url="/"){
        cy.visit(url)
    }

    findElement(locator){
        if(locator.startsWith("/")){
            return cy.xpath(locator)
        }
        else{
            return cy.get(locator)
        }
    }

    clickButton(locator,afterWait=0){
        return this.findElement(locator).click({force:true}).wait(afterWait)
    }

    fillInput(locator,text,delay=0){
        return this.findElement(locator).clear().type(text,{delay})
    }

    shouldHaveText(locator,text){
        return this.findElement(locator).should('have.text',text)
    }

    wait(time){
        return cy.wait(time)
      }

    contain(locator){

        cy.contains(locator)
    }  

    urlText(locator){
        cy.url().should('eq',locator)
        //expect(location.href).to.eq(locator)
    }

    urlPath(pathName){
        //expect(location.pathname).to.eq(pathName)
        cy.location().should((location) => {
            expect(location.pathname).to.eq(pathName);
          });
        }
    }
export default new Methods();