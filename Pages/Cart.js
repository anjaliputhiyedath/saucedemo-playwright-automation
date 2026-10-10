import{test,expect} from'@playwright/test'

export class Cart {
    constructor(page) {
        this.page = page;
        this.addproduct=page.getByText('Sauce Labs Backpack')
        this.addtocart = page.locator('//*[@id="add-to-cart"]');
        this.backbtn=page.locator('//*[@id="back-to-products"]')
        this.addnextproduct=page.locator('//*[@id="item_0_title_link"]/div')
        this.addcart=page.locator('//*[@id="add-to-cart"]');
        this.remove = page.locator('//*[@id="remove"]');
        this.cartcount = page.locator('//*[@id="shopping_cart_container"]/a/span');
        this.carttitle=page.locator('.title')
        this.cartclick=page.locator('//*[@id="shopping_cart_container"]/a')
        this.checkoutclick=page.locator('//*[@id="checkout"]')

        

    }

    async carttitlevalidation(){
        await expect(this.carttitle).toHaveText("Your Cart")
    }
    async selectproduct(){
        await this.addproduct.click()
    }
    async addtocartclick() {
        
        await this.addtocart.click()
       
        
    }
    async backbtnclick(){
        await this.backbtn.click()
    }
    async selectotherproduct(){
        await this.addnextproduct.click()

    }

    async addanotherproduct(){
        
        await this.addcart.click();
       
}
    async removeclick() {
        
        await this.remove.click();
        
    }
    async cartcountvalidation(expectedCount) {
        await expect(this.cartcount).toHaveText(expectedCount.toString());
    }   
    async cartclicks(){
        await this.cartclick.click()
        
    }  
    async checkoutclicks(){     
        await this.checkoutclick.click()
    }

   
    
    
}
