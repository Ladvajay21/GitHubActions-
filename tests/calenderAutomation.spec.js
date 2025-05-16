const {test , expect} = require ('@playwright/test');
const { text } = require('stream/consumers');

test ('calenderAutomation' , async  ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();

const year = "2027";
const month = "8";
const date = "21";
const expectedGroup = [year,month,date];


await page.goto ("https://rahulshettyacademy.com/seleniumPractise/#/offers");
await page.locator("//div[@class='react-date-picker__inputGroup']").click();
await page.locator("//span[@class='react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from']").click();
await page.locator("//span[@class='react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from']").click();
await page.pause();
await page.getByText(year).click();
await page.locator("div[class='react-calendar__viewContainer'] button").nth(month-1).click();
await page.locator("//abbr [.='"+date+"']").click();
const wholeText = await page.locator(".react-date-picker__inputGroup__input");
for(let index = 0; index<wholeText.length; index++)
{
    const value = wholeText[index].getAttribute("value");
    expect(value).toEqual(expectedGroup[Index]);

}











})