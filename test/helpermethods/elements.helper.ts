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

export function stylishNumber(num: number) {
    const asString = num.toString();

    console.log(asString.length);

    var line = '';

    for (let index = 0; index < asString.length; index++) {
        line += '-';
    }

    console.log('');
    console.log(`[-${line}-]`);
    console.log(`| ${num} |`);
    console.log(`[-${line}-]`);
    console.log('');
}