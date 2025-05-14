// Shopping Cart Testing
import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/main.page.js';
import { tryClick, waitForElement } from '../helpermethods/elements.helper.js';
import 'dotenv/config';

describe('Shopping Cart', () => {
    beforeEach(async () => {
        await browser.pause(2000);
        //await driver.resetApp();
    });


    // Test case for logging in with valid username and invalid password
    it('should login with valid credentials', async () => {
        // Login with valid credentials
        await LoginPage.loginWithValidCredentials();

        // Check if the products page is displayed
        await expect(Page.isProductsPage);
    });

    // Test case for adding an item to the cart
    it('should add an item to the cart', async () => {
        // Get the items based on the xpath
        const items = await $$('//android.view.ViewGroup[@content-desc="test-ADD TO CART"]');

        await items[1].click(); // click on the second item

        // Wait for the cart icon to be displayed
        // Expect to have a button saying REMOVE
        const removeButton = await $('~test-REMOVE');

        await expect(removeButton.isDisplayed());

    });
});