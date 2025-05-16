const {test , expect} = require ('@playwright/test');


test  ('hideText' , async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    expect(await page.locator("//input[@id='displayed-text']")).toBeVisible();
    await page.locator("//input[@id='hide-textbox']").click();
    expect(await page.locator("//input[@id='displayed-text']")).toBeHidden();
    await page.pause();
    await page.locator ("//input[@id='confirmbtn']").click();
    page.on('dialog', dialog =>dialog.accept());
    await page.locator("//button[@id='mousehover']").hover();





})