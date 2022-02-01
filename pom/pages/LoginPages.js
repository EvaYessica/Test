import {Selector, t } from 'testcafe'

class LoginPages{
    constructor(){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('button[class="submit_btn ist_button ist_button_red sel_login"]')
    }

    async submitLoginForm(username, password){
    await t
    .typeText(this.usernameInput, username)
    .typeText(this.passwordInput, password)
    .click(Selector(this.loginButton))
    .wait(10000)
    }
}

export default new LoginPages
