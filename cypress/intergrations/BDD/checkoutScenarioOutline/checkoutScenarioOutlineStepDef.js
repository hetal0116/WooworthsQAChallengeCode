import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../pageObjects/HomePage"
import ProductPage from "../../pageObjects/ProductPage"
import CartPage from "../../pageObjects/CartPage"
import LogInPage from "../../pageObjects/LogInPage"

const homePage=new HomePage()
const productPage=new ProductPage()
const cartPage=new CartPage()
const logInPage=new LogInPage()
let productName

Given('I open Woolworths home Page',()=>
{
    cy.visit('/')    
}) 

When(/^I search for the products (.+) and add to the cart$/,(value) =>{
    homePage.getSearchTxtBox().type(value)
    homePage.getSearchBtn().click()
    productPage.addToCart()
    homePage.getSearchTxtBox().clear()
})

Then(/^Validate (.+) in the cart$/,(value)=>{
     cy.log(value)
    productPage.getViewCart().click()
    homePage.getCartPageTitle().should('have.text','Your Cart')
    productPage.verifyProduct(value)
})

Then('Click on the Checkout button and verify it shows login page',()=>
{
    cartPage.getCheckoutBtn().click()
    logInPage.getLoginTitle().should('be.visible').and('contain','Log in')
})  