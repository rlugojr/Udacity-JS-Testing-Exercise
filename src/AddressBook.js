function AddressBook(){
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact){
    this.contacts.push(contact);
}