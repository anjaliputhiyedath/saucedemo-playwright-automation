import{test,expect}from'@playwright/test';
import{Cart}from'../Pages/Cart'
import {LoginPage} from '../Pages/Login'
// Login with valid credentials before each test to ensure that every test starts from the Products page.

test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/")
     const lp = new LoginPage(page)
        await lp.login("standard_user", "secret_sauce")
        await lp.click()
})

// Verify that a single product can be added to the shopping cart.

test('Verify adding 1 product to cart',async({page})=>{
    const cart=new Cart(page)   
    await cart.selectproduct()
    await cart.addtocartclick()
    await cart.backbtnclick()
    await cart.cartcountvalidation("1")
})

// Verify that two different products can be added to the shopping cart.

test('Verify adding 2 products to cart',async({page})=>{
    const cart=new Cart(page) 
     await cart.selectproduct()
    await cart.addtocartclick()
    await cart.backbtnclick()
    await cart.selectotherproduct()
    await cart.addanotherproduct()
    await cart.backbtnclick()  
   
    await cart.cartcountvalidation("2")
})

// Verify that a product can be removed from the shopping cart.
// Expected result: After adding two products and removing one,the cart should display a count of 1.
test('Verify removing product from cart',async({page})=>{
    const cart=new Cart(page)
     await cart.selectproduct()
    await cart.addtocartclick()
    await cart.backbtnclick()
    await cart.selectotherproduct()
    await cart.addanotherproduct()
    await cart.backbtnclick()
     await cart.selectproduct()
    await cart.removeclick()
    await cart.backbtnclick()

    await cart.cartcountvalidation("1")
})

   