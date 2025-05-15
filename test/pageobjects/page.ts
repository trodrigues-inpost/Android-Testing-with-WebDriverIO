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
        return await $('~test-PRODUCTS').isDisplayed()
    }

    // Checks if an error message is displayed
    static async isErrorMessage() {
        return await $('~test-error').isDisplayed()
    }

    // Checks if the login button is displayed, meaning there is no user logged in
    static async isLoggedOut() {
        return await $('~test-LOGIN').isDisplayed();
    }
    
    // Checks if the user is logged in, meaning the products page is displayed
    static async isLoggedIn() {
        return await this.isProductsPage();
    }

    static async logout() {
        if (await this.isLoggedIn) {
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
