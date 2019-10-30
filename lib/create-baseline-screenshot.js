'use strict'

const saveScreenshot = require('./save-screenshot'),
    fs = require('fs'),
    Jimp = require('jimp')

/**
 * Creates a new baseline screenshot using the screenshot passed in.
 *
 * @param {Object} nightwatchClient Instance of the current nightwatch API interface
 * @param {Object} screenshot Jimp image representation. Represents a screenshot that
 * will be used as the baseline if a baseline hasn't been saved for the current test.
 * @param {Object} baselinePath Jimp image representation. Represents a screenshot that
 * will be used as the baseline if a baseline hasn't been saved for the current test.
 *
 * @return {Promise} A promise that resolves with the baseline screenshot
 */
module.exports = function createBaselineScreenshot(
    nightwatchClient,
    screenshot,
    baselinePath
) {
    return new Promise((resolve, reject) => {
        nightwatchClient.assert.ok(true, 'Creating new baseline screenshot in the baseline directory.') // eslint-disable-line max-len
        saveScreenshot(
            baselinePath,
            screenshot
        )
            .then(resolve, resolve)
    })
}
