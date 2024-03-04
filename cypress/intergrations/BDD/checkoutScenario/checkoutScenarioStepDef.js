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

When('I search for the product and I add items to the cart',function(datatable)
{
datatable.hashes().forEach((productName) => {
homePage.getSearchTxtBox().type(productName.item)
homePage.getSearchBtn().click()
productPage.addToCart()
homePage.getSearchTxtBox().clear()})
})

Then('Validate items in the cart',function(datatable)
{
   productPage.getViewCart().click()
   homePage.getCartPageTitle().should('have.text','Your Cart')
   datatable.hashes().forEach((productName) => {
    productPage.verifyProduct(productName.item)
   })
})

Then('Click on the Checkout button and verify it shows login',()=>
{
cartPage.getCheckoutBtn().click()
logInPage.getLoginTitle().should('be.visible').and('contain','Log in')
})  