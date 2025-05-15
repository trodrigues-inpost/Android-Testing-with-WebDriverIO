import { $$, $ } from '@wdio/globals'

// The main page of the sauce labs application.
import 'dotenv/config';
import { waitFE } from '../helpermethods/elements.helper.ts';

class Page {
    // Page elements state
    static get isProductsPage() { return $('~test-PRODUCTS').isDisplayed() }
    static get isErrorMessage() { return $('~test-error')   .isDisplayed() }
    static get isLoggedOut()    { return $('~test-LOGIN')   .isDisplayed() }
    static get isLoggedIn()     { return $('~test-PRODUCTS').isDisplayed() }

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
