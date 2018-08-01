let MainPage = require('../../pages/main.page');

// describe('First test',function(){
//     it('#1. Verification.',function(){
//         MainPage.open();
//         MainPage.navigateToMyDocuments();
//         expect(browser.getTitle()).toBe('All Legal Document Generators and Chatbots');
//         //browser.getTitle().should.be.equal('All Legal Document Generators and Chatbots');
//     })
// });

describe('First test',function(){
    it('#1. Verification.',function(){
        //toolbar.navigateToCreateDocuments();
        MainPage.open();
        let toolbar = MainPage.toolbar;
        toolbar.navigateToMyDocuments();
        expect(browser.getTitle()).toBe('All Legal Document Generators and Chatbots');

        toolbar.navigateToMyProfile();
        expect(browser.getTitle()).toBe('Login or Signup | FlashLawyer');

        toolbar.navigateToMainPage();
        expect(browser.getTitle()).toBe('Legal Document Generators Powered by AI | FlashLawyer');
        //browser.getTitle().should.be.equal('All Legal Document Generators and Chatbots');
    })
});