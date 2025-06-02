import * as dotenv from 'dotenv';
dotenv.config();

export const config: WebdriverIO.Config = {
    async before() {
        await driver.updateSettings({ waitForIdleTimeout: 0 });
    },
    runner: 'local',
    suites: {
        all: ['../test/specs/**']
    },
    capabilities: [],
    maxInstances: Number(process.env.INSTANCES) || 1,
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.google.com/',
    waitforTimeout: Number(process.env.ELEMENT_TIMEOUT) || 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,
    framework: 'mocha',
    specs: [],
    specFileRetries: Number(process.env.RETRIES) || 0,
    specFileRetriesDelay: 0,
    reporters: [
        [
            'allure',
            {
                outputDir: './allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true
            }
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: Number(process.env.DEBUG_TIMEOUT) || 10 * 360 * 100 // 360 secs - 6 mins
    }
};
