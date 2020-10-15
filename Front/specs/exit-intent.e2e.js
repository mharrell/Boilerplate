const ExitIntentPage = require('../pageobjects/exit-intent.page');

describe('Exit Intent View', () => {
    it('should show the exit window when the mouse moves out of frame', () => {
        ExitIntentPage.open();

        ExitIntentPage.contentContainer.click();
        browser.executeScript("_ouibounce.fire()", []);

        expect(ExitIntentPage.modal).toBeVisible();

    });
});


