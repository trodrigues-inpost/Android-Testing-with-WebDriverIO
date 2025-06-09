const pauseDuration = Number(process.env.CLICK_PAUSE_DURATION) || 1500;

class Click {
    async element(element: ChainablePromiseElement) {
        await expect(element).toBeExisting();
        await expect(element).toBeDisplayed();
        await element.click();
        await driver.pause(pauseDuration);
    }
}

export default new Click();
