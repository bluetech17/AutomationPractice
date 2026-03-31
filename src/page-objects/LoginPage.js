const TagHelperFile = require('../../helpers/helpers/helpers')
let Tag = new TagHelperFile()

const longWait = 10000;
const shortWait = 5000;

const LoginCommands = {
    login: function(email, password){
        this
            .waitForElementVisible('@emailField', longWait, 'login page loaded')
            .setValue("@emailField", email)
            .click('@submitButton');

        this
            .waitForElementVisible('@passwordField', shortWait, 'password loaded')
            .setValue('@passwordField', password)
            .click('@signInButton');

        this
    }
}