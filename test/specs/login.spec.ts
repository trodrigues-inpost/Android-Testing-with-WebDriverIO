import loginScreen from 'test/pageobjects/login.screen';
import assert from '~actions/assert';
import usersConstant from '~constants/users.constant';
import productsScreen from '~pageobjects/products.screen';

const user = usersConstant.STANDARD_USER;
const password = usersConstant.STANDARD_USER_PASSWORD;

describe('Onboarding - Login user', () => {
    it('should login the user successfully', async () => {
        await loginScreen.loginUser(user, password);
        await assert.isDisplayed(productsScreen.filterBtn);
    });
});
