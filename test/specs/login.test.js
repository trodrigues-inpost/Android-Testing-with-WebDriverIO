// Login in the app
import { waitForElement } from '../helpermethods/elements.helper.js';
import LoginPage from '../pageobjects/login.page.js';
import '../helpermethods/elements.helper.js';
import Page from '../pageobjects/main.page.js';

describe('Login Test', () => {

    beforeEach(async () => {
        // Check if the login button is displayed
        await waitForElement(LoginPage.loginButton);

        // If the login button is displayed, it means the user is logged out
        await Page.logout();
    });

    
    // Test case for logging in with valid credentials
    it('should not login with empty credentials', async () => {
        // Login with empty credentials
        await LoginPage.loginWithEmptyCredentials();
        
        // Check if the error message is displayed
        const isErrorDisplayed = await LoginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed);
    });

    // Test case for logging in with invalid credentials
    it('should not login with invalid credentials', async () => {
        // Login with invalid credentials
        await LoginPage.loginWithInvalidCredentials();

        // Check if the error message is displayed
        const isErrorDisplayed = await LoginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed);
    });

    // Test case for logging in with empty username
    it('should not login with empty username', async () => {
        // Login with empty username
        await LoginPage.loginWithEmptyUsername();

        // Check if the error message is displayed
        const isErrorDisplayed = await LoginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed);
    });

    // Test case for logging in with empty password
    it('should not login with empty password', async () => {
        // Login with empty password
        await LoginPage.loginWithEmptyPassword();

        // Check if the error message is displayed
        const isErrorDisplayed = await LoginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed);
    });

    // Test case for logging in with invalid username and valid password
    it('should not login with invalid username and valid password', async () => {
        // Login with invalid username and valid password
        await LoginPage.loginWithInvalidUsername();

        // Check if the error message is displayed
        const isErrorDisplayed = await LoginPage.isErrorMessageDisplayed();
        expect(isErrorDisplayed);
    });

    // Test case for logging in with valid username and invalid password
    it('should login with valid credentials', async () => {
        // Login with valid credentials
        await LoginPage.loginWithValidCredentials();

        // Check if the products page is displayed
        const isProductsDisplayed = await LoginPage.isProductsPageDisplayed();
        expect(isProductsDisplayed);
    });
});