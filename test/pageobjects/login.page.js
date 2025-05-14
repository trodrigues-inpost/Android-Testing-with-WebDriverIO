// Import the base Page class
import Page from './main.page.js'
import 'dotenv/config';

// Login Page Object
class LoginPage extends Page {
    get usernameInput() { return $('~test-Username') }
    get passwordInput() { return $('~test-Password') }
    get loginButton() { return $('~test-LOGIN') }

    // Login method to handle different scenarios
    async login(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }

    // Check if an error message is displayed
    async isErrorMessageDisplayed() {
        return await this.isErrorMessage;
    }

    // Check if the products page is displayed
    async isProductsPageDisplayed() {
        return await this.isProductsPage;
    }

    // Test cases for different login scenarios

    // Login with both invalid username and password
    async loginWithInvalidCredentials() {
        await this.login('invalid_user', 'invalid_password')
    }

    // Login with valid username and password (standard test case)
    async loginWithValidCredentials() {
        await this.login('standard_user', 'secret_sauce')
    }

    // Login with empty credentials
    async loginWithEmptyCredentials() {
        await this.login('', '')
    }

    // Login with empty username and valid password
    async loginWithEmptyUsername() {
        await this.login('', 'secret_sauce')
    }

    // Login with valid username and empty password
    async loginWithEmptyPassword() {
        await this.login('standard_user', '')
    }

    // Login with invalid username and valid password
    async loginWithInvalidUsername() {
        await this.login('invalid_user', 'secret_sauce')
    }

    // Login with valid username and invalid password
    async loginWithInvalidPassword() {
        await this.login('standard_user', 'invalid_password')
    }
}

export default new LoginPage()