describe('Address Book', function(){
    var addressBook,
        thisContact;

        beforeEach(function () {
            addressBook = new AddressBook();
            thisContact = new Contact();
        });

    it('should be able to add a contact', function () {
        

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function () {
        var addressBook = new AddressBook(),
            thisContact = new Contact();

        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBe(thisContact);
    });
});

describe('Async Address Book', function () {
    it('should grab initia contacts', function () {
        var addressBook = new AddressBook();

        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
    })
}