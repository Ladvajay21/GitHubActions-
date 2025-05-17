
const { test, expect } = require('@playwright/test');

class checkOut {

    constructor(page)
    {
      this.page = page;
      this.checkOut =  page.locator("text=Checkout");
      this.countryName = page.locator("[placeholder*='Country']");
      this.dropdown = page.locator(".ta-results");
      //this.button = page.locator("button");
      this.username = page.locator(".user__name [type='text']");
      this.submitButton = page.locator("//a[normalize-space()='Place Order']");
      this.displayMessage = page.locator(".hero-primary");
      this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
  
    }
   

    async checkoutProcess(email){

        await this.checkOut.click();
        await this.countryName.type("ind");
        //await this.dropdown;
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if (text === " India") {
               await this.dropdown.locator('button').nth(i).click();
               await this.page.pause();
               break;
            }
         }
         await expect(this.username.first()).toHaveText(email);
         //await this.page.locator('.ta-backdrop').waitFor({ state: 'hidden' });
         await this.submitButton.scrollIntoViewIfNeeded();
         await this.submitButton.click();
         await expect(this.displayMessage).toHaveText(" Thankyou for the order. ");
         await this.orderId.textContent();
         console.log(this.orderId);
   
    }








}
module.exports = {checkOut};