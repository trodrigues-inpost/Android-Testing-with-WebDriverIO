// Wait for elements to be displayed
import { browser } from '@wdio/globals';
import 'dotenv/config';

// Wait for element
export async function waitFE(element, timeout = process.env.WAIT_TIMEOUT) {
    // Wait for the element to be displayed
    await element.waitForDisplayed({ timeout: timeout });
}

export async function isDisplayed(element) {
    try {
        const elementExists = await element.isExisting();
        console.log(elementExists);
        
        const isDisplayed = elementExists ? await element.isDisplayed() : false;

        return isDisplayed;
    }
    catch (error) {
        console.error(`Error checking element display status: ${error}`);
        return false; // Return false if there's an error
    }
}


////// UNUSED CODE
////export async function tryClick(element, nTimes = 1) {
////    // Try to click the element
////    for (let i = 0; i < nTimes; i++) {
////        try {
////            await element.click();
////            return true; // Click was successful
////        } catch (error) {
////            console.error(`Click attempt ${i + 1} failed: ${error}`);
////            //Wait for a short period before retrying
////            await (browser as any).pause(process.env.WAIT_TIMEOUT_ELEMENT);
////        }
////    }
////}