
import { expect } from "@playwright/test";
export class LoginPage{
    constructor(page){
        this.page = page
        this.usernameInput = page.locator('//*[@id="user-name"]')
        this.passwordInput = page.locator('//*[@id="password"]')
        this.loginButton = page.locator('//*[@id="login-button"]')
        this.errmessage=page.locator('[data-test="error"]')
    }

    async login(username, password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        
    }
    async click(){
        await this.loginButton.click()
    }
    async loginbtnvalidation(){
        await expect(this.loginButton).toBeVisible()
    }
    async errormessagevalidation(){
        let mesage=await this.errmessage.textContent()
        console.log("error message is "+mesage)
    }

}
