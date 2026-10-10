import { expect } from "@playwright/test";
export class Checkout{
    constructor(page){
        this.page=page
        this.firstname=page.locator('//*[@id="first-name"]')
        this.lastname=page.locator('//*[@id="last-name"]')
        this.postcode=page.locator('//*[@id="postal-code"]')
        this.continue=page.locator('//*[@id="continue"]')
        this.finish=page.locator('//*[@id="finish"]')
        this.home=page.locator('//*[@id="back-to-products"]')
        this.button=page.locator('//*[@id="react-burger-menu-btn"]')
        this.logout=page.locator('//*[@id="logout_sidebar_link"]')
        this.checkouttitle=page.locator('.title')
        this.errormessage=page.locator('.error-message-container.error')
        this.cancelbtn=page.locator('//*[@id="cancel"]')
        this.cancelpage=page.locator('//*[@id="header_container"]/div[2]/span')
        this.successmsg=page.locator('//*[@id="header_container"]/div[2]/span')
        this.msgvalidation=page.locator('//*[@id="checkout_complete_container"]/h2')

    }

    async setValues(fn,ln,pc){
        await this.firstname.fill(fn)
        await this.lastname.fill(ln)
        await this.postcode.fill(pc)
        
    }
    async continueclick(){
        await this.continue.click()
        await this.finish.click()
       
    }
    async continuecheckoutclick(){
        await this.continue.click()
    }

    async homeclick(){
          await this.home.click()
    }

    async logoutclick(){
        await this.button.click()
        await this.logout.click()
    }
    async checkouttitlevalidation(){
        await expect(this.checkouttitle).toHaveText("Checkout: Your Information")
    }
    async errormessagevalidation(expectedMessage){
    await expect(this.errormessage)
        .toContainText(expectedMessage)
}
    async cancelbtnclick(){
        await this.cancelbtn.click()
    }
async cancelpagevalidation(){
    await expect(this.cancelpage).toHaveText("Your Cart")           

}
async finishclick(){
    await this.finish.click()   
}
async successfulordermsg(){
    await expect(this.successmsg).toHaveText("Checkout: Complete!")
}
async successmsgvalidation(expectedMessage){
    await expect(this.msgvalidation).toHaveText(expectedMessage)    
}
}