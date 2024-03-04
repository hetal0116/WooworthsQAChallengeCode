class LogInPage{

    getLoginTitle(){
        return cy.get('.header-ribbon > .ng-star-inserted')
    }
}
export default LogInPage;