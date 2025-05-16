const { test, expect } = require('@playwright/test');
const { clearLine } = require('readline');
const {JulesLogin} = require('../loginConstants/JulesLogin');
const Email = 'jay.ladva@julesai.com';
const password = 'Jay1234';


 test ('browserEvoke', async ({ page }) => {

const jules = new JulesLogin(page);
await jules.goto();
await jules.loginScript(Email , password);
//await page.goto('https://demo.haroldwaste.com/authentication');

  //const Email = page.locator('[data-test-id="input-email"]');
  //const Password = page.locator('[data-test-id="input-password"]')
  //const login = page.locator ('[data-test-id="signin"]');
  //const purchases = await page.locator("//tbody/tr");
  //const purchaseRef = "P2024-11-0-002-361" ;

  //await Email.getByRole('textbox').fill('jay.ladva@julesai.com');
  //await Password.getByRole('textbox').fill ('Jay1234');
  //await login.click();
  //const sale = await page.locator('xpath=//tbody/tr').filter({ hasText: "P2024-11-0-002-361" }).click();
  


    
  




 })