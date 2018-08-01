class Page{
    constructor(){
        this.title='My Page';
    }

    open(path){
        browser.url(path);
        console.log(`Navigate to path:"${path}".`);
    }
}
module.exports = Page;