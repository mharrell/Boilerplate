const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TablesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get toggleSortTable1 () { return $('#table1 .header:first-child') }
    get toggleSortTable2 () { return $('#table2 .header .last-name') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    getNamesFromTableOne() {
        let rows = $$('#table1 tr');
        let names = [];

        //loop through each row starting with the second row, getting the text from
        //the first column (the last name column) and adding it to an array
        for( let numRows = 1; numRows < rows.length; numRows++){
            let foo = $$('#table1 tr')[numRows].$$('td')[0].getText();
            names.push(foo);
        }
        return names;
    }
    getNamesFromTableTwo() {
        let rows = $$('#table2 tbody tr');
        let names = [];

        //loop through each row of data starting with the first row, getting the text from
        //the first column (the last name column) and adding it to an array
        for( let numRows = 0; numRows < rows.length; numRows++){
            let foo = $$('#table2 tbody .last-name')[numRows].getText();
            names.push(foo);
        }
        return names;

    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('tables');
    }
}

module.exports = new TablesPage();
