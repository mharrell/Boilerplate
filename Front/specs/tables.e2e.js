const TablesPage = require('../pageobjects/tables.page');

let names;

describe('Sorting table 1 on tables page', () => {
    it('should sort the users by last name A-Z', () => {
        TablesPage.open();
        TablesPage.toggleSortTable1.click(); // sorts A-Z
        names = TablesPage.getNamesFromTableOne();

        const firstNameRaw = names[0]; //apparently sort() is extremely invasive.
        let ascN = names.sort(); //that's why firstNameRaw is created, so completely disassociate it from names[]

        expect(firstNameRaw).toBe(ascN[0]);
    });
    it('should sort the users by last name Z-A', () => {
        TablesPage.open();
        TablesPage.toggleSortTable1.click(); // sorts A-Z
        TablesPage.toggleSortTable1.click(); // sorts Z-A
        names = TablesPage.getNamesFromTableOne();

        const firstNameRaw = names[0]; //apparently sort() is extremely invasive.
        let decN = names.sort().reverse(); //that's why firstNameRaw is created, so completely disassociate it from names[]

        expect(firstNameRaw).toBe(decN[0]);
    });
});
describe('Sorting table 2 on tables page', () => {
    it('should sort the users by last name A-Z', () => {
        TablesPage.open();
        TablesPage.toggleSortTable2.click(); // sorts A-Z
        names = TablesPage.getNamesFromTableTwo();

        const firstNameRaw = names[0]; //apparently sort() is extremely invasive.
        let ascN = names.sort(); //that's why firstNameRaw is created, so completely disassociate it from names[]

        expect(firstNameRaw).toBe(ascN[0]);
    });
    it('should sort the users by last name Z-A', () => {
        TablesPage.open();
        TablesPage.toggleSortTable2.click(); // sorts A-Z
        TablesPage.toggleSortTable2.click(); // sorts Z-A
        names = TablesPage.getNamesFromTableTwo();

        const firstNameRaw = names[0]; //apparently sort() is extremely invasive.
        let decN = names.sort().reverse(); //that's why firstNameRaw is created, so completely disassociate it from names[]

        expect(firstNameRaw).toBe(decN[0]);
    });
});




