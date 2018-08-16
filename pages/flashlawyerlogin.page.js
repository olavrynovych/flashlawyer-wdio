let Page =require('./page');
let ToobarElement =require('../controls/toolbar.element');
let log = console.log;

class LoginPage extends Page{
    constructor(){
        super();
        this.toolbar = new ToobarElement();
    }
    open(){
        super.open('https://flashlawyer.com/login');
    }

    get googleLoginLink(){
        return browser.element('//user-login/button[contains(@class,"btn-google")]');
    }

    get facebookLoginLink(){
        return browser.element('//user-login/button[contains(@class,"btn-facebook")]');
    }

    openGoogleLogin(){
        this.googleLoginLink.click();
        log('Click on "Google login" button.');
    }
}

module.exports = new LoginPage();
