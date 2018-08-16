let MainPage = require('../../pages/main.page');
let LoginPage = require('../../pages/flashlawyerlogin.page');
let GoogleLoginPage = require('../../pages/googlelogin.page');
let DocumentPage = require('../../pages/document.page');


describe('First test - ',function(){
    it('Validate "Send via Email" button exists after saving document.',function(){
        let docName = 'Vehicle Bill of Sale';
        //1,2 Open browser and go to Main page
        MainPage.open();
        let toolbar = MainPage.toolbar;
        //3. Go to My Profile
        toolbar.navigateToMyProfile();
        //4. Click Google button
        LoginPage.openGoogleLogin();
        //5. Set login
        //6. Click next button
        //7. Set password
        //8. Click next button
        GoogleLoginPage.login('automation.program1@gmail.com', 'Rjcnhjvf*~');

        //toolbar.navigateToMyDocuments();
        //expect(browser.getTitle()).toBe('All Legal Document Generators and Chatbots');
        //9. Open create documents menu
        toolbar.openCreateDocumentsMenu();

        //10. Click on document link
        toolbar.clickOnDocumentLink(docName);
        //11. Click Save document button
        DocumentPage.saveDocument();
        
        expect(DocumentPage.existSendViaEmailButton()).toBe(true);
    })
});
