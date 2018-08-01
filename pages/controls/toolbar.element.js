class ToobarElement{
    constructor(){
    }
    get howItWorksLink() {
            return browser.element('a[aria-label="How it Works"]');
    }
    get createDocumentsLink(){
        return browser.element('//span[text()="create documents"]//parent::li/a');
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

    navigateToMainPage(){
        this.howItWorksLink.click();
        console.log('Click on "Main Page" button.');
    }
    navigateToCreateDocuments(){
        this.createDocumentsLink.click();
        console.log('Click on "Create Documents" button.');
    }
    navigateToMyDocuments(){
        this.myDocumentsLink.click();
        console.log('Click on "My Documents" button.');
    }
    navigateToMyProfile(){
        this.myProfileLink.click();
        console.log('Click on "My Profile" button.');
    }
    navigateToHelp(){
        this.helpLink.click();
        console.log('Click on "Help" button.');
    }
}
module.exports = ToobarElement;