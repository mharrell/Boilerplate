const DynamicPage = require('../pageobjects/dynamic-controls.page');

describe('Dynamic Controls Page', () => {
    it('should enable the field, add text, disable the field again, and verify the text is still present.', () => {
        let testData = "Save The Pangolin! :D <3";
        DynamicPage.open();
        DynamicPage.enableBtn.click();
        DynamicPage.enableTextbox.waitForEnabled();
        DynamicPage.enableTextbox.setValue(testData);
        DynamicPage.enableBtn.click();

        //After much experimentation, I cannot figure out a way to test this without changing the DOM itself.
        //As the page is currently rendered, the text in the field is never added to a span or any other element
        //within the DOM, therefore, there is nothing to select. You COULD add an attribute to the element using
        //your text as the value and test against that, but that just feels like cheating at that point.
        expect(DynamicPage.enableTextbox).toBeDisabled();
        expect(DynamicPage.enableTextbox.getText).toContain(testData);
    });
});


