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


    })



    //step 1 enter name, email address and click sign up button
    // it('Test Step 1', function (browser) {
    //     signUp
    //         .waitForElementVisible('@nameField', 5000, 'name field appears')
    //         .setValue('@nameField', 'Test')
    //         .setValue('@emailField', 'ariannagun@gmail.com')
    //         .click('@signUpBtn');
    //     })

    //     //step 2 enter password, first name, last name, address
    //    it('Test Step 2', function (browser) {
    //     signUp
    //       .waitForElementVisible('@passwordField', 5000, 'password field appears')
    //       .setValue('@passwordField', 'test')
    //       .setValue('@firstNameField', 'faker')
    //       .setValue('@lastNameField', 'test')
    //       .setValue('@addressField', '555 E Hamptom Ave')
    //       .click('@countryField')
    //       .click('@countryUnitedField')
    //       .setValue('@stateField', 'Wisconsin')
    //       .setValue('@cityField', 'Milwaukee')
    //       .setValue('@zipCodeField', '53217')
    //       .setValue('@mobileNumberField', '444556677')
    //       })
      

        //Step 3 click the create account button
        // it('Te')

        //Step 4 verify that account has been created


    })
