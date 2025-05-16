const { test, expect } = require('@playwright/test');


 test ('browserEvoke', async ({ page }) => {
await page.goto('https://demo.haroldwaste.com/authentication');

  const Email = page.locator('[data-test-id="input-email"]');
  const Password = page.locator('[data-test-id="input-password"]')
  const login = page.locator ('[data-test-id="signin"]');
  const toBehedgedPage = page.locator ('link', { name: 'Hedging contracts' });
  
  
  // Get the URL of the page
  const pageUrl = page.url(); 
  console.log('The URL of the page is:', pageUrl);

  // Get the title of the page
  const pageTitle = await page.title();
  console.log('The title of the page is:', pageTitle);

  await expect(page).toHaveURL('https://demo.haroldwaste.com/authentication'); 
  await Email.getByRole('textbox').click();
  
  //await expect(page).toHaveTitle('Jules.ai');


// To fill email and password.
  await Email.getByRole('textbox').fill('jay.ladva@julesai.com');
  await Password.getByRole('textbox').fill ('Jay1234');
  await login.click();

// to land on risk management modal -> to be hedged tab.
  await page.locator("//div[@permission='HEDGING_CONTRACTS,OPEN_POSITION_REPORT']").click();
  
  await page.locator("div[permission='HEDGING_CONTRACTS']").click();
  await expect (page).toHaveURL ('https://demo.haroldwaste.com/hedging-contracts');
  
  
  

  
});

