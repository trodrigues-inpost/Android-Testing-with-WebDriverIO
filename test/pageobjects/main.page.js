// The main page of the sauce labs application.
import 'dotenv/config';
import { waitForElement } from '../helpermethods/elements.helper.js';

class Page {
    // Page elements state
    static get isProductsPage() { return $('~test-PRODUCTS').isDisplayed() }
    static get isLoggedIn() { return $('~test-PRODUCTS').isDisplayed() }
    static get isLoggedOut() { return $('~test-LOGIN').iosDisplayed() }
    static get isErrorMessage() { return $('~test-error').isDisplayed() }

    // Page elements
    static get productsPage() { return $('~test-PRODUCTS') }
    static get loginButton() { return $('~test-LOGIN') }
    static get addToCartButtons() { return $('~test-ADD TO CART') }

    Page() {
        // Constructor for the Page class
    }

    static async logout() {
        if (await this.isLoggedIn) {
            // Click on the menu button
            await $('~test-Menu').click()
            
            // Wait for the logout button to be displayed
            await waitForElement($('~test-LOGOUT'))

            // Click on the logout button
            await $('~test-LOGOUT').click()
        }
    }
}

export default Page
