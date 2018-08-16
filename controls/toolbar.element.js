let log = console.log;

class ToobarElement{
    constructor(){
    }
    //Main section
    get howItWorksLink() {
        return browser.element('a[aria-label="How it Works"]');
    }
    get createDocumentsLink(){
        let selector = '//span[text()="create documents"]//parent::li/a';
        browser.waitForVisible(selector,3000);
        return browser.element(selector);
    }
    get myDocumentsLink(){
        return browser.element('//span[text()="my documents"]//parent::li/a');
    }
    get myProfileLink(){
        return browser.element('//i[text()="person"]/parent::a');
    }
    get helpLink(){
        return browser.element('//span[text()="live_help"]//parent::li/a');
    }

    //Right slide section
    get closeRightMenuArrow(){
        return browser.element('//aside[@class="menu slideInLeft"]//i[text()="keyboard_arrow_left"]/parent::a');
    }
    get searchField(){
        return browser.element('//aside[@class="menu slideInLeft"]//input[@placeholder="search"]');
    }
    

    typeToSearchField(value){
        this.searchField.setValue(value);
    }
    clickOnDocumentLink(docName){
        let elementSelector = `//aside[@class="menu slideInLeft"]//ul[@class="menu-list"]//a[text()='${docName}']`;
        browser.waitForVisible(elementSelector,3000);
        browser.waitForEnabled(elementSelector,3000);
        browser.element(elementSelector).click();
        log(`Click on '${docName}' link.`);
    }

    navigateToMainPage(){
        this.howItWorksLink.click();
        log('Click on "Main Page" button.');
    }
    openCreateDocumentsMenu(){
        this.createDocumentsLink.click();
        log('Click on "Create Documents" button.');
    }
    navigateToMyDocuments(){
        this.myDocumentsLink.click();
        log('Click on "My Documents" button.');
    }
    navigateToMyProfile(){
        this.myProfileLink.click();
        log('Click on "My Profile" button.');
    }
    navigateToHelp(){
        this.helpLink.click();
        log('Click on "Help" button.');
    }
}
module.exports = ToobarElement;