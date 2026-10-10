import{expect, test} from '@playwright/test'
import {LoginPage} from '../Pages/Login'
import { Products } from '../Pages/Products'
import { Checkout } from '../Pages/Checkout'

// Verify the complete end-to-end shopping flow in SauceDemo.
// The test accepts valid credentials, verifies the Products page,adds a product to the cart, completes checkout, verifies order completion,
// navigates back to Products, and logout successfully.

test('Verify complete end-to-end shopping flow', async ({ page }) => {
    
    await page.goto("https://www.saucedemo.com/")
     const loginpage = new LoginPage(page)
    await loginpage.login("standard_user", "secret_sauce")
    await loginpage.loginbtnvalidation()
    await loginpage.click()
    const product = new Products(page)
     await product.product()
     await product.productvisiblevalidation()
    await product.cartadd()
    await product.cartclicks()
    const check = new Checkout(page)
    await check.checkouttitlevalidation()
    await check.setValues("Mili","mathew","123456")
    await check.continueclick()
    await check.successfulordermsg()
    
    await check.homeclick()
    await check.logoutclick()
    

    })
    
    
    
    
    
    
   
   


