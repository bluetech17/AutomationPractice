describe('Automation Exercise Home Page', function () {


    it('should load and have correct title', function (browser) {
        browser
            .url('https://www.automationexercise.com/')
            .waitForElementVisible('body', 5000)
            .assert.titleContains('Automation Exercise')
            .end();
    });
});
