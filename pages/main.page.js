let Page =require('./page');
let ToobarElement =require('../controls/toolbar.element');

class MainPage extends Page{
    constructor(){
        super();
        this.toolbar = new ToobarElement();
    }
    open(){
         super.open('https://flashlawyer.com/');
    }
}

module.exports = new MainPage();
