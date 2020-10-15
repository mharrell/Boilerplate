const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ExitIntentPage extends Page {
    /**
     * define selectors using getter methods
     */
    get modal () { return $('#ouibounce-modal') }
    get modalHeader () { return $('ouibounce-modal.modal-title') }
    get contentContainer () { return $('#content') }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('exit_intent');
    }
}

module.exports = new ExitIntentPage();
