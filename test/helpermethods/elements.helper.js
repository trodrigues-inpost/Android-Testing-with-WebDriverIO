// Wait for elements to be displayed
import 'dotenv/config';

export async function waitForElement(element) {
    // Wait for the element to be displayed
    await element.waitForDisplayed({ timeout: process.env.WAIT_TIMEOUT });
}