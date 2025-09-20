import { NightwatchAPI } from 'nightwatch'
const { longWait, shortWait } = require('generac.application.automation.common/data-containers/waits')
const TagHelperFile = require('../helpers/tagHelper')
let Tag = new TagHelperFile()

const LoginCommands = {
    login: function(this: NightwatchAPI, email: string, password: string) {
        this
            .waitForElementVisible('@emailField', longWait, 'login page loaded')
            .setValue("@emailField", email)
            .click('@submitButton')
            .waitForElementVisible('@passwordField', shortWait, 'password loaded')
            .setValue('@passwordField', password)
            .click('@signInButton')
            .waitForElementVisible('@captchaButton', longWait)
            .click('@captchaButton')
            .waitForElementVisible(Tag.Hook('NavBar'), longWait);
        return this;
    }
}

module.exports = {
    commands: [LoginCommands],
    elements: {
        emailField: Tag.Id('email'), 
        passwordField: Tag.Id('password'),
        submitButton: Tag.Hook('next-button-noUserEmailStatus-home'),
        signInButton: Tag.Id('next'),
        captchaButton: Tag.Id('continue'),
        


    }
}
