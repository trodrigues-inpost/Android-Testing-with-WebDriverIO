// Wait for elements to be displayed
export async function waitForElement(element) {
    // Wait for the element to be displayed
    await element.waitForDisplayed({ timeout: 5000 });
}