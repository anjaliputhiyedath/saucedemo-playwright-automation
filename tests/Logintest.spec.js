import{expect, test} from '@playwright/test'
import testdata from '../utiles/testdata.json'
import{LoginPage} from '../Pages/Login'
import { Products } from '../Pages/Products'

// Verify the login functionality using multiple sets of test data.
// The test reads usernames, passwords and expected results from testdata.json.
// For valid credentials, it verifies that the Products page is displayed.
// For invalid credentials, it verifies that the  error message appears.

test.describe("Login functionality - Data-driven testing",()=>{
    for(const data of testdata){
        test(`login with ${data.expected}`,async({page})=>{
            await page.goto("https://www.saucedemo.com/")
            const loginpage=new LoginPage(page)
            const product = new Products(page)
                await loginpage.login(data.username,data.password)
                await loginpage.click();
                if (data.expected === "success") {
                    
                    await product.productdisplay()
                }
                 else {
                    await loginpage.errormessagevalidation()
                }


              
        })
    }
})