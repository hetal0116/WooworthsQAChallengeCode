class CartPage{

    getCheckoutBtn(){
        return cy.get('.cart-checkout-button > .button')
    }

}
export default CartPage;