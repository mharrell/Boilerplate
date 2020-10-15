const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkboxBtn () { return $('#checkbox-example button[autocomplete]') }
    get checkboxBox () { return $('#checkbox-example input') }
    get enableBtn () { return $('#input-example button[autocomplete]') }
    get enableTextbox () { return $('form#input-example input') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dynamic_controls');
    }
}

module.exports = new DynamicPage();
