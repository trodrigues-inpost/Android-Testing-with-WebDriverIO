describe('Debug', () => {
    it('should allow for debugging', async () => {
        //! This will cause an error either way, it wont if you change it to 0ms
        await (browser as any).pause(60000); // 1 Minute for debugging
    });
});
