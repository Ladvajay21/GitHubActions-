const {test , expect} = require ('@playwright/test');
const { text } = require('stream/consumers');

test ('SpecialLocaors' , async  ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();

//navigating to page 
await page.goto("https://rahulshettyacademy.com/angularpractice/");

// filling the form 

 await page.locator ("//div[@class='form-group']//input[@name='name']").fill('Jay Ladva');
 await page.locator("//input[@name='email']").fill('Jayladva0987@gmail.com');
 await page.locator ("//input[@id='exampleInputPassword1']").fill('jayladva1234');
 await page.getByLabel('Check me out if you Love IceCreams!').click();
 //await page.pause();
 await page.getByLabel('Gender').selectOption('Female');
 await page.getByLabel('Student').check();
 await page.getByRole("button" , {name : "Submit"}).click();
 await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
 await page.getByRole("link", {name : "Shop"}).click();
 await page.locator("body app-root app-card:nth-child(3)").filter({hasText : "Nokia Edge"}).getByRole("button").click();
 await page.locator("//a[@class='nav-link btn btn-primary']").click();
 await page.pause();




 







})