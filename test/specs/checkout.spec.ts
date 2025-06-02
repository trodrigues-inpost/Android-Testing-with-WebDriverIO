// Shopping Cart Test Suite
import { $, expect, browser, driver } from '@wdio/globals';
import { isDisplayed } from '../helpermethods/elements.helper.ts';
import Selectors from '../pageobjects/selectors.objects.ts';
import LoginPage from '../pageobjects/login.page.ts';
import Page from '../pageobjects/page.ts';
import 'dotenv/config';

//! [//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//]
//! [// CHECK THE README.md FILE IN THIS FOLDER, IT HAS IMPORTANT INFORMATION //]
//! [//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//]

const firstName = 'Test First Name';
const lastName = 'Test Last Name';
const postalCode = '1234-567';

describe('Shopping Cart & Checkout Integration', () => {
    const itemsInCart: string[] = [];
    let itemsInCartCount = 0;

    beforeEach(async () => {
        const isLoggedIn = await Page.isLoggedIn();
        if (!isLoggedIn) {
            await LoginPage.login(
                String(process.env.STANDARD_USER),
                String(process.env.STANDARD_USER_PASSWORD)
            );
        }

        // Expect the user to be logged in
        expect(await Page.isLoggedIn());
    });

    // Test case for adding items to the cart
    it('should add an item to the cart', async () => {
        // Title and Add button are both at index `randomNumber`
        const randomNumber = Math.floor(Math.random() * 2) + 1;

        // XPath for item titles
        const itemTitleElement = await $(Selectors.itemTitle(randomNumber));
        const itemName = await itemTitleElement.getText();
        itemsInCart.push(itemName);

        // Click the corresponding "Add to Cart" button
        const addButton = await $(Selectors.addToCart(randomNumber));
        await addButton.click();

        itemsInCartCount++;

        // Confirm cart icon exists
        const isCartIconDisplayed = await $(Selectors.cartIcon);

        // Expect the cart icon to be displayed
        expect(isCartIconDisplayed).toBeDisplayed();
    });

    // Test case for checking that the added item is in the cart
    it('should display the added item in the cart', async () => {
        // Click on the cart icon
        await $(Selectors.cartIcon).click();

        // The page should have the title 'Your Cart'
        const cartTitle = await $(Selectors.yourCartTitle);
        const isCartTitle = await cartTitle.isDisplayed();
        expect(isCartTitle);

        // Check if the cart is empty
        const isCartEmpty = await isDisplayed($(Selectors.emptyCartTitle));
        expect(!isCartEmpty);

        // Check if the cart contains the added item
        const cartItemTitle = await $(`//android.widget.TextView[@text="${itemsInCart[0]}"]`);
        const isItemInCart = await cartItemTitle.isDisplayed();
        expect(isItemInCart);

        // Check if the cart count is correct
        const cartCount = await $(Selectors.cartIcon);
        const cartCountText = await cartCount.getText();
        const cartCountNumber = parseInt(cartCountText, 10);
        expect(cartCountNumber === itemsInCartCount);
    });

    it('should navigate to the checkout screen', async () => {
        // Press the 'CHECKOUT' Button
        const checkoutBtn = await $(Selectors.checkoutButton);

        await checkoutBtn.click();

        await expect(await $(Selectors.checkoutContinueButton)).toBeDisplayed();
    });

    it('should fill the checkout form', async () => {
        // Selecting Components
        const fieldFirstName = await $(Selectors.checkoutFirstName);
        const fieldLastName = await $(Selectors.checkoutLastName);
        const fieldPostalCode = await $(Selectors.checkoutPostalCode);

        // Set Values
        await $(fieldFirstName).setValue(firstName);
        await $(fieldLastName).setValue(lastName);
        await $(fieldPostalCode).setValue(postalCode);

        // Expect to have the inserted values
        expect(await fieldFirstName.getAttribute('text')).toBe(firstName);
        expect(await fieldLastName.getAttribute('text')).toBe(lastName);
        expect(await fieldPostalCode.getAttribute('text')).toBe(postalCode);
    });

    it('should continue to the details tab and finish the checkout process', async () => {
        // Press the 'CONTINUE' Button
        const continueBtn = await $(Selectors.checkoutContinueButton);

        await continueBtn.click();

        await expect($(Selectors.errorMessage)).not.toBeDisplayed();

        //! This might scroll a little too far
        await (driver as any).execute('mobile: scroll', {
            strategy: 'accessibility id',
            selector: Selectors.checkoutFinishButton.replace('~', ''),
            direction: 'down'
        });

        // Press the 'FINISH' Button
        const finishBtn = await $(Selectors.checkoutFinishButton);

        await expect(finishBtn).toBeDisplayed();
        await (browser as any).pause(process.env.WAIT);
        await finishBtn.click();

        // Press the 'BACK HOME' button
        const backHomeBtn = await $(Selectors.backHome);

        await expect(backHomeBtn).toBeDisplayed();

        backHomeBtn.click();

        // Check if it's in the products page
        const productsPage = await $(Selectors.productsPage);

        await expect(productsPage).toBeDisplayed();
    });
});
