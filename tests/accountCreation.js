const Pages = {
  signUpPage: () => browser.page.signUpPage()
};

describe('Account Creation Happy Path', function () {

    before(() => {
      signUp = Pages.signUpPage();
    });

    specify('Preconditions', function (browser) {
        browser.url('https://www.automationexercise.com/login')
        signUp.waitForElementVisible('@nameField', 10000)
        browser.assert.urlEquals('https://www.automationexercise.com/login');
    });   
    it('Command tests', function (browser) {
        signUp.signUp('test', 'ariannagunn+1@gmail.com', 'password', 'firstName', 'lastName', '555 E Hampton Ave', 'country', 'unitedStates', 'Wisconsin', 'Milwaukee', '53217', '4445556666')


    });


    });
