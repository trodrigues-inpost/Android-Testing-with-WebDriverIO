// The main page of the sauce labs application.
import 'dotenv/config';
import { waitForElement } from '../helpermethods/elements.helper.js';

class Page {
    get isProductsPage() { return $('~test-PRODUCTS').isDisplayed() }
    get isLoggedIn() { return $('~test-PRODUCTS').isDisplayed() }
    get isLoggedOut() { return $('~test-LOGIN').isDisplayed() }
    get isErrorMessage() { return $('~test-error').isDisplayed() }

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
