class JulesLogin {

    constructor (page){

     this.page= page;
     this.Email = page.locator("//input[@name='email']");
     this.password =  page.locator("//input[@name='password']");
     this.login = page.locator ('[data-test-id="signin"]');

    }

   async goto ()
   {
     await this.page.goto ("https://demo.haroldwaste.com/authentication");
   }
   
    async loginScript (Email,password)
    {
      await this.Email.fill(Email);
      await this. password.fill (password);
      await this.login.click();
      

    }





}
module.exports= {JulesLogin};