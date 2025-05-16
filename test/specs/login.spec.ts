// Login in the app
import { browser, expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.ts';
import '../helpermethods/elements.helper.js';
import 'dotenv/config';

const logins = [
    [false, 'empty credentials', '', ''],
    [false, 'empty username', '', 'some-password'],
    [false, 'empty password', process.env.STANDARD_USER, ''],
    [false, 'invalid credentials', 'invalid_user', 'invalid_password'],
    [false, 'valid username and invalid password', process.env.STANDARD_USER, 'invalid_password'],
    [false, 'valid password and invalid username', 'invalid_user', process.env.STANDARD_USER_PASSWORD],
    [false, 'locked out user', process.env.LOCKED_OUT_USER, process.env.STANDARD_USER_PASSWORD],
    [true, 'valid credentials', process.env.STANDARD_USER, process.env.STANDARD_USER_PASSWORD],
];

describe('The Login Feature', () => {

    beforeEach(async () => {
        // Ensure we're logged out before each test
        await Page.logout();
    });

    afterEach(async () => {
        // Ensure we're logged out after each test
        //? Some apps hold login state aggressively
        await Page.logout();
    });

    logins.forEach(([shouldLogin, description, username, password]) => {
        var testName = `should ${shouldLogin ? 'login' : 'not login'} with ${description}`;
        it(testName, async () => {
            // Perform login attempt
            await LoginPage.login(username, password);

            // Assert the expected outcome
            const isLoggedIn = await Page.isLoggedIn();

            // Expect `isLoggedIn` to be the same as `shouldLogin`
            expect(isLoggedIn === shouldLogin);

            if (!shouldLogin) {
                // If the loggin isn't supposed to be successful, check for the error message
                const isErrorMessageDisplayed = await Page.isErrorMessage();
                expect(isErrorMessageDisplayed); //isErrorMessageDisplayed === true
            }
        });
    });
});
