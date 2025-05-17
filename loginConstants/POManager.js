const { get } = require("http");
const { cartaddition } = require("./cartaddition")
const { checkOut } = require("./checkOut")
const { LoginConst } = require("./LoginConst")

class POManager{
    constructor (page)
    {
      this.page = page;
      this. loginpage = new LoginConst(this.page);
      this.cartAddition2 = new cartaddition(this.pageage);
      this.checkOut  = new checkOut(this.page) ;
    }


      getloginpage()
      {
        return this.loginpage;
      }
     
      getcartAddition2 ()
      {
        return this.cartAddition2;
      } 
      
      getcheckOut()
      {
   return this.checkOut;
      }

}
module.exports = {POManager};