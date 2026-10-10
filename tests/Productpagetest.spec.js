import{test} from '@playwright/test'
import { Products } from '../Pages/Products'
import {LoginPage} from '../Pages/Login'

// Login with valid credentials before each test so that every test starts from the Products page.

test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/")
        const lp = new LoginPage(page)
        await lp.login("standard_user", "secret_sauce")
        await lp.click()
})
// Verify that the available products are displayed after successful login.
test('product display',async({page})=>{
    const pp=new Products(page)
    await pp.productdisplay()

})
// Verify that products are sorted by price in ascending order

test('Verify price from low to high',async({page})=>{
    const pp=new Products(page)
    await pp.dropdownvalidation({label:'Price (low to high)'})
    await pp.verifyPriceLowToHigh()
})

// Verify that products are sorted by price in descending order

test('Verify price from high to low',async({page})=>{
    const pp=new Products(page)
    await pp.dropdownvalidation({label:'Price (high to low)'})
    await pp.verifyPriceHighToLow()
})
// Verify that product names are sorted alphabetically
test('Verify name from A to Z',async({page})=>{
    const pp=new Products(page)
    await pp.dropdownvalidation({label:'Name (A to Z)'})
    await pp.verifyNameAToZ()
})
// Verify that product names are sorted in reverse alphabetical order
test('Verify name from Z to A',async({page})=>{
    const pp=new Products(page)
    await pp.dropdownvalidation({label:'Name (Z to A)'})
    await pp.verifyNameZToA()
})
//Verify that the expected number of products is displayed
test('verify product count',async({page})=>{

    const pp=new Products(page)
    await pp.getcount()
})

 // Verify that the shopping cart icon is visible  
   test('Verify Cart is visible',async({page})=>{
     const pp=new Products(page) 
    await pp.clickcarts()
    

})