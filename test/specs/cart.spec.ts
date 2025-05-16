// Shopping Cart Test Suite
import { $, $$, expect, browser } from '@wdio/globals';
import Page from '../pageobjects/page.ts';
import LoginPage from '../pageobjects/login.page.ts';
import { isDisplayed, waitFE } from '../helpermethods/elements.helper.ts';

describe('Shopping Cart Test Suite', () => {
    var itemsInCart: string[] = [];
    var itemsInCartCount = 0;

    beforeEach(async () => {
        const isLoggedIn = await Page.isLoggedIn();
        if (!isLoggedIn) {
            await LoginPage.login(process.env.STANDARD_USER, process.env.STANDARD_USER_PASSWORD);
        }
        
        // Expect the user to be logged in
        expect(await Page.isLoggedIn());
    });

    // Test case for adding items to the cart
    it('should add an item to the cart', async () => {
        // Title and Add button are both at index `randomNumber`
        const randomNumber = Math.floor(Math.random() * 2) + 1;

        // XPath for item titles
        const titleSelector = `(//android.widget.TextView[@content-desc="test-Item title"])[${randomNumber}]`;
        // XPath for buttons
        const buttonSelector = `(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[${randomNumber}]`;


        const itemTitleElement = await $(titleSelector);
        
        const itemName = await itemTitleElement.getText();
        itemsInCart.push(itemName);

        // Click the corresponding "Add to Cart" button
        const addButton = await $(buttonSelector);
        await addButton.click();

        itemsInCartCount++;

        // Confirm cart icon exists
        const isCartIconDisplayed = await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView');

        // Expect the cart icon to be displayed
        expect(isCartIconDisplayed).toBeDisplayed();
    });

    // Test case for checking that the added item is in the cart
    it('should display the added item in the cart', async () => {
        // Click on the cart icon
        await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView').click();

        // The page should have the title 'Your Cart'
        const cartTitle = await $('//android.widget.TextView[@text="YOUR CART"]');
        expect(cartTitle).toBeDisplayed();

        // Check if the cart is empty
        const isCartEmpty = await isDisplayed($('//android.widget.TextView[@text="Your cart is empty"]'));
        expect(!isCartEmpty);

        // Check if the cart contains the added item
        const cartItemTitle = await $(`//android.widget.TextView[@text="${itemsInCart[0]}"]`);
        const isItemInCart = await cartItemTitle.isDisplayed()
        expect(isItemInCart);

        // Check if the cart count is correct
        const cartCount = await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView');
        const cartCountText = await cartCount.getText();
        const cartCountNumber = parseInt(cartCountText, 10);
        expect(cartCountNumber === itemsInCartCount);
    });

    it('should remove the added item from the cart', async () => {
        // Click on the cart icon
        // FIXME: It's already on the cart screen, why do this?
        //await $('(//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView').click();

        // The page should have the title 'Your Cart'
        const cartTitleDisplayed = await isDisplayed($('//android.widget.TextView[@text="YOUR CART"]'));
        expect(cartTitleDisplayed);

        // Click on the "Remove" button for the item
        const removeButton = await $(`//android.view.ViewGroup[@content-desc="test-REMOVE"]`);
        await removeButton.click();

        itemsInCartCount--;

        // Check if the cart is empty
        const isCartEmpty = await isDisplayed($('//android.widget.TextView[@text="Your cart is empty"]'));
        expect(isCartEmpty);
    });
});