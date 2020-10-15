const WindowsPage = require('../pageobjects/windows.page');

describe('New Window Page', () => {
    it('should open a new tab/window with the correct url', () => {
        WindowsPage.open();
        WindowsPage.btnLink.click();
        browser.switchWindow("New Window");
        expect(WindowsPage.newText.getText()).toBe("New Window");

    });

});


