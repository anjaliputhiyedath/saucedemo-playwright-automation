import { expect } from "@playwright/test";
export class Checkoutoverview{
    constructor(page){
        this.page=page
        this.checkouttitle=page.locator('.title')
        this.productname=page.locator('.inventory_item_name')
        this.quantity=page.locator('.cart_quantity')
        this.prices=page.locator('.inventory_item_price')
        this.itemtotal=page.locator('.summary_subtotal_label')
        this.finish=page.locator('//*[@id="finish"]')
        this.home=page.locator('//*[@id="back-to-products"]')
        this.button=page.locator('//*[@id="react-burger-menu-btn"]')
        this.logout=page.locator('//*[@id="logout_sidebar_link"]')
        this.cancelbtn=page.locator('//*[@id="cancel"]')
        this.cancelpage=page.locator('//*[@id="header_container"]/div[2]/span')
        this.tax = page.locator('.summary_tax_label')
        this.total = page.locator('.summary_total_label')
    }
    async verifytitle(expectedTitle){
        await expect(this.checkouttitle).toHaveText(expectedTitle)
    }
    async verifyproductname(){
        await expect(this.productname).toHaveText("Sauce Labs Backpack")
    }
    async verifyquantity(){
        await expect(this.quantity).toHaveText("1")
    }
    async verifyprice(){
        await expect(this.prices).toHaveText("$29.99")
    }
    async verifyitemtotal(){
        await expect(this.itemtotal).toHaveText("Item total: $29.99")
    }
    async verifyTax() {
    await expect(this.tax).toHaveText("Tax: $2.40")
    }

    async verifyTotal() {
    await expect(this.total).toHaveText("Total: $32.39")
   }
    async finishclick(){
        await this.finish.click()
    }
    async cancelclick(){
        await this.cancelbtn.click()
    }
    async verifycancelpage(){
        await expect(this.cancelpage).toHaveText("Products")
    }


}