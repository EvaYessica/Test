import {Selector, t} from 'testcafe'
import LoginPages from '../pages/LoginPages'
import {CREDENTIALS, URLS} from '../data/Constants'
import ActionPages from '../pages/ActionPages'
import { STANDARD_USER } from '../data/Roles'

fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`
    //.page `https://todoist.com/users/showlogin`

//test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    //await LoginPages.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    //await t
    //.click(Selector('a[href="/users/showlogin"]'))
    //.wait(3000)
    //.typeText(loginPage.usernameInput, CREDENTIALS.STANDARD_USER.USERNAME)
    //.typeText(loginPage.passwordInput, CREDENTIALS.STANDARD_USER.PASSWORD)
    //.click(Selector(loginPage.loginButton))
    /*.typeText(LoginPages.usernameInput, CREDENTIALS.STANDARD_USER.USERNAME)
    .typeText(LoginPages.passwordInput, CREDENTIALS.STANDARD_USER.PASSWORD)
    .click(Selector(LoginPages.loginButton))
    .wait(10000)*/
    //await t.expect(ActionPages.leftMenu.exists).ok()
    //.expect(Selector('span[class="item_content"]').innerText).contains('Inbox')
    //.expect(Selector('#left_menu').innerText).contains('Inbox')
//})

test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    //await t
    //.click(Selector('a[href="/users/showlogin"]'))
    //.wait(3000)
    //.typeText(loginPage.usernameInput, CREDENTIALS.STANDARD_USER.USERNAME)
    //.typeText(loginPage.passwordInput, CREDENTIALS.STANDARD_USER.PASSWORD)
    //.click(Selector(loginPage.loginButton))
    /*.typeText(LoginPages.usernameInput, CREDENTIALS.STANDARD_USER.USERNAME)
    .typeText(LoginPages.passwordInput, CREDENTIALS.STANDARD_USER.PASSWORD)
    .click(Selector(LoginPages.loginButton))
    .wait(10000)*/
    await t.expect(ActionPages.leftMenu.exists).ok()
    //.expect(Selector('span[class="item_content"]').innerText).contains('Inbox')
    //.expect(Selector('#left_menu').innerText).contains('Inbox')
})


/*import {Selector, t} from 'testcafe'

fixture('Login feature test')
    .page `https://todoist.com/`

test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t
    .click(Selector('a[href="/users/showlogin"]'))
    .wait(3000)
    .typeText('#email','test@yahoo.com.mx')
    .typeText('#password','test4you')
    .click(Selector('button[class="submit_btn ist_button ist_button_red sel_login"]'))
    .wait(7000)
})*/