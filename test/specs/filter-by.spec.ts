import 'dotenv/config';
import Page from '../pageobjects/page';
import LoginPage from '../pageobjects/login.page';
import { $$, browser, expect } from '@wdio/globals';
import Selectors from '../pageobjects/selectors.objects';
import { stylishNumber } from '../helpermethods/elements.helper';

describe('Item Sorting', () => {
    var listMode = false;

    beforeEach(async () => {
        var isLoggedIn = await Page.isLoggedIn();

        if (!isLoggedIn) {
            await LoginPage.login(process.env.STANDARD_USER, process.env.STANDARD_USER_PASSWORD);
        }

        isLoggedIn = await Page.isLoggedIn();

        await expect(isLoggedIn);
    });

    it('should enable list view', async () => {
        const toggleViewModeBtn = await $(Selectors.toggleViewButton);
        
        expect(toggleViewModeBtn).toBeDisplayed();
        
        toggleViewModeBtn.click();

        
        var btnsCount: number = 0;

        await (browser as any).waitUntil(async () => {
            const elements = await $$(Selectors.addToCartLM());
            
            btnsCount = elements.length;

            stylishNumber(btnsCount);

            return elements.length > 0;
            
        }, {
            timeout: 5000,
            timeoutMsg: 'Add-to-cart (+) buttons did not appear within 5s'
        });

        expect(btnsCount).toBeGreaterThan(0);
    });
});

