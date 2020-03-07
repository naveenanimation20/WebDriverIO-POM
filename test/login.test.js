const loginPage = require('../pages/login.page')
const configData = require('../config');
const constants = require('../constants');

describe('login page feature test', function(){
    it('verify login page title', function(){
        browser.url('/')
        browser.maximizeWindow()
        const title = loginPage.getPageTitle()
        console.log('login page title is :', title);
        assert.equal(constants.LOGIN_PAGE_TITLE, title, 'title is not found')
    })
    it('verify sign up link', function(){
       assert.equal(true, loginPage.isSignUpLinkExist(), 'sign up link is not present')
    })
    it('verify login', function(){
        //loginPage.doLogin('naveenanimation30@gmail.com', 'Test@1234')
        loginPage.doLogin(configData.username, configData.password)
     })
})