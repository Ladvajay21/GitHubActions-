const { test, expect } = require('@playwright/test');
const {POManager} = require ('../loginConstants/POManager');


 test.only ('endtoendProjectEcommerceSitePage', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const password = "Iamking@000" ;
   const productName = 'zara coat 3';
   
   const POmanager = new POManager(page);

   const loginpage = POmanager.getloginpage();
   await loginpage.goTo();
   await loginpage.loginScript(email,password);

   const cartAddition2 = POmanager.getcartAddition2();
   await cartAddition2.additionToCart();

   const checkout = POmanager.checkOut();
   await checkout.checkoutProcess(email);


   
   
})