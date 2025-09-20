describe('Account Creation Happy Path', function () {

    before(() => {
      signUp = Pages.signUpPage();
    });

    specify('Preconditions', function (browser) {
        browser.url('https://www.automationexercise.com/login')
        signUp.waitForElementsVisible('@nameField', 10000)
        browser.assert.urlEquals('https://www.automationexercise.com/login');
    });

    test('Test Step 1', function (browser) {
        signUp
            
    })
})