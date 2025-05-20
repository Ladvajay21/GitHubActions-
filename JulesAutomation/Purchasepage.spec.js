const { test, expect } = require('@playwright/test');
const { clearLine } = require('readline');

test('browserEvoke', async ({ page }) => {

  await page.goto('https://demo.haroldwaste.com/authentication');

  const Email = page.locator('[data-test-id="input-email"]');
  const Password = page.locator('[data-test-id="input-password"]')
  const login = page.locator('[data-test-id="signin"]');

  await Email.getByRole('textbox').fill('jay.ladva@julesai.com');
  await Password.getByRole('textbox').fill('Jay1234');
  await login.click();
  await page.pause(5000);
 









})