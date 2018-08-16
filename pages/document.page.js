let Page =require('./page');
let log= console.log;

class DocumentPage extends Page{
    constructor(){
        super();
    }

    get saveDocumentButton(){
        let selector = '//button[text()="Save Document"]';
        browser.waitForEnabled(selector,30000)
        return browser.element(selector);
    }

    get downloadPdfButton(){
        return browser.element('//button[text()="Download PDF"]');
    }
    get sendViaEmailButton(){
        return browser.element('//button[text()="Send via Email"]');
    }

    saveDocument(){
        this.saveDocumentButton.click();
        log('Click Save button.');
    }

    isSaveDocumentButtonEnabled(){
        this.saveDocumentButton.isEnabled();
    }

    isDownloadPdfButtonEnabled(){
        this.downloadPdfButton.isEnabled();
    }
    
    existSendViaEmailButton(){
        return this.sendViaEmailButton.isExisting();
    }
}

module.exports = new DocumentPage();
