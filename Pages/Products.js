import{expect, test} from '@playwright/test'

export class Products{
    constructor(page){
        this.page=page;
        this.productclick=page.locator('//*[@id="item_4_title_link"]/div')
        this.cart=page.locator('//*[@id="add-to-cart"]')
        this.cartclick=page.locator('//*[@id="shopping_cart_container"]/a')
        this.checkout=page.locator('//*[@id="checkout"]')
        this.producttext=page.locator('//*[@id="header_container"]/div[2]/span')
        this.dropdown=page.locator(".product_sort_container")
        this.count=page.locator('//*[@id="header_container"]/div[2]/div/span/select/option')
        this.clickcart=page.locator('//*[@id="shopping_cart_container"]/a') 
        this.productvisible=page.getByText('Sauce Labs Backpack')
        this.carttitle=page.locator('.title')
        this.prices=page.locator('.inventory_item_price')
        this.item=page.locator('.inventory_item_name')
        this.productcount=page.locator('.inventory_item')

    }

    async productdisplay(){
        await expect(this.producttext).toHaveText("Products")
        
    }

    async product(){
        await this.productclick.click()
    }
    async cartadd(){
        await this.cart.click()
    }
    async cartclicks(){
        await this.cartclick.click()
        await expect(this.carttitle).toHaveText("Your Cart")
        await this.checkout.click()

    }
    async dropdownvalidation(value){
        await this.dropdown.selectOption(value)
    }

    
    async getcount(){
        
       let countproduct= await this.productcount.count()
       console.log('The number of product available is '+countproduct)
    }

    async clickcarts(){
        await expect(this.clickcart).toBeVisible()
    }

    async productvisiblevalidation(){
        await expect(this.productvisible).toBeVisible()
    }
    async verifyPriceLowToHigh() {
    const prices = await this.prices.allTextContents()

    const actualPrices = prices.map(price =>
        parseFloat(price.replace('$', ''))
    );

    const expectedPrices = [...actualPrices].sort((a, b) => a - b);

    expect(actualPrices).toEqual(expectedPrices);
}
async verifyPriceHighToLow() {
    const prices = await this.prices.allTextContents()

    const actualPrices = prices.map(price =>
        parseFloat(price.replace('$', ''))
    );

    const expectedPrices = [...actualPrices].sort((a, b) => b - a);

    expect(actualPrices).toEqual(expectedPrices);
}
async verifyNameAToZ() {
    const names = await this.item.allTextContents()

    const actualNames = names.map(name => name.trim());

    const expectedNames = [...actualNames].sort();

    expect(actualNames).toEqual(expectedNames);
}
async verifyNameZToA() {
    const names = await this.item.allTextContents()

    const actualNames = names.map(name => name.trim());

    const expectedNames = [...actualNames].sort().reverse();

    expect(actualNames).toEqual(expectedNames); 

}  
} 