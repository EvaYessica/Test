import {Selector} from 'testcafe'

class ActionPages{
    constructor(){
        this.leftMenu = Selector('span[class="item_content"]').withText('Inbox')
        //.withText('Inbox')
        //this.leftMenu = Selector('#left_menu').withText('Inbox')
        //.innerText).contains('Inbox')
    }
}

export default new ActionPages