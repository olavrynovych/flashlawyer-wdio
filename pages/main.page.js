let Page =require('./page');
let ToobarElement =require('./controls/toolbar.element');

class MainPage extends Page{
    constructor(){
        super();
        this.toolbar = new ToobarElement();
    }
    open(){
         super.open('https://flashlawyer.com/');
    }

    // navigateToHowItWorks(){
    //     this.click();
    // }
    // //open toolbar
    // navigateToCreateDocuments(){
    //     this.createDocumentsLink.click();
    // }
    // navigateToMyDocuments(){
    //     this.myDocumentsLink.click();
    // }
}

module.exports = new MainPage();
