const { LoginConst } = require("./LoginConst");
const { expect } = require('@playwright/test');

class cartaddition {

constructor(page) {

    this.page = page;
    this.textContext = page.locator(".card-body b");
    this.product1 = page.locator ("//body/app-root/app-dashboard[@class='ng-star-inserted']/section[@id='products']/div[@class='container']/div[@class='row']/div[1]/div[1]/div[1]");
    this.cartClick = page.locator ("//div[@class='container']//div[1]//div[1]//div[1]//button[2]");
    this.addToCart = page.locator("[routerlink*='cart']");
    this.assertion =  page.locator("div li");
    this.assertion2 = page.locator("h3:has-text('zara coat 3')");
}


async additionToCart (textContext)
{
    await this.textContext.allTextContents();
    console.log(this.textContext);
    await this.textContext.count();
    await this.product1.click();
    await this.cartClick.click ();
    await this.addToCart.click ();
    await this.assertion.first().waitFor();
    await this.assertion2.isVisible();
    expect (this.assertion2).toBeTruthy();

}







}
 module.exports = {cartaddition};