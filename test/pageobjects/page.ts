import { $$, $ } from '@wdio/globals'

// The main page of the sauce labs application.
import 'dotenv/config';
import { waitFE } from '../helpermethods/elements.helper.ts';

class Page {
    // Page elements
    static get productsPage() { return $('~test-PRODUCTS') }        // Only works when logged in
    static get loginButton() { return $('~test-LOGIN') }            // Only works when logged out
    
    // Page elements (By Xpath)
    // ADD TO CART buttons
    // 	(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[X]
    static get addToCartButtons() { return $$('//android.view.ViewGroup[@content-desc="test-ADD TO CART"]') }
    
    Page() {
        // Constructor for the Page class
    }

    // Checks if it is on the products page
    static async isProductsPage() {
        const elem = await $('~test-PRODUCTS');
        await elem.waitForDisplayed({ timeout: 1000 });  // wait max 5 seconds
        return await elem.isDisplayed();
    }

    // Checks if an error message is displayed
    static async isErrorMessage() {
        return await $('~test-error').isDisplayed()
    }

    // Checks if the login button is displayed, meaning there is no user logged in
    static async isLoggedOut() {
        try {
            const loginBtn = await $('~test-LOGIN');
            return await loginBtn.isDisplayed();
        } catch (err) {
            // Element doesn't exist — assume user is not logged out
            return false;
        }
    }
    
    // Checks if the user is logged in
    static async isLoggedIn() {
        try {
            const loginBtn = await $('~test-LOGIN');
            await loginBtn.waitForDisplayed({ timeout: 500 });  // wait max 0,5 seconds

            const usernameInput = await $('~test-Username');
            await usernameInput.waitForDisplayed({ timeout: 500 });  // wait max 0,5 seconds

            const loggedIn = !(await loginBtn.isDisplayed()) && !(await usernameInput.isDisplayed());

            return loggedIn;
        } catch (err) {
            // Element doesn't exist — assume user is not logged in
            return false;
        }
    }

    static async logout() {
        if (await this.isLoggedIn()) {
            // Click on the menu button
            await $('~test-Menu').click();
            
            // Wait for the logout button to be displayed
            await waitFE($('~test-LOGOUT'));

            // Click on the logout button
            await $('~test-LOGOUT').click();
        }
    }
}

export default Page
