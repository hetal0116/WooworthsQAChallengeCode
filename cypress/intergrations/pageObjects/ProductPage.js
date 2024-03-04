class ProductPage{

    getViewCart(){
        return cy.get('#header-view-cart-button')
    }

/**
	 * Adds product to the cart
	 * @param None
	 * @return None  
	 */

addToCart() { 
    cy.get('div[class*="product-grid-v2--tile"]>.ng-star-inserted>.ng-star-inserted>.ng-star-inserted').shadow().find('section').find('.product-tile-cart-controls').find('wc-add-to-cart').shadow().find('.add-to-cart-btn').first().click({force: true})
  }

  /**
	 * Verifies products in the cart
	 * @param productName
	 * @return None     
	 */

verifyProduct(productName){
    cy.get('.cart-content').contains(productName)
}
}
export default ProductPage;