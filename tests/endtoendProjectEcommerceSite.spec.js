const {test , expect} = require ('@playwright/test');
const { text } = require('stream/consumers');

test ('login' , async  ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();
// Locators    
const email = page.locator("//input[@id='userEmail']");
const password = page.locator("//input[@id='userPassword']");
const loginButton = page.locator('#login');
const product = await page.locator ("//div[@class='row']//div[2]//div[1]//div[1]//button[2]");
const checkout = await page.locator("//button[normalize-space()='Checkout']");
// Actions
await page.goto("https://rahulshettyacademy.com/client");
console.log('The title of the page is'  , await page.title());
await email.click();
await email.fill('jayladva@gmail.com');
await password.fill ('Testjavascript@12');
await loginButton.click();
//await page.pause();

// addition of product to the cart.
await product . click();

//Assertions 

await page.locator ("//button[@routerlink='/dashboard/cart']").click();
await page.waitForLoadState('networkidle');
const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
expect(bool).toBeTruthy();
 //

//checkout process 
await checkout.click();

//const credit = await page.locator ("//input[@value='4542 9931 9292 2293']") . pressSequentially("123-456-989");
// Replace the value in the input field selected by its current value attribute
const input = page.locator("//input[@value='4542 9931 9292 2293']");
await input.fill('4567');
await expect(input).toHaveValue('4567');
//await page.pause();

await page.locator ("//input[@placeholder='Select Country']").pressSequentially('Ind');
const pagelocator12= await page.locator("//section[@class='ta-results list-group ng-star-inserted']");
await pagelocator12 .waitFor();
const dropdown =  await pagelocator12.locator("button").count() ; 

for(let i =0; i<dropdown; ++i)
    {
    const text = await pagelocator12.locator("button").nth(i).textContent();
    if (text.trim() === "India") {
        await pagelocator12.locator("button").nth(i).click();
        break;

    }
}
//await page.pause();
const order = page.locator(".btnn.action__submit.ng-star-inserted");
await page.waitForLoadState('networkidle');
await order.click();
await page.pause();
await expect (page.locator("//h1[normalize-space()='Thankyou for the order.']")).toHaveText("Thankyou for the order.");
const orderId = await page.locator ("label[class='ng-star-inserted']").textContent();
console.log(orderId);
////////////////////////////////////////////////////////////////////////////////
await page.locator("//button[@routerlink='/dashboard/myorders']").click();
const tableScanner = await page.locator ("tbody");
await tableScanner.waitFor();
const rows =  tableScanner.locator("tbody tr");
for (let i = 0; i < await rows.count(); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId)) {
       await rows.nth(i).locator("button").first().click();
       break;
    }
 }
 const orderIdDetails = await page.locator(".col-text").textContent();
 expect(orderId.includes(orderIdDetails)).toBeTruthy();

});
