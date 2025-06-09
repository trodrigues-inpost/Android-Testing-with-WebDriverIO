import click from '~actions/click.ts';
import set from '~actions/set.ts';

class LoginScreen {
    get usernameInput() {
        return $('~test-Username1');
    }
    get passwordInput() {
        return $('~test-Password');
    }
    get loginButton() {
        return $('~test-LOGIN');
    }

    async loginUser(username: string, password: string) {
        await set.value(username, this.usernameInput);
        await set.value(password, this.passwordInput);
        await click.element(this.loginButton);
    }
}

export default new LoginScreen();
