import { Role } from 'testcafe'
import {URLS, CREDENTIALS} from './Constants'
import loginpage from '../pages/LoginPages'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, { preserveUrl:true })