import { Selector,t } from 'testcafe';

class HomePage{
    constructor() {
        this.loginHeader = Selector('h2').withText(
          'Customer Login'
        )
        this.inputUsername = Selector("input[name='username']")
        this.inputPassword = Selector("input[name='password']")
        this.buttonLogin = Selector("input[value='Log In']")
        this.loggedInUserName = Selector("p.smallText")
      }
      
      async login(username, password) {
        await t
          .typeText(this.inputUsername, username)
          .typeText(this.inputPassword, password)
          .click(this.buttonLogin)
      }
}

export default new HomePage();