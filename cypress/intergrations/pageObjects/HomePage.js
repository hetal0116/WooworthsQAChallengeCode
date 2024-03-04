class HomePage{

getSearchTxtBox(){
        return cy.get('#wx-headerSearch')
    }

getSearchBtn(){
    return cy.get('#wx-button-header-search-find')
}

getCartPageTitle(){
    return cy.get('.heading-large-title')
}
}
export default HomePage;