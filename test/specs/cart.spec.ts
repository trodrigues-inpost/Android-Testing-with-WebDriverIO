// Shopping Cart Test Suite
import { $, $$, expect, browser } from '@wdio/globals';
import Page from '../pageobjects/page.ts';
import LoginPage from '../pageobjects/login.page.ts';
import { waitFE } from '../helpermethods/elements.helper.ts';

describe('Shopping Cart Test Suite', () => {
    var itemsInCart: string[] = [];
    var itemsInCartCount = 0;

    beforeEach(async () => {
        const isLoggedIn = await Page.isLoggedIn();
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        console.log(`isLoggedIn: ${isLoggedIn}`);
        if (!isLoggedIn) {
            await LoginPage.login(process.env.STANDARD_USER, process.env.STANDARD_USER_PASSWORD);
        }
        
        expect(await Page.isLoggedIn() === true);
    });

    // Test case for adding items to the cart
    it('should add items to the cart', async () => {
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
        const isCartIconDisplayed = await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView').isDisplayed();

        console.log('[-------------------------------------------------------]');
        console.log(`| Item added to cart: ${itemName}`);
        console.log('[-------------------------------------------------------]');

        (browser as any).debug(30000);

        expect(isCartIconDisplayed);


    });

    // Test case for checking that the added item is in the cart
    it('should check that the added item is in the cart', async () => {
        // Click on the cart icon
        await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView').click();

        // The page should have the title 'Your Cart'
        const cartTitle = await $('//android.widget.TextView[@text="YOUR CART"]');
        expect(cartTitle).toBeDisplayed();

        // Check if the cart is empty
        const isCartEmpty = await $('//android.widget.TextView[@text="Your cart is empty"]').isDisplayed();
        if (isCartEmpty) {
            console.log('[-------------------------------------------------------]');
            console.log('| Cart is empty');
            console.log('[-------------------------------------------------------]');
        }

        // Check if the cart contains the added item
        const cartItemTitle = await $(`//android.widget.TextView[@text="${itemsInCart[0]}"]`);
        const isItemInCart = await cartItemTitle.isDisplayed();
        if (isItemInCart) {
            console.log('[-------------------------------------------------------]');
            console.log(`| Item in cart: ${itemsInCart[0]}`);
            console.log('[-------------------------------------------------------]');
        }
        expect(isItemInCart).toBe(true);

        // Check if the cart count is correct
        const cartCount = await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView');
        const cartCountText = await cartCount.getText();
        const cartCountNumber = parseInt(cartCountText, 10);
        if (cartCountNumber > 0) {
            console.log('[-------------------------------------------------------]');
            console.log(`| Cart count: ${cartCountNumber}`);
            console.log('[-------------------------------------------------------]');
        }   
        expect(cartCountNumber).toBe(itemsInCartCount);
    });

    it('should remove items from the cart', async () => {
        // Click on the cart icon
        await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView').click();

        // The page should have the title 'Your Cart'
        const cartTitle = await $('//android.widget.TextView[@text="YOUR CART"]');
        expect(cartTitle).toBeDisplayed();

        // Click on the "Remove" button for the item
        const removeButton = await $(`//android.view.ViewGroup[@content-desc="test-REMOVE"]`);
        await removeButton.click();

        itemsInCartCount--;

        // Check if the cart is empty
        const isCartEmpty = await $('//android.widget.TextView[@text="Your cart is empty"]').isDisplayed();
        if (isCartEmpty) {
            console.log('[-------------------------------------------------------]');
            console.log('| Cart is empty');
            console.log('[-------------------------------------------------------]');
        }

        // Check if the cart count is correct
        const cartCount = await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView');
        const cartCountText = await cartCount.getText();
        const cartCountNumber = parseInt(cartCountText, 10);
        if (cartCountNumber > 0) {
            console.log('[-------------------------------------------------------]');
            console.log(`| Cart count: ${cartCountNumber}`);
            console.log('[-------------------------------------------------------]');
        }   
        expect(cartCountNumber === itemsInCartCount);
    });
});