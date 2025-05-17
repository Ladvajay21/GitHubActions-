const {Given , When , Then} = require('@cucumber/cucumber');
const {POManager} = require ('../../loginConstants/POManager');
const {expect} = require('@playwright/test');
const { playwright} = require('@playwright/test');
const { chromium } = require('playwright/test'); 



Given('user is on the login page', async function () {
  
  const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage(); 
    this.POmanager = new POManager(page);
    const loginpage = this.POmanager.getloginpage();
    console.log('POManager:', POManager);
   await loginpage.goTo();
  
  });

  When('enters the correct credentials {string} and {string}', {timeout: 100*1000} ,async function (email, password) {
    await this.loginpage.loginScript(email,password);
  });

  Then('the user should be logged in successfully', async function () 
    {
      Then('user is succesfully landed on the home page', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

    }
  )

  