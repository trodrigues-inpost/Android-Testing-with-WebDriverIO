import { expect, browser } from "@wdio/globals";

describe('Debug', () => {
    it('should allow for debugging', async () => {

        await (browser as any).pause(60000) // 1 Minute for debugging
        
    });
});