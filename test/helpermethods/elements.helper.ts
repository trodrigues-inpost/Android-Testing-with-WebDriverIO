// Wait for elements to be displayed
import { browser } from '@wdio/globals';
import 'dotenv/config';
import { toUnicode } from 'punycode';

// This function returns an error if the element is not displayed within the specified timeout
export async function waitFE(element, timeout = process.env.WAIT_TIMEOUT) {
    // Wait for the element to be displayed
    await element.waitForDisplayed({ timeout: timeout });
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