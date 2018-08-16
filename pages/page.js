let log = console.log;
class Page{
    constructor(){
        this.title='My Page';
    }

    open(path){
        browser.url(path);
        log(`Navigate to path:"${path}".`);
    }
}
module.exports = Page;