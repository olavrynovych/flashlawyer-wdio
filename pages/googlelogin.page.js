let Page =require('./page');
let log = console.log;

class GoogleLoginPage extends Page{
    constructor(){
        super();
    }

    get loginInput(){
        let elementSelector = '//input[@id="identifierId"]';
        browser.waitForVisible(elementSelector,30000)
            .waitForEnabled(elementSelector,30000);
        return browser.element(elementSelector);
    }
    get nextLoginButton(){
        let elementSelector = '//div[@id="identifierNext"]';
        browser.waitForVisible(elementSelector,30000);
        browser.waitForEnabled(elementSelector,30000);
        return browser.element(elementSelector);
    }
    get passwordInput(){
        let elementSelector = '//input[@type="password"]';
        browser.waitForVisible(elementSelector,30000);
        browser.waitForEnabled(elementSelector,30000);
        return browser.element(elementSelector);
    }
    get nextPasswordButton(){
        let elementSelector = '//div[@id="passwordNext"]';
        browser.waitForVisible(elementSelector,30000);
        browser.waitForExist(elementSelector,30000);
        browser.waitForEnabled(elementSelector,30000);
        return browser.element(elementSelector);
    }
    setLogin(login){
        this.loginInput.setValue(login);
        log('Set login: '+login);
    }
    clickNextLogin(){
        this.nextLoginButton.click();
        log('Click "next Login" button.');
    }
    setPassword(pass){
        log(this.passwordInput);
        this.passwordInput.setValue(pass); 
        log('Set password: "'+pass+'".');
    }
    nextPasswordClick(){
        this.nextPasswordButton.click();
        log('Click "next Password" button.');
    }
    waitForWindowClosed(){
        log("Window handles count before: "+browser.windowHandles().value.length);
        browser.waitUntil(function(){
            return browser.windowHandles().value.length==2;
        },30000,'Expect login window to be closed.');
        log("Window handles count after: "+browser.windowHandles().value.length);
    }
    login(name, pass){
        let handles = browser.windowHandles();
        browser.switchTab(handles.value[1]);
        this.setLogin(name);
        this.clickNextLogin();
        this.setPassword(pass);
        this.nextPasswordClick();
        this.waitForWindowClosed();
        browser.switchTab(handles.value[0]);
    }
}

module.exports = new GoogleLoginPage();
