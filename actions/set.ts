const pauseDuration = Number(process.env.SET_PAUSE_DURATION) || 1500;

class Set {
    async value(value: string, element: ChainablePromiseElement) {
        await expect(element).toBeExisting();
        await expect(element).toBeDisplayed();
        await element.setValue(value);
        await driver.pause(pauseDuration);
    }

    async clearField(element: ChainablePromiseElement) {
        await expect(element).toBeDisplayed();
        await element.clearValue();
        await driver.pause(pauseDuration);
    }

    async setValueAfterClear(value: string, element: ChainablePromiseElement) {
        await this.clearField(element);
        await element.setValue(value);
    }
}

export default new Set();
