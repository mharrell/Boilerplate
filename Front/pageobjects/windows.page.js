const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WindowsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLink () { return $('#content a') }
    get newText () { return $('.example h3') }

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
        return super.open('windows');
    }
}

module.exports = new WindowsPage();
