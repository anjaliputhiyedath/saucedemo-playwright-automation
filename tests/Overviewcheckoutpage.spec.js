import{test} from '@playwright/test';
import { Products } from '../Pages/Products'
import {LoginPage} from '../Pages/Login'
import { Checkout } from '../Pages/Checkout'
import { Cart } from '../Pages/Cart'
import {Checkoutoverview} from '../Pages/Checkoutoverview'

// Login with valid credentials, add a product to the cart, navigate to checkout, enter customer information,
// and proceed to the Checkout Overview page before each test.

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
    const check = new Checkout(page)
    await check.setValues("Mili","mathew","123456")
    await check.continuecheckoutclick()

})
test('Verify checkoutoverview title',async({page})=>{
    const checkover = new Checkoutoverview(page)
    await checkover.verifytitle("Checkout: Overview")
})
test('verify products in checkoutoverview',async({page})=>{
    const checkover = new Checkoutoverview(page)
    await checkover.verifyproductname()
})

test('verify quantity in checkoutoverview',async({page})=>{
    const checkover = new Checkoutoverview(page)
    await checkover.verifyquantity()
})
test('verify price in checkoutoverview',async({page})=>{
    const checkover = new Checkoutoverview(page)
    await checkover.verifyprice()
})  
test('verify sum of price in checkoutoverview',async({page})=>{
    const checkover = new Checkoutoverview(page)
    await checkover.verifyitemtotal()

})
test('Verify tax in checkout overview', async ({ page }) => {
    const checkover = new Checkoutoverview(page)
    await checkover.verifyTax()
})

test('Verify total in checkout overview', async ({ page }) => {
    const checkover = new Checkoutoverview(page)
    await checkover.verifyTotal()
})
test('verify cancel button in checkoutoverview',async({page})=>{
    const checkover = new Checkoutoverview(page)
    await checkover.cancelclick()
    await checkover.verifycancelpage()
})
test('verify finish button in checkoutoverview',async({page})=>{
    const check=new Checkout(page)
    await check.finishclick()
    await check.successfulordermsg()
    await check.successmsgvalidation("Thank you for your order!")
    await check.homeclick()
    await check.logoutclick()
})


