import{test,expect} from '@playwright/test';
import { Products } from '../Pages/Products'
import {LoginPage} from '../Pages/Login'
import { Checkout } from '../Pages/Checkout'
import { Cart } from '../Pages/Cart';
import {Checkoutoverview} from '../Pages/Checkoutoverview'

// Login with valid credentials, add a product to the cart and navigate to the checkout information page before each test.

test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/")
        const lp = new LoginPage(page)
        await lp.login("standard_user", "secret_sauce")
        await lp.click()
        const cart=new Cart(page)   
    await cart.selectproduct()
    await cart.addtocartclick()
    await cart.backbtnclick()
    await cart.cartclicks()
    await cart.checkoutclicks()
})

test('Verify checkout title',async({page})=>{
    const check = new Checkout(page)
    await check.checkouttitlevalidation()
})
test('Verify checkout with valid data',async({page})=>{
    const check = new Checkout(page)
    await check.setValues("Mili","mathew","123456")
    await check.continueclick()
    const checkover = new Checkoutoverview(page)
    await checkover.verifytitle("Checkout: Complete!")
})
test('Verify checkout with empty first name',async({page})=>{
    const check = new Checkout(page)
    await check.setValues("","mathew","123456")
    await check.continuecheckoutclick()
    await check.errormessagevalidation("Error: First Name is required")
})
test('Verify checkout with empty last name',async({page})=>{
    const check = new Checkout(page)
    await check.setValues("Mili","","123456")
    await check.continuecheckoutclick()
    await check.errormessagevalidation("Error: Last Name is required")
})
test('Verify checkout with empty postal code',async({page})=>{
    const check = new Checkout(page)
    await check.setValues("Mili","mathew","")
    await check.continuecheckoutclick()
    await check.errormessagevalidation("Error: Postal Code is required")
})  
test('Verify checkout with all fields empty',async({page})=>{
    const check = new Checkout(page)
    await check.setValues("","","")
    await check.continuecheckoutclick()
    await check.errormessagevalidation("Error: First Name is required")
})
test('Verify cancel button',async({page})=>{
    const check = new Checkout(page)
    await check.cancelbtnclick()
    await check.cancelpagevalidation()
})

