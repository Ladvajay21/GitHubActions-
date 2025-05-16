const {test , expect} = require ('@playwright/test');


test ('handlingChildWindows' , async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage(); 

   // navigate to julesai page. 
 await page.goto ('https://www.julesai.com/');
 const title = await page.title ();
 console.log('The title of the page is ' , title );

 // navigate to other window of booking
   const book = page.locator("//a[@class='button menu-button w-button']");

   const [newPage]  = await Promise.all(
  [ context.waitForEvent('page') ,
    book.click()
  ] 
 ) ;
 await newPage.waitForLoadState('networkidle');
 //await newPage.pause();


    });
   
