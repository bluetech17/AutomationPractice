const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript')
const TagHelperFile = require('../../helpers/helpers/helpers');
let Tag = new TagHelperFile()
//const { longWait, shortWait } = require('generac.application.automation.common/data-containers/waits');

 const ContactUsCommands = {
    contactUs: function(name, email, subject, message) {
        this
            .waitForElementVisible('@nameFormField', 5000, 'name field is visible')
            .setValue('@nameFormField', name)
            .setValue('@emailFormField', email)
            .setValue('@subjectFormField', subject)
            .setValue('@messageFormField', message)
            .execute(function() { window.scrollTo(0, 500); }, [])
            .click('@submitBtn')
            .waitForElementVisible('@successMsg', 5000, 'success message is visible');

       return this;
     },
     

    };

module.exports = {
    elements: {
        nameFormField: Tag.Qa('name'),
        emailFormField: Tag.Qa('email'),
        subjectFormField: Tag.Qa('subject'),
        messageFormField: Tag.Qa('message'),
        submitBtn: Tag.Qa('submit-button'),
        successMsg: Tag.Class('status alert alert-success'),
    },
    commands: [ContactUsCommands]
};

