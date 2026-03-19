const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript')
const TagHelperFile = require('../../test/helpers/helpers')
let Tag = new TagHelperFile()
//const { longWait, shortWait } = require('generac.application.automation.common/data-containers/waits');

 const HomePageCommands = {
    homePage: function(email) {
        this
            .waitForElementVisible('@subText', 10000, 'Subscription is visible')
            .setValue('@homeEmailField', email)
            .click('@rightArrowBtn')
            .waitForElementVisible('@homeSuccessMsg', 5000, 'You have been successfully subscribed!');

       return this;
     },
     

    };

module.exports = {
    elements: {
        subText: Tag.Text('h2','SUBSCRIPTION'),
        homeEmailField: Tag.Id('susbscribe_email'),
        rightArrowBtn: Tag.Id('subscribe'),
        homeSuccessMsg: Tag.Class('alert-success alert'),
    },
    commands: [HomePageCommands]
};

