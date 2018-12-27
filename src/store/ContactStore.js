import ContactService from "../services/ContactService";
import { observable } from 'mobx'
export default class ContactStore {
  @observable
  contacts = [];
  @observable
  selectedContact = null;
  filterByName = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  //   @action
  async fetchContacts(filter) {
    this.contacts = await ContactService.getContacts(filter);
  }

  async getContactById(contactId) {
    console.log('contactId', contactId);
    const selectedContact = await ContactService.getContactById(contactId);
    this.selectedContact = selectedContact
  }

  getEmptyContact() {
    this.selectedContact = ContactService.getEmptyContact();
  }

  saveContact(contact) {
    console.log('saving', contact);
    return ContactService.saveContact(contact)
  }


  deleteContact(contactId) {
    ContactService.deleteContact(contactId)
  }


}