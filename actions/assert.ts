class Assert {
    async isDisplayed(element: ChainablePromiseElement) {
        await expect(element).toBeDisplayed();
    }

    async isNotDisplayed(element: ChainablePromiseElement) {
        try {
            await element.waitForDisplayed({ timeout: 10000, reverse: true });
        } catch (error: any) {
            await this.fail(`${error.message}`);
        }
    }

    async containsTextDisplayed(text: string, element: ChainablePromiseElement) {
        await expect(element).toBeDisplayed();
        await expect(element).toHaveText(expect.stringContaining(text));
    }

    async fail(message: string) {
        await expect({}).fail(message);
    }
}

export default new Assert();
