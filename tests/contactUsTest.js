const Pages = {
  ContactUsPage: () => browser.page.ContactUsPage()
};

describe('Contact Us Form Completion', function () {

    before(() => {
      ContactUs = Pages.ContactUsPage();
    });

    specify('Preconditions', function (browser) {
        browser.url('https://www.automationexercise.com/contact_us')
        ContactUs.waitForElementVisible('@nameFormField', 10000)
        browser.assert.urlEquals('https://www.automationexercise.com/contact_us');
    });   
   // it('Command tests', function (browser) {
      //  signUp.signUp('test', 'ariannagunn+1@gmail.com', 'password', 'firstName', 'lastName', '555 E Hampton Ave', 'country', 'unitedStates', 'Wisconsin', 'Milwaukee', '53217', '4445556666')


    })



    //step 1 enter name, email address, subject and click submit button
     it('Test Step 1', function (browser) {
        ContactUs
          .waitForElementVisible('@nameFormField', 5000, 'name form field appears')
          .setValue('@nameFormField', 'Faker')
          .setValue('@emailFormField', 'ariannagunn+1@gmail.com')
          .setValue('@subjectFormField', 'Test Message')
          .setValue('@messageFormField', 'Hi! This is just a test.')
          .click('@submitBtn')
          .pause(1000)                              // optionally wait a moment
          .alerts.accept()                         // click OK on the alert
          .waitForElementVisible('@successMsg', 5000, 'success message is visible');

       })

  


    
