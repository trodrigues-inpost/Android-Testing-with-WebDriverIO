// Login in the app
import '../helpermethods/elements.helper.js';
import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.ts';
import { waitFE } from '../helpermethods/elements.helper.js';
import 'dotenv/config';
import { browser, expect } from '@wdio/globals';

describe('Login Test', () => {

    beforeEach(async () => {
        await browser.pause(2000);
        
        // Check if the login button is displayed
        await waitFE(LoginPage.loginButton);

        // If the login button is displayed, it means the user is logged out
        await Page.logout();
    });

    
    // Test case for logging in with valid credentials
    it('should not login with empty credentials', async () => {
        // Login with empty credentials
        await LoginPage.login('', '');
        
        // Check if the error message is displayed
        const isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
    });

    // Test case for logging in with invalid credentials
    it('should not login with invalid credentials', async () => {
        // Login with invalid credentials
        await LoginPage.login('invalid_user', 'invalid_password');

        // Check if the error message is displayed
        const isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
    });

    // Test case for logging in with empty username
    it('should not login with empty username', async () => {
        // Login with empty username
        await LoginPage.login('', 'secret_sauce')

        // Check if the error message is displayed
        const isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
    });

    // Test case for logging in with empty password
    it('should not login with empty password', async () => {
        // Login with empty password
        await LoginPage.login('standard_user', '')

        // Check if the error message is displayed
        const isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
    });

    // Test case for logging in with invalid username and valid password
    it('should not login with invalid username and valid password', async () => {
        // Login with invalid username and valid password
        await LoginPage.login('invalid_user', 'secret_sauce')

        // Check if the error message is displayed
        const isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
    });

    // Test case for logging in with valid username and invalid password
    it('should login with valid credentials', async () => {
        // Login with valid credentials
        await LoginPage.login('standard_user', 'secret_sauce')

        // Check if the products page is displayed
        const isProductsDisplayed = await Page.isProductsPage;
        expect(isProductsDisplayed);
    });
});
