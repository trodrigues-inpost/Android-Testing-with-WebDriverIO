export {}; // Makes this file an external module
import { expect } from '@wdio/globals';

expect.extend({
    fail(__received: any, message: string) {
        const pass = false;
        return {
            pass,
            message: () => `Expect ${message}`
        };
    }
});

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
	namespace ExpectWebdriverIO {
		interface Matchers<R, T> {
			__dummy?: T;
			fail(message: string): R;
		}
	}
	/* eslint-enable @typescript-eslint/no-namespace */
}
