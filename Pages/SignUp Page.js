const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript')
const TagHelperFile = require('../helpers/tagHelper')
let Tag = new TagHelperFile()
//const { longWait, shortWait } = require('generac.application.automation.common/data-containers/waits');

 const SignUpCommands = {
    signUp: function(name, email, password, firstName, lastName, address, country, unitedStates, state, city, zipcode, mobileNumber) {
        this
            .waitForElementVisible('@nameField', 5000, 'name field is visible')
            .setValue('@nameField', name)
            .setValue('@emailField', email)
            .click('@signUpBtn');

        this
            .waitForElementVisible('@passwordField', 5000, 'passowrd field is visible')
            .setValue('@passwordField', password)
            .setValue('@firstNameField', firstName)
            .setValue('@lastNameField', lastName)
            .setValue('@addressField', address)
            .click('@countryField')
            .click('@countryUnitedField')
            .setValue('@stateField', state)
            .setValue('@cityField', city)
            .setValue('@zipCodeField', zipcode)
            .setValue('@mobileNumberField', mobileNumber)
            .click('@createAccountBtn');

       return this;
    }
    };

module.exports = {
    elements: {
        nameField: Tag.Qa('signup-name'),
        emailField: Tag.Qa('signup-email'),
        signUpBtn: Tag.Qa('signup-button'),
        passwordField: Tag.Qa('password'),
        firstNameField: Tag.Qa('first_name'),
        lastNameField: Tag.Qa('last_name'),
        addressField: Tag.Qa('address'),
        countryField: Tag.Qa('country'),
        countryUnitedField: Tag.OptionValue('United States'),
        stateField: Tag.Qa('state'),
        cityField: Tag.Qa('city'),
        zipCodeField: Tag.Qa('zipcode'),
        mobileNumberField: Tag.Qa('mobile_number'),
        createAccountBtn: Tag.Qa('create-account'),
    },
    commands: [SignUpCommands]
};

   