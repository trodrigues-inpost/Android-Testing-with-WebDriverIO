// Login in the app
import { browser, expect } from '@wdio/globals';
import { waitFE } from '../helpermethods/elements.helper.js';
import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.ts';
import '../helpermethods/elements.helper.js';
import 'dotenv/config';

describe('Login Test', () => {

    beforeEach(async () => {
        // Check if the login button is displayed
        await waitFE(LoginPage.loginButton);

        // If the login button is displayed, it means the user is logged out
        await Page.logout();
    });

    
    // Test case for logging in with valid credentials
    it('should only login with valid credentials', async () => {
        //* INVALID LOGIN
        //? Login with empty credentials
        await LoginPage.login('', '');
        
        // Check if the error message is displayed
        var isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);

        
        //* INVALID LOGIN
        //? Login with invalid credentials
        await LoginPage.login('invalid_user', 'invalid_password');

        // Check if the error message is displayed
        isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
    

        //* INVALID LOGIN
        //? Login with empty username
        await LoginPage.login('', 'secret_sauce')

        // Check if the error message is displayed
        isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
        

        //* INVALID LOGIN
        //? Login with empty password
        await LoginPage.login('standard_user', '')

        // Check if the error message is displayed
        isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
        

        //* INVALID LOGIN
        //? Login with invalid username and valid password
        await LoginPage.login('invalid_user', 'secret_sauce')

        // Check if the error message is displayed
        isErrorDisplayed = await Page.isErrorMessage;
        expect(isErrorDisplayed);
        

        //*VALID LOGIN
        //? Login with valid credentials
        await LoginPage.login('standard_user', 'secret_sauce')

        // Check if the products page is displayed
        const isProductsDisplayed = await Page.isProductsPage;
        expect(isProductsDisplayed);
    });
});
