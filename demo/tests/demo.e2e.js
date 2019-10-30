'use strict'

module.exports = {
    // 'Render test': function (browser) {
    //     browser
    //         .url('http://localhost:8080/demo2/')
    //         .waitForElementVisible('body', 1000)
    //         .resizeWindow(1024, 768)
    //         .assert.screenshotIdenticalToBaseline('body h1')
    //         .end()
    // },
    'Render test not equal test': function (browser) {
        let timestamp = new Date().toISOString()
        browser
            .url('http://localhost:8080/demo2/')
            .waitForElementVisible('body', 1000)
            .resizeWindow(1024, 768)
            // .createBaselineElementScreenshot('#earth', 'planet-' + timestamp)
            .assert.screenshotIdenticalToBaseline('#earth', 'planet-' + timestamp)

            .assert.screenshotIdenticalToBaseline('#pluto', 'planet-' + timestamp)
            // .assert.screenshotNotIdenticalToBaseline('#earth', 'planet-' + timestamp)
            // .assert.screenshotNotIdenticalToBaseline('#pluto', 'planet-' + timestamp)
            .end()
    }

}
