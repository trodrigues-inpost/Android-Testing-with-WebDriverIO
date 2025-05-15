// Import the base Page class
import { $ } from '@wdio/globals';
import Page from './page.ts'
import 'dotenv/config';

// Login Page Object
class LoginPage extends Page {
    get usernameInput() { return $('~test-Username') }
    get passwordInput() { return $('~test-Password') }
    get loginButton() { return $('~test-LOGIN') }

    // Login method to handle different scenarios
    async login(username, password) {
        const isLoggedIn = await Page.isLoggedIn();
        if (isLoggedIn) {
            console.log('Already logged in. Logging out first.');
            await Page.logout();
        }
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
}

export default new LoginPage()