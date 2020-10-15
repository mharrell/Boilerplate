const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('should fail to login and alert the user with an invalid username', () => {
        LoginPage.open();

        LoginPage.login('SaveThePangolin', 'NoReallyLookItUp!');
        expect(LoginPage.flashAlert).toBeExisting();
        expect(LoginPage.flashAlert).toHaveTextContaining(
            'Your username is invalid!');
    });
    it('should fail to login and alert the user with an invalid password', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'NoReallyLookItUp!');
        expect(LoginPage.flashAlert).toBeExisting();
        expect(LoginPage.flashAlert).toHaveTextContaining(
            'Your password is invalid!');
    });
});


